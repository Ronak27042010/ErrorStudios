'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { Smartphone, Globe, Gamepad2, Wand2, Brain, Blocks, CheckCircle2, Star } from 'lucide-react';

const services = [
  ['Mobile App Development', Smartphone],['Website Development', Globe],['Game Development', Gamepad2],['UI/UX Design', Wand2],['AI Solutions', Brain],['Custom Software Development', Blocks]
];

export default function Home() {
  return (
    <main className="relative bg-base bg-grid [background-size:28px_28px]">
      <Navbar />
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon via-violet to-neon w-full z-50" />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden mouse-glow" onMouseMove={(e)=>{const t=e.currentTarget; t.style.setProperty('--x',`${e.clientX}px`); t.style.setProperty('--y',`${e.clientY}px`);}}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(92,225,255,.2),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(138,110,255,.2),transparent_45%)]"/>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center px-6 max-w-4xl">
          <p className="text-neon mb-4">FUTURE-READY DIGITAL ENGINEERING</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Building Digital Experiences Beyond Imagination</h1>
          <p className="mt-6 text-lg text-white/75">We create powerful apps, immersive games, stunning websites, and custom software solutions for modern businesses.</p>
          <div className="mt-8 flex gap-4 justify-center"><button className="px-6 py-3 rounded-full bg-neon text-black font-semibold">Start Your Project</button><button className="px-6 py-3 rounded-full glass">Explore Services</button></div>
        </motion.div>
      </section>

      <Section id="about" title="About Error Studios">
        <p className="text-white/75 max-w-3xl">Error Studios is a futuristic software company specializing in app development, game development, website engineering, UI/UX design, AI tools, and custom software.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-8">{['120+ Projects Completed','80+ Happy Clients','30+ Active Technologies','8 Years of Innovation'].map(s=><div className="glass rounded-2xl p-6" key={s}>{s}</div>)}</div>
      </Section>

      <Section id="services" title="Services">
        <div className="grid md:grid-cols-3 gap-5">{services.map(([name,Icon])=><motion.div whileHover={{y:-8}} key={name} className="glass rounded-2xl p-6 shadow-glow"><Icon className="text-neon"/><h3 className="mt-3 text-xl">{name}</h3><p className="text-white/70 text-sm mt-2">Premium, scalable, and performance-oriented delivery tailored to your goals.</p><button className="mt-4 text-neon">Learn More →</button></motion.div>)}</div>
      </Section>

      <Section id="portfolio" title="Portfolio Showcase">
        <div className="grid md:grid-cols-3 gap-5">{['NeonBank App','Quantum Commerce Web','EchoVerse Game'].map((p,i)=><div key={p} className="group relative overflow-hidden rounded-2xl glass p-4"><div className="h-44 rounded-xl bg-gradient-to-br from-violet/50 to-neon/30 group-hover:scale-105 transition"/><p className="mt-3">{p}</p><p className="text-xs text-white/60">{['App','Website','Game'][i]} Project</p></div>)}</div>
      </Section>

      <Section id="why" title="Why Choose Us">
        <div className="grid md:grid-cols-2 gap-4">{['Fast Development','Modern Design','Optimized Performance','Scalable Architecture','Client-focused Workflow','Affordable Solutions'].map(f=><div className="glass rounded-xl p-4 flex gap-3" key={f}><CheckCircle2 className="text-neon"/><span>{f}</span></div>)}</div>
      </Section>

      <Section id="process" title="Our Process">
        <ol className="space-y-4">{['Idea Discussion','Planning','Design','Development','Testing','Launch'].map((s,i)=><li key={s} className="glass rounded-xl p-4">{i+1}. {s}</li>)}</ol>
      </Section>

      <Section id="testimonials" title="Testimonials">
        <div className="grid md:grid-cols-3 gap-4">{['Ava','Noah','Mia'].map(n=><motion.div key={n} animate={{y:[0,-6,0]}} transition={{repeat:Infinity,duration:4}} className="glass rounded-2xl p-5"><div className="flex gap-1 text-yellow-400">{[...Array(5)].map((_,i)=><Star key={i} size={14} fill="currentColor"/>)}</div><p className="mt-3 text-white/80">"Error Studios delivered beyond expectations with futuristic design and flawless engineering."</p><p className="mt-3 text-sm">{n} • Venture Co.</p></motion.div>)}</div>
      </Section>

      <Section id="pricing" title="Pricing">
        <div className="grid md:grid-cols-3 gap-4">{['Starter','Professional','Enterprise'].map((p,i)=><div key={p} className={`rounded-2xl p-6 ${i===1?'border border-neon shadow-glow':'glass'}`}><h3 className="text-2xl">{p}</h3><p className="text-white/70 mt-2">Custom scope based pricing</p><ul className="mt-4 space-y-2 text-sm text-white/80"><li>✔ Discovery Workshop</li><li>✔ UI/UX System</li><li>✔ Full Build</li></ul></div>)}</div>
      </Section>

      <Section id="faq" title="Frequently Asked Questions">
        <div className="space-y-3">{['How is pricing calculated?','Typical project timeline?','What technologies do you use?','How many revisions are included?','Do you offer post-launch support?'].map(q=><details className="glass rounded-xl p-4" key={q}><summary className="cursor-pointer">{q}</summary><p className="mt-2 text-white/70">We provide flexible, transparent plans based on your exact requirements.</p></details>)}</div>
      </Section>

      <Section id="contact" title="Contact Us">
        <form className="grid md:grid-cols-2 gap-4 glass rounded-2xl p-6">
          <input required placeholder="Name" className="bg-white/5 rounded-lg p-3"/><input required type="email" placeholder="Email" className="bg-white/5 rounded-lg p-3"/>
          <input placeholder="Service Required" className="bg-white/5 rounded-lg p-3 md:col-span-2"/><textarea required placeholder="Message" className="bg-white/5 rounded-lg p-3 md:col-span-2 min-h-32"/>
          <button className="md:col-span-2 rounded-xl p-3 bg-gradient-to-r from-neon to-violet text-black font-semibold">Send Message</button>
        </form>
        <div className="mt-5 text-white/70">hello@errorstudios.dev • WhatsApp • X • LinkedIn • GitHub</div>
      </Section>

      <footer className="border-t border-white/10 py-10 text-center text-white/60">© {new Date().getFullYear()} Error Studios — Premium digital solutions.</footer>
    </main>
  );
}
