import { motion } from 'motion/react';
import { Shield, Cpu, Cloud, BookOpen, GraduationCap, Terminal, ChevronRight, Lock, ClipboardCheck, Activity, Users, BotMessageSquare } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e4e3e0] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      
      {/* Glowing Orb */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00f0ff] blur-[150px] opacity-10 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-[#141414]">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-[#00f0ff]" />
          <span className="font-display font-bold text-xl tracking-tight">AETHERIS<span className="text-[#00f0ff]">CYBER</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#8e9299]">
          <a href="#expertise" className="hover:text-[#00f0ff] transition-colors">Expertise</a>
          <a href="#services" className="hover:text-[#00f0ff] transition-colors">Services</a>
          <a href="#products" className="hover:text-[#00f0ff] transition-colors">Products</a>
        </div>
        <button className="px-5 py-2.5 border border-[#00f0ff] text-[#00f0ff] font-mono text-xs uppercase tracking-widest hover:bg-[#00f0ff] hover:text-[#050505] transition-all duration-300 cursor-pointer">
          Get in Touch
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 pt-24 md:pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                Academic Precision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-cyan-400">Enterprise Security.</span>
              </h1>
              <p className="text-lg text-[#8e9299] max-w-xl mb-10 leading-relaxed">
                We empower non-technical organizations with academic-grade security. From governance to proactive threat detection, we secure your operations so you can focus on growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats / Pedigree Section */}
        <section id="expertise" className="border-y border-[#141414] bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#141414]">
              <div className="flex flex-col items-center text-center md:px-8 py-4 md:py-0">
                <GraduationCap className="w-8 h-8 text-[#00f0ff] mb-4" />
                <h3 className="font-display text-4xl font-bold mb-2">2</h3>
                <p className="font-mono text-xs text-[#8e9299] uppercase tracking-widest">Founding Professors</p>
                <p className="text-sm text-[#8e9299] mt-4">Built by leading academics bridging the gap between theoretical research and practical defense.</p>
              </div>
              <div className="flex flex-col items-center text-center md:px-8 py-8 md:py-0">
                <Shield className="w-8 h-8 text-[#00f0ff] mb-4" />
                <h3 className="font-display text-4xl font-bold mb-2">50+</h3>
                <p className="font-mono text-xs text-[#8e9299] uppercase tracking-widest">Years Experience</p>
                <p className="text-sm text-[#8e9299] mt-4">Combined expertise in cyber warfare, cryptography, and advanced threat mitigation.</p>
              </div>
              <div className="flex flex-col items-center text-center md:px-8 py-8 md:py-0">
                <BookOpen className="w-8 h-8 text-[#00f0ff] mb-4" />
                <h3 className="font-display text-4xl font-bold mb-2">24+</h3>
                <p className="font-mono text-xs text-[#8e9299] uppercase tracking-widest">Publications</p>
                <p className="text-sm text-[#8e9299] mt-4">Peer-reviewed research in cloud security and AI-driven threat detection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-8 py-24 md:py-32">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Comprehensive Services</h2>
            <p className="text-[#8e9299] font-mono text-sm uppercase tracking-widest">Tailored for non-technical organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu />, title: "AI-Driven Threat Detection", desc: "Proprietary ML models to identify vulnerabilities before exploitation." },
              { icon: <Cloud />, title: "Cloud Security", desc: "Auditing, hardening, and monitoring for AWS, Azure, and GCP." },
              { icon: <Lock />, title: "Penetration Testing", desc: "Academic-grade assessments simulating sophisticated actors." },
              { icon: <ClipboardCheck />, title: "Compliance & Governance", desc: "ISO 27001, SOC2, GDPR gap analysis and policy creation." },
              { icon: <Users />, title: "Security Awareness", desc: "Employee training and simulated phishing campaigns." },
              { icon: <Activity />, title: "IoT & Embedded Security", desc: "Securing manufacturing, smart grids, and IoT devices." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-[#141414] bg-[#0a0a0a] hover:border-[#00f0ff]/50 transition-colors group"
              >
                <div className="mb-6 p-3 bg-[#050505] inline-block border border-[#141414] group-hover:border-[#00f0ff]/30 transition-colors text-[#00f0ff]">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#8e9299] leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="border-t border-[#141414] bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">T-Pot Platform</h2>
                <p className="text-lg text-[#8e9299] mb-8 leading-relaxed">
                  Our flagship automated security platform. T-Pot combines advanced machine learning with search-based systems to provide continuous threat detection, mapping to the MITRE ATT&CK framework, and automated rule generation for proactive prevention.
                </p>
                <ul className="space-y-4 font-mono text-sm text-[#e4e3e0]">
                  <li className="flex items-center gap-3"><BotMessageSquare className="w-5 h-5 text-[#00f0ff]" /> Automated Threat Detection</li>
                  <li className="flex items-center gap-3"><BotMessageSquare className="w-5 h-5 text-[#00f0ff]" /> MITRE ATT&CK Mapping</li>
                  <li className="flex items-center gap-3"><BotMessageSquare className="w-5 h-5 text-[#00f0ff]" /> Automated Rule Generation</li>
                </ul>
              </div>
              <div className="border border-[#141414] bg-[#050505] p-8 rounded-2xl border-glow">
                <div className="font-mono text-xs text-[#8e9299] mb-4">&gt; T-POT_PLATFORM_STATUS</div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#141414] rounded-full overflow-hidden"><div className="h-full w-[85%] bg-[#00f0ff]" /></div>
                  <div className="flex justify-between text-xs text-[#8e9299]"><span>Detection Engine</span><span>85%</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-[#141414] bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[100%] rounded-full bg-[#00f0ff] blur-[200px] opacity-10 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-8 py-24 md:py-32 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Secure Your Future.</h2>
            <p className="text-lg text-[#8e9299] mb-10 max-w-2xl mx-auto">
              Partner with academic pioneers to fortify your infrastructure against tomorrow's threats.
            </p>
            <button className="px-8 py-4 bg-[#00f0ff] text-[#050505] font-mono text-sm uppercase tracking-wider hover:bg-cyan-400 transition-colors inline-flex items-center gap-2 cursor-pointer">
              Initiate Consultation <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#141414] bg-[#050505] py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#8e9299]" />
            <span className="font-display font-bold text-lg tracking-tight text-[#8e9299]">AETHERIS<span className="text-[#4a4a4a]">CYBER</span></span>
          </div>
          <div className="font-mono text-xs text-[#4a4a4a] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Aetheris Cyber Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
