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
    title: "Data Science & Analytics",
    desc: "Classification models predict categorical outcomes, regression models handle continuous predictions, and NLP models extract insights from text data by processing and analyzing language patterns.",
  },
  {
    title: "Machine Learning",
    desc: "Python and R are powerful tools for statistical analysis and building predictive models, allowing our data scientists to answer real business questions quickly.",
  },
  {
    title: "Survey Analytics",
    desc: "Conducted a survey? We'll break down the data, uncover patterns, and extract actionable insights to drive data-informed decisions.",
  },
  {
    title: "Business Intelligence",
    desc: "Simplify decision-making with real-time dashboards that integrate live data into interactive visualizations.",
  },
  {
    title: "Mobile App Analytics",
    desc: "Gain insights into user behavior within your Android/iOS apps by analyzing session duration, navigation patterns, and feature engagement.",
  },
  {
    title: "Digital Marketing Analytics",
    desc: "Monitor SEO and marketing campaigns through live dashboards showing traffic, conversions, and engagement metrics.",
  },
];

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Unlock Business Insights with Data Analytics Expertise from Metasys
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-300 mb-12"
        >
          Data is a valuable currency holding crucial insights — when properly analyzed.
          At Metasys, our expert analysts transform raw data into strategic advantage using
          advanced cleansing, feature engineering, and insightful visualization.
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

