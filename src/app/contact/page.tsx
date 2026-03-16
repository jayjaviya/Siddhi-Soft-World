"use client";

import { useState } from "react";
import Link from "next/link";
import ContactHero from "@/features/contact/ContactHero";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Linkedin, Facebook, Instagram, User, Briefcase, ChevronDown } from "lucide-react";
import XIcon from "@/components/ui/XIcon";

const OFFICES = [
  {
    name: "Vadodara Office",
    address: "4-29, Ekta Nagar, Chhani Jakatnaka, Vadodara, 390024",
    phone: "+91 94283 38806",
    email: "info@siddhisoftworld.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9776.426153665807!2d73.16995200842726!3d22.348671171735532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9296c440259%3A0xccde35639f925b24!2s4-29%2C%20Ekta%20Nagar%2C%20Chhani%20Jakatnaka%2C%20Vadodara%2C%20Gujarat%20390024!5e0!3m2!1sen!2sin!4v1772104835485!5m2!1sen!2sin",
  },
  {
    name: "Ahmedabad Office",
    address: "208 2nd Floor, Seven Work Space, Ratnam Complex, Opp. Yes Bank, Chimanlal Girdharlal Rd, Ahmedabad",
    phone: "+91 96019 99083",
    email: "ahmedabad@siddhisoftworld.com",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.896437739139!2d72.55556857304632!3d23.02757441614585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e3fee2bf29%3A0x1d66331c720c3b27!2sSeven%20Work%20Space!5e0!3m2!1sen!2sin!4v1772105097032!5m2!1sen!2sin",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Software Development",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowSuccess(false);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "Software Development",
        message: ""
      });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="pb-32 bg-bg-deep rounded-t-[4rem]">
      <ContactHero />

      <section className="pt-48 pb-24 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Let&apos;s Build Something <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Extraordinary</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              Get in touch with our experts and let&apos;s turn your ideas into digital reality.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <form onSubmit={handleSubmit} className="bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                    <User className="w-3 h-3 text-white" /> First Name
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John" 
                    className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all text-sm`}
                  />
                  {errors.firstName && <p className="text-[10px] text-red-500 font-bold px-1">{errors.firstName}</p>}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                    <User className="w-3 h-3 text-white" /> Last Name
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe" 
                    className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all text-sm`}
                  />
                  {errors.lastName && <p className="text-[10px] text-red-500 font-bold px-1">{errors.lastName}</p>}
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
                    <Briefcase className="w-3 h-3 text-white" /> Subject
                  </label>
                  <div className="relative">
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all appearance-none cursor-pointer text-sm pr-12"
                    >
                      <option className="bg-[#080808]">Software Development</option>
                      <option className="bg-[#080808]">Server Management</option>
                      <option className="bg-[#080808]">Web Development</option>
                      <option className="bg-[#080808]">Other Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none transition-colors" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 px-1">
                  <MessageSquare className="w-3 h-3 text-white" /> Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5} 
                  placeholder="Tell us about your project..."
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-brand-primary focus:bg-white/[0.08] transition-all resize-none text-sm`}
                />
                {errors.message && <p className="text-[10px] text-red-500 font-bold px-1">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10">
                {/* Social Links */}
                <div className="flex gap-4">
                  {[
                    { Icon: Linkedin, href: "#" },
                    { Icon: XIcon, href: "https://x.com/siddhisoftworld" },
                    { Icon: Facebook, href: "https://www.facebook.com/siddhisoftworld" },
                    { Icon: Instagram, href: "https://www.instagram.com/siddhisoftworldcom/" }
                  ].map((social, i) => (
                    <Link 
                      key={i} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-brand-primary transition-all text-white/50 hover:text-white"
                    >
                      <social.Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-black tracking-widest uppercase text-[10px] rounded-xl shadow-2xl shadow-brand-primary/20 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                  className="text-center pt-8 border-t border-white/5 mt-8"
                >
                  <p className="text-white font-bold text-sm tracking-wide">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}
            </form>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 container mx-auto px-6 border-t border-white/5">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Locations</span>
          </motion.h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-xl mx-auto">Visit us at our offices in Vadodara and Ahmedabad</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {OFFICES.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl overflow-hidden group flex flex-col hover:!border-[#EE7128] hover:!border transition-all duration-300 border border-white/5"
            >
              <div className="mb-8 p-4 min-h-[200px]">
                <h3 className="text-2xl font-bold mb-6 text-brand-primary">{office.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 text-sm">
                    <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-gray-300">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-gray-300">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-gray-300">{office.email}</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
                <iframe
                  src={office.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
