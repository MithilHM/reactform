import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import GlassCard from './ui/GlassCard';
import SparkButton from './ui/SparkButton';

const schema = z.object({
  leader: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    usn: z.string().length(10, "USN must be exactly 10 characters"),
  }),
  member1: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    usn: z.string().length(10, "USN must be exactly 10 characters"),
  }),
  member2: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
    usn: z.string().length(10, "USN must be exactly 10 characters"),
  }),
});

const Label = ({ children, className = "" }) => (
  <label className={`block text-cyber-blue-400 font-bold text-lg md:text-xl mb-1 ${className}`}>
    {children}
  </label>
);

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      leader: { name: '', email: '', phone: '', usn: '' },
      member1: { name: '', email: '', phone: '', usn: '' },
      member2: { name: '', email: '', phone: '', usn: '' }
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          reset();
        }, 3000);
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      alert('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const MemberSection = ({ memberKey, title }) => (
    <div className="space-y-2">
      <div className="text-neon-blue font-bold text-lg md:text-xl mb-2 tracking-wide">
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
        <div>
          <Label>Full Name</Label>
          <input
            {...register(`${memberKey}.name`)}
            placeholder="Full Name"
            className="w-full p-3 md:p-4 rounded-xl bg-hack-navy border border-glass-border
              focus:border-cyber-blue-400 focus:ring-2 focus:ring-cyber-blue-400/30
              text-white placeholder-gray outline-none transition-all duration-300
              hover:border-neon-blue/50"
            autoComplete="off"
          />
          {errors[memberKey]?.name && (
            <p className="text-alert-red text-xs md:text-sm mt-1 font-matrix">{errors[memberKey].name.message}</p>
          )}
        </div>
        <div>
          <Label>Email</Label>
          <input
            {...register(`${memberKey}.email`)}
            type="email"
            placeholder="Email"
            className="w-full p-3 md:p-4 rounded-xl bg-hack-navy border border-glass-border
              focus:border-cyber-blue-400 focus:ring-2 focus:ring-cyber-blue-400/30
              text-white placeholder-gray outline-none transition-all duration-300
              hover:border-neon-blue/50"
            autoComplete="off"
          />
          {errors[memberKey]?.email && (
            <p className="text-alert-red text-xs md:text-sm mt-1 font-matrix">{errors[memberKey].email.message}</p>
          )}
        </div>
        <div>
          <Label>Phone</Label>
          <input
            {...register(`${memberKey}.phone`)}
            placeholder="Phone"
            className="w-full p-3 md:p-4 rounded-xl bg-hack-navy border border-glass-border
              focus:border-cyber-blue-400 focus:ring-2 focus:ring-cyber-blue-400/30
              text-white placeholder-gray outline-none transition-all duration-300
              hover:border-neon-blue/50"
            autoComplete="off"
          />
          {errors[memberKey]?.phone && (
            <p className="text-alert-red text-xs md:text-sm mt-1 font-matrix">{errors[memberKey].phone.message}</p>
          )}
        </div>
        <div>
          <Label>USN</Label>
          <input
            {...register(`${memberKey}.usn`)}
            placeholder="USN"
            maxLength={10}
            className="w-full p-3 md:p-4 rounded-xl bg-hack-navy border border-glass-border
              focus:border-cyber-blue-400 focus:ring-2 focus:ring-cyber-blue-400/30
              text-white placeholder-gray outline-none transition-all duration-300
              hover:border-neon-blue/50"
            autoComplete="off"
          />
          {errors[memberKey]?.usn && (
            <p className="text-alert-red text-xs md:text-sm mt-1 font-matrix">{errors[memberKey].usn.message}</p>
          )}
        </div>
      </div>
    </div>
  );

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-2 md:px-8 py-8">
        <GlassCard className="w-full max-w-md md:max-w-lg text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-matrix-green mb-2">REGISTRATION SUCCESSFUL</h2>
          <div className="text-base md:text-lg text-electric-cyan mb-4">
            Your team has been registered for Hack the Matrix!
          </div>
          <div className="mt-6 text-4xl md:text-6xl text-matrix-green animate-pulse">✓</div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-2 md:px-6 py-8 md:py-16">
      <GlassCard className="w-full max-w-md md:max-w-2xl shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-8">
          <div className="text-center mb-4 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wider text-cyber-blue-400 mb-2">
              TEAM REGISTRATION
            </h1>
            <div className="text-sm md:text-lg text-gray">
              Register your team for Hack the Matrix
            </div>
          </div>
          <MemberSection memberKey="leader" title="TEAM LEADER" />
          <MemberSection memberKey="member1" title="TEAM MEMBER 1" />
          <MemberSection memberKey="member2" title="TEAM MEMBER 2" />
          <SparkButton className="w-full mt-6 md:mt-12">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg
                transition-all duration-300
                bg-cyber-blue-400 text-hack-black hover:bg-neon-blue
                hover:shadow-[0_0_40px_rgba(28,171,242,0.8)]
                disabled:opacity-50 disabled:cursor-not-allowed
                transform hover:scale-105"
            >
              {isSubmitting ? "SUBMITTING..." : "REGISTER TEAM"}
            </button>
          </SparkButton>
        </form>
      </GlassCard>
    </div>
  );
};

export default RegistrationForm;
