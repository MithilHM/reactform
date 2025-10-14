const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const REG_DIR = path.join(__dirname, 'registrations');
const CSV_FILE_PATH = path.join(REG_DIR, 'team-registrations.csv');

// Ensure registrations folder exists
if (!fs.existsSync(REG_DIR)) fs.mkdirSync(REG_DIR);

// Initialize CSV with headers if needed
function initializeCsvFile() {
    if (!fs.existsSync(CSV_FILE_PATH)) {
        const header = [
            'Registration Date',
            'Registration Time',
            'Team Leader Name',
            'Team Leader Email',
            'Team Leader Phone',
            'Team Leader USN',
            'Member 1 Name',
            'Member 1 Email',
            'Member 1 Phone',
            'Member 1 USN',
            'Member 2 Name',
            'Member 2 Email',
            'Member 2 Phone',
            'Member 2 USN'
        ].join(',') + '\n';
        fs.writeFileSync(CSV_FILE_PATH, header);
    }
}
initializeCsvFile();

// Append new row to CSV
function appendToCsv(formData) {
    const now = new Date();
    const row = [
        now.toLocaleDateString('en-IN'),
        now.toLocaleTimeString('en-IN'),
        formData.leader.name,
        formData.leader.email,
        formData.leader.phone,
        formData.leader.usn,
        formData.member1.name,
        formData.member1.email,
        formData.member1.phone,
        formData.member1.usn,
        formData.member2.name,
        formData.member2.email,
        formData.member2.phone,
        formData.member2.usn
    ]
    .map(val => `"${(val ?? '').replace(/"/g, '""')}"`)
    .join(',') + '\n';
    fs.appendFileSync(CSV_FILE_PATH, row, 'utf8');
}

app.get('/', (req, res) => {
    res.send('Hackathon Registration API is running.');
});

app.post('/api/register', (req, res) => {
    try {
        const { leader, member1, member2 } = req.body;
        if (!leader || !member1 || !member2) {
            return res.status(400).json({ success: false, message: "Incomplete team data." });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const allEmails = [leader.email, member1.email, member2.email];
        if (allEmails.some(email => !emailRegex.test(email))) {
            return res.status(400).json({ success: false, message: "Invalid email address." });
        }
        // USN check (optional on backend, frontend already does strict)
        const allUsns = [leader.usn, member1.usn, member2.usn];
        if (allUsns.some(usn => typeof usn !== 'string' || usn.length !== 10)) {
            return res.status(400).json({ success: false, message: "USN must be exactly 10 characters." });
        }
        appendToCsv({ leader, member1, member2 });
        return res.json({ success: true, message: "Team registered successfully!" });
    } catch (error) {
        console.error('Registration Error:', error);
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
});

app.get('/api/register/download', (req, res) => {
    if (fs.existsSync(CSV_FILE_PATH)) {
        res.download(CSV_FILE_PATH, "team-registrations.csv");
    } else {
        res.status(404).json({ success: false, message: "No registrations found." });
    }
});

// Run server
app.listen(PORT, () => {
    console.log(`Registration backend running on http://localhost:${PORT}`);
    console.log(`POST registrations to /api/register`);
    console.log(`Download CSV at /api/register/download`);
});
