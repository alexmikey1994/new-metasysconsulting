"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
};

const highlights = [
  {
    title: "Performance Improvement",
    desc: "We turn big ambitions into reality using proven tools and expertise. Our methods help you measure, sustain, and improve performance organization-wide.",
  },
  {
    title: "Workforce Transformation",
    desc: "Forget off-the-shelf software. We tailor workforce planning to your unique needs, focusing on capability enhancement and strategic agility.",
  },
  {
    title: "Culture Transformation",
    desc: "We help shape the culture your strategy demands—fueling engagement and aligning your team with your organizational mission.",
  },
  {
    title: "Technology Enablement",
    desc: "Technology only works when people and processes adapt with it. We ensure workflows and teams are ready to make your tech investments succeed.",
  },
  {
    title: "Transformative Change",
    desc: "Change is opportunity. We help you turn transformation into a competitive edge—not just react to it.",
  },
];

export default function ProjectManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Elevate Your Project Management with Metasys Consulting Expertise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 mb-12"
        >
          From small-scale projects to billion-dollar initiatives, Metasys delivers success under pressure. 
          Whether it&apos;s remote execution or strict timelines, we adapt to your environment, people, and technologies to ensure impact and efficiency.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#1F1F2F] p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-xl hover:border-indigo-500 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">{item.title}</h2>
              <p className="text-gray-300 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
