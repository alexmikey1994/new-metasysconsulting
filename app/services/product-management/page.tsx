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
    title: "Prioritize Developing What Truly Matters",
    desc: "Achieve alignment between your product and the market's needs. Provide features and offerings that resonate with customers and drive sales.",
  },
  {
    title: "Boost Chances of Product Success",
    desc: "Validate your product concept through market interaction, gathering insights for enhancement and minimizing the risk of unsuccessful outcomes.",
  },
  {
    title: "Address the Demands of the Market",
    desc: "Recognize and synchronize with market demands to achieve improved ROI and fulfill business goals.",
  },
  {
    title: "Research and Understand the Market",
    desc: "Dive deep into market dynamics to inform strategy and innovation, ensuring your product stands out in a competitive landscape.",
  },
];

export default function ProductManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Optimize Your Product Management Strategies with Metasys Consulting
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 mb-12"
        >
          Our consultancy experts analyze your organizations operations and guide you in identifying
          software needs and business challenges. We leverage cutting-edge technologies to optimize workflows,
          automate processes, and ensure your business remains competitive and efficient.
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
