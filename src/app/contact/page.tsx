"use client";

import Link from "next/link";
import ContactHero from "@/features/contact/ContactHero";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Linkedin, Twitter, Github } from "lucide-react";

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
  return (
    <div className="pb-32 bg-bg-deep rounded-t-[4rem]">
      <ContactHero />

      <section className="pt-48 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Contact Info - Centered */}
          <div className="text-center mb-20 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Let&apos;s Build Something <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-secondary">Extraordinary</span>
            </motion.h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore how we can help your business grow, we&apos;re here to listen and provide expert guidance.
            </p>

          </div>

          {/* Contact Form - Horizontal / Full-width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-effect p-12 md:p-16 rounded-[3.5rem] border border-brand-primary/20 relative"
          >
            <div className="space-y-10 relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-10">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold">Send us a Message</h3>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white" placeholder="Doe" />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white appearance-none">
                    <option className="bg-bg-deep">Software Development</option>
                    <option className="bg-bg-deep">Server Management</option>
                    <option className="bg-bg-deep">Web Development</option>
                    <option className="bg-bg-deep">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="flex justify-center">
                <button className="w-full md:w-auto px-16 py-6 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 group shadow-2xl shadow-brand-primary/30">
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Social Links - Moved to bottom of form */}
              <div className="flex justify-center space-x-6 pt-8 border-t border-white/5">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <Link key={i} href="#" className="p-4 glass-effect rounded-2xl hover:bg-brand-primary/20 transition-all text-gray-400 hover:text-white">
                    <Icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-secondary/5 rounded-full blur-[80px] -z-10" />
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
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">Visit us at our offices in Vadodara and Ahmedabad</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {OFFICES.map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl overflow-hidden group flex flex-col"
            >
              {/* Office Info Box - Moved from above */}
              <div className="mb-8 p-4 min-h-[200px]">
                <h3 className="text-2xl font-bold mb-6 text-brand-primary group-hover:text-brand-secondary transition-colors">{office.name}</h3>
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
                  className="filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
