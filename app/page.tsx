"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 1.1,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

// Section Heading
const SectionHeading = ({ text, sizeClass }: { text: string; sizeClass?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { scale: 2.8, xPercent: 0, yPercent: 0 },
        {
          scale: 1,
          xPercent: -40,
          scrollTrigger: {
            trigger: ref.current,
            start: "top center",
            end: "top top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 sticky top-24 z-10 text-center">
      <h2 className={`text-white font-bold ${sizeClass || "text-6xl md:text-5xl"} mb-12`}>{text}</h2>
    </div>
  );
};

// Data
const services = [
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Product Management", path: "/services/product-management" },
  { name: "Project Management", path: "/services/project-management" },
  { name: "Talent Resourcing", path: "/services/talent-resourcing" },
  { name: "Web Development", path: "/services/web-development" },
  { name: "Custom Solutions", path: "/services/custom-solutions" },
];

const caseStudies = [
  {
    title: "Digital Talent Acquisition for Global IT Firm",
    challenge: "A Fortune 500 IT services firm struggled to source technical talent efficiently.",
    solution: "Metasys implemented a 5-step acquisition program, including audits and continuous improvements.",
    result: "Now the firm relies on Metasys to source all digital positions globally.",
    image: "/images/case-studies/talent.jpg",
  },
  {
    title: "Procurement Cost Savings for Retailer",
    challenge: "A major retailer needed to reduce non-core operational costs.",
    solution: "Metasys transitioned procurement offshore, defined SLAs, and optimized processes.",
    result: "Achieved $2.5M in savings and 45% cost reduction across procurement ops.",
    image: "/images/case-studies/procurement.jpg",
  },
  {
    title: "Marketing Uplift for PE Portfolio Company",
    challenge: "The company lacked a digital marketing team and clear growth strategy.",
    solution: "Metasys deployed a managed offshore team covering SEO, PPC, and analytics.",
    result: "30% lower costs, 25% more leads, 30% growth in organic traffic.",
    image: "/images/case-studies/marketing.jpg",
  },
];

const insights = [
  {
    title: "How AI is Revolutionizing Talent Acquisition",
    summary: "Explore how artificial intelligence is transforming the way companies source and manage global talent pools.",
    image: "/images/insights/ai-talent.jpg",
  },
  {
    title: "Digital Dashboards: Beyond the Numbers",
    summary: "Learn how dashboards with predictive analytics help executives make smarter decisions in real time.",
    image: "/images/insights/dashboards.jpg",
  },
  {
    title: "Scaling Product Teams Remotely",
    summary: "Best practices from working with global product teams and managing agile sprints across time zones.",
    image: "/images/insights/remote-teams.jpg",
  },
];

// Reusable Sections
const Section = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: React.ReactNode;
}) => (
  <section id={id} className="snap-start min-h-screen px-6 py-24 bg-[#13051F] text-white">
    <SectionHeading text={title} />
    <motion.div
      className="max-w-5xl mx-auto text-gray-300 text-lg"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  </section>
);

// Services
const ServicesSection = () => {
  const router = useRouter();

  return (
    <section id="services" className="snap-start min-h-screen px-6 py-24 bg-[#13051F] text-white">
      <SectionHeading text="Our Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map(({ name, path }, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1F1F2F] p-6 rounded-xl shadow-lg border border-gray-700 cursor-pointer hover:scale-105 transition"
            custom={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => router.push(path)}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
            <p className="text-sm text-gray-300">
              Our {name} offerings are designed to elevate your business and optimize operations.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Case Studies
const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="snap-start min-h-screen px-6 py-24 bg-[#13051F] text-white">
      <SectionHeading text="Case Studies" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1F1F2F] rounded-xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true }}
          >
            <Image
              src={study.image}
              alt={study.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-white font-semibold">Challenge:</span> {study.challenge}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-white font-semibold">Solution:</span> {study.solution}
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">Result:</span> {study.result}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Insights Section
const InsightsSection = () => {
  return (
    <section id="insights" className="snap-start min-h-screen px-6 py-24 bg-[#13051F] text-white">
      <SectionHeading text="Insights" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {insights.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1F1F2F] rounded-xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
<motion.section
  id="hero"
  className="snap-start h-screen flex flex-col justify-center items-center bg-[url('/images/bg-hero.jpg')] bg-cover bg-center px-6 text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
>
  <motion.h1
    className="text-5xl md:text-6xl font-bold mb-6 text-white"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    Metasys Consulting
  </motion.h1>
  <motion.p
    className="max-w-2xl text-lg text-gray-200"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1 }}
  >
    Welcome to our website, we at Metasys provide comprehensive solutions in the fields of
    management and technology consulting.
  </motion.p>
</motion.section>
      {/* Who Are We */}
      <section id="about" className="bg-[#13051F] py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
          <div className="flex-1 text-white">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Who Are We
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed"
            >
              We are a team of passionate innovators, developers, and designers dedicated to
              crafting solutions that make a difference. Our mission is to bridge the gap between
              creativity and technology, delivering projects that inspire and perform.
            </motion.p>
          </div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about-image.jpg"
              alt="About us"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Dynamic Sections */}
      <ServicesSection />
      <CaseStudiesSection />
      <InsightsSection />
      <Section
        id="testimonials"
        title="Testimonials"
        content={
          <div className="space-y-8">
            <blockquote className="bg-[#1F1F2F] p-6 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-300">
                “MetaSys is a pleasure to work with from both a professional and a personal level.
                Every member displayed a remarkable degree of professionalism, dedication, and
                skill. I have the highest praise.”
              </p>
              <footer className="mt-4 text-white font-semibold">
                — Marc Odo, Director, Client Consulting and Education, Zephyr, USA
              </footer>
            </blockquote>

            <blockquote className="bg-[#1F1F2F] p-6 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-300">
                “The work was very impressive—professional, high-quality, and complete. I would not
                hesitate to reach out to them again for outsourcing.”
              </p>
              <footer className="mt-4 text-white font-semibold">
                — Jesse Liberty, CEO, Liberty Associates, Boston
              </footer>
            </blockquote>

            <blockquote className="bg-[#1F1F2F] p-6 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-300">
                “MetaSys has been reliable, consistent, high-quality, and affordable. They have
                professional management processes, and the programmers are easy to work with.”
              </p>
              <footer className="mt-4 text-white font-semibold">
                — Steve Harris, President, TrackIT, USA
              </footer>
            </blockquote>

            <blockquote className="bg-[#1F1F2F] p-6 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-300">
                “They were able to hit deadlines even when specs were constantly changing. Their
                scalability, customer service, and professionalism truly set them apart.”
              </p>
              <footer className="mt-4 text-white font-semibold">
                — John Nerbonne, Co-Owner, Kaysid Internet Solutions
              </footer>
            </blockquote>

            <blockquote className="bg-[#1F1F2F] p-6 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-300">
                “It’s been a pleasure for our team to work with MetaSys. Their direction and
                professionalism have been second to none.”
              </p>
              <footer className="mt-4 text-white font-semibold">
                — Tom Coelho, President, Northrock, Bermuda
              </footer>
            </blockquote>
          </div>
        }
      />
      <Section
        id="contact"
        title="Contact Us"
        content={<p>Let&apos;s connect and explore opportunities to work together.</p>}
      />
    </main>
  );
}
