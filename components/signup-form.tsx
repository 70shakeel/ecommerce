"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { COUNTRIES } from "@/lib/constants";

export function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    country: "Germany", // Default or dynamic
    gender: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle submission logic (mock)
  };

  return (
    <div className="max-w-[480px] mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4 tracking-tight">BECOME A MEMBER</h1>
        <p className="text-[#8d8d8d] text-sm leading-relaxed max-w-sm mx-auto">
          Create your PIKE Member profile and get first access to the very best of Pike products, inspiration and community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input 
            placeholder="Email address" 
            type="email" 
            className="h-12 rounded-sm border-[#e5e5e5] placeholder:text-[#8d8d8d]"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <Input 
            placeholder="Password" 
            type="password" 
            className="h-12 rounded-sm border-[#e5e5e5] placeholder:text-[#8d8d8d]"
            required
             value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <div>
          <Input 
            placeholder="First Name" 
            className="h-12 rounded-sm border-[#e5e5e5] placeholder:text-[#8d8d8d]"
            required
             value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </div>
        <div>
          <Input 
            placeholder="Last Name" 
            className="h-12 rounded-sm border-[#e5e5e5] placeholder:text-[#8d8d8d]"
            required
             value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
         <div>
          <Input 
            placeholder="Date of Birth" 
            type="date"
            className="h-12 rounded-sm border-[#e5e5e5] placeholder:text-[#8d8d8d] text-[#8d8d8d]"
            required // Basic HTML5 validation
             value={formData.dob}
            onChange={(e) => setFormData({...formData, dob: e.target.value})}
          />
           <p className="text-[10px] text-[#8d8d8d] mt-1 text-center">
            Get a Nike Member Reward every year on your Birthday.
          </p>
        </div>

        <div>
             <select 
                className="flex h-12 w-full items-center justify-between rounded-md border border-[#e5e5e5] bg-transparent px-3 py-2 text-sm text-[#8d8d8d] placeholder:text-[#8d8d8d] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
             >
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
             </select>
        </div>

        <div className="flex gap-4 mb-6">
             <Button
                type="button"
                variant="outline"
                className={`flex-1 h-12 rounded-sm border-[#e5e5e5] text-[#8d8d8d] hover:border-black hover:text-black ${formData.gender === 'Male' ? 'border-black text-black' : ''}`}
                onClick={() => setFormData({...formData, gender: 'Male'})}
             >
                Male
             </Button>
              <Button
                type="button"
                variant="outline"
                className={`flex-1 h-12 rounded-sm border-[#e5e5e5] text-[#8d8d8d] hover:border-black hover:text-black ${formData.gender === 'Female' ? 'border-black text-black' : ''}`}
                onClick={() => setFormData({...formData, gender: 'Female'})}
             >
                Female
             </Button>
        </div>

        <div className="flex items-start gap-3 mb-6">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black" id="updates"/>
            <label htmlFor="updates" className="text-xs text-[#8d8d8d]">
                Sign up for emails to get updates from Pike on products, offers and your Member benefits.
            </label>
        </div>

        <p className="text-xs text-[#8d8d8d] text-center mb-6">
          By creating an account, you agree to Pike's <Link href="#" className="underline">Privacy Policy</Link> and <Link href="#" className="underline">Terms of Use</Link>.
        </p>

        <Button type="submit" className="w-full h-12 bg-black text-white hover:bg-gray-800 rounded-sm font-bold text-sm tracking-widest uppercase">
          Join Us
        </Button>

         <p className="text-xs text-[#8d8d8d] text-center mt-4">
          Already a Member? <Link href="#" className="text-black underline">Sign In.</Link>
        </p>
      </form>
    </div>
  );
}
