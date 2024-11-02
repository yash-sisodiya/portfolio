import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            JD
          </motion.div>
          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="mailto:contact@example.com" icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-700 hover:text-purple-600 transition-colors"
    >
      {icon}
    </motion.a>
  );
}