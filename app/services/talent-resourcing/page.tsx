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
    title: "Professional Search",
    desc: "Discover the most suitable individuals for the appropriate positions to execute your strategy effectively.",
  },
  {
    title: "Interim Executives & Professionals",
    desc: "Seize the opportunity to adapt swiftly and propel forward by harnessing the capabilities of interim talent.",
  },
  {
    title: "Recruitment Process Outsourcing",
    desc: "Beyond traditional Recruitment Process Outsourcing (RPO), we bring tangible talent results to fruition.",
  },
];

export default function TalentResourcingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Enhance Your Talent Resourcing with Metasys Consulting Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 mb-12"
        >
          Metasys facilitates businesses in efficiently finding and onboarding new team members in critical global locations. Organizations can leverage an unparalleled network of recruitment specialists to identify the perfect candidate tailored to their precise requirements, including industry, geographical region, and past expertise.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-6"
        >
          Elevate Your Talent Acquisition with Metasys Consulting Solutions
        </motion.h2>

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
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
