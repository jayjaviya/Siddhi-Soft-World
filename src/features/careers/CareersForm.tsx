"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, User, Mail, Briefcase, Link as LinkIcon, MessageSquare, ChevronDown, FileText, X } from "lucide-react";

export default function CareersForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "Senior Full Stack Engineer",
    portfolio: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (errors.cv) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.cv;
          return newErrors;
        });
      }
    }
  };

  const removeFile = () => {
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us why you're a fit";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message is too short (min 20 chars)";
    }
    
    if (!fileName) {
      newErrors.cv = "Please attach your resume";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setShowSuccess(false);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        position: "Senior Full Stack Engineer",
        portfolio: "",
        message: ""
      });
      setFileName(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
      // Reset success after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="apply" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Journey</span></h2>
            <p className="text-gray-400 text-lg">Submit your details and let's explore your potential at Siddhi Soft World.</p>
          </div>

          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-sm">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                  <User className="w-3 h-3 text-white" /> Full Name
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full bg-white/5 border ${errors.fullName ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all text-sm`}
                />
                {errors.fullName && <p className="text-[10px] text-red-500 font-bold px-1">{errors.fullName}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                  <Mail className="w-3 h-3 text-white" /> Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all text-sm`}
                />
                {errors.email && <p className="text-[10px] text-red-500 font-bold px-1">{errors.email}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                  <Briefcase className="w-3 h-3 text-white" /> Position
                </label>
                <div className="relative">
                  <select 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all appearance-none cursor-pointer text-sm pr-12"
                  >
                    <option className="bg-[#080808]">Senior Full Stack Engineer</option>
                    <option className="bg-[#080808]">Infrastructure Specialist</option>
                    <option className="bg-[#080808]">UI/UX Designer</option>
                    <option className="bg-[#080808]">Other / General Inquiry</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                  <LinkIcon className="w-3 h-3 text-white" /> Portfolio URL
                </label>
                <input 
                  type="url" 
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all text-sm"
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                  <MessageSquare className="w-3 h-3 text-white" /> Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share your experience..."
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all resize-none text-sm`}
                />
                {errors.message && <p className="text-[10px] text-red-500 font-bold px-1">{errors.message}</p>}
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-white/50 text-[11px] font-medium">
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-10 h-10 rounded-xl bg-white/5 border ${errors.cv ? 'border-red-500/50' : 'border-white/10'} flex items-center justify-center group cursor-pointer hover:border-brand-primary transition-all`}
                    >
                      <Upload className="w-4 h-4 text-white group-hover:text-brand-primary" />
                    </div>
                    
                    {fileName ? (
                      <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg animate-in fade-in slide-in-from-left-2 duration-300">
                        <FileText className="w-3 h-3 text-white" />
                        <span className="text-white font-bold max-w-[150px] truncate">{fileName}</span>
                        <button 
                          type="button" 
                          onClick={(e) => { e.stopPropagation(); removeFile(); }}
                          className="hover:text-brand-primary transition-colors"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ) : (
                      <span>Attach CV (PDF, Max 5MB)</span>
                    )}
                  </div>
                  {errors.cv && <p className="text-[10px] text-red-500 font-bold px-1">{errors.cv}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-black tracking-widest uppercase text-[10px] rounded-xl shadow-2xl shadow-brand-primary/20 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center text-white font-black tracking-widest uppercase text-[10px]">
                      Sending...
                    </span>
                  )}
                  <motion.div
                    animate={isSubmitting ? {
                      x: [0, 40, 80],
                      y: [0, -40, -80],
                      opacity: [1, 1, 0],
                      scale: [1, 1.2, 0.5]
                    } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2 text-center pt-6"
                >
                  <p className="text-white font-bold text-sm tracking-wide">
                    Application submitted successfully! We'll be in touch soon.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
