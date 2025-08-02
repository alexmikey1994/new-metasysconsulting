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
    title: "Custom Web Development",
    desc: "We adeptly handle inventory management and office process transitions to the cloud.",
  },
  {
    title: "Mobile App Development",
    desc: "We design intuitive and engaging mobile apps for a superior user experience.",
  },
  {
    title: "SEO and Analytics",
    desc: "Our SEO services are designed to increase your online visibility and drive more traffic to your site.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Metasys Consulting is the Leading Destination for Professional Web Development Services!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 mb-12"
        >
          Our approach to web development is comprehensive, encompassing everything from web design and content to coding and markup. As a group of seasoned professionals working together, we take great pride in our teamwork. Our objective is to develop your website such that it not only ranks higher in search engines but also provides your users with the best possible experience.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-6"
        >
          Web Development Services by Metasys Consulting
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
