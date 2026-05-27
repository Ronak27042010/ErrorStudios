'use client';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(true);
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl glass rounded-full px-5 py-3 flex justify-between items-center">
      <div className="font-semibold">⚡ Error Studios</div>
      <nav className="hidden md:flex gap-6 text-sm text-white/80">{['About','Services','Portfolio','Process','Contact'].map(i=> <a key={i} href={`#${i.toLowerCase()}`}>{i}</a>)}</nav>
      <button onClick={() => {document.documentElement.classList.toggle('dark'); setDark(!dark);}} className="rounded-full p-2 bg-white/10">{dark ? <Sun size={16}/> : <Moon size={16}/>}</button>
    </motion.header>
  );
}
