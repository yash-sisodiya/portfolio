import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "Express", "FastAPI"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "DevOps",
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    technologies: ["Figma", "Adobe XD", "Responsive Design"]
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 -z-10" />
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}