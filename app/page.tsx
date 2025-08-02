"use client";

import { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

gsap.registerPlugin(ScrollTrigger);

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

const HeroSection = () => (
  <motion.section
    id="hero"
    className="snap-start h-screen flex flex-col justify-center items-center bg-[url('/images/bg-hero.jpg')] bg-cover bg-center px-6 text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
  >
    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-6"
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
      Welcome to our website, we at Metasys provide comprehensive solutions in the fields of management and technology consulting.
    </motion.p>
  </motion.section>
);

const ServicesSection = () => {
  const router = useRouter();

  const services = [
    { name: "Data Analytics", path: "/services/data-analytics" },
    { name: "Product Management", path: "/services/product-management" },
    { name: "Project Management", path: "/services/project-management" },
    { name: "Talent Resourcing", path: "/services/talent-resourcing" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Custom Solutions", path: "/services/custom-solutions" },
  ];

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

const Section = ({ id, title, content }: { id: string; title: string; content: React.ReactNode }) => (
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

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory min-h-screen overflow-y-scroll scroll-smooth bg-black text-white">
      <Header />

      <HeroSection />
      <Section
        id="about"
        title="Who We Are"
        content={
          <p>
            We are committed to helping your business grow through tailored strategies and cutting-edge technology solutions.
          </p>
        }
      />
      <ServicesSection />
      <Section
        id="case-studies"
        title="Case Studies"
        content={
          <p>
            Explore how we&apos;ve helped organizations like TELUS, Roto-Rooter, and others innovate and transform their digital presence.
          </p>
        }
      />
      <Section
        id="insights"
        title="Insights"
        content={
          <p>
            Get the latest thoughts, trends, and technical insight on AI, cloud infrastructure, and digital innovation.
          </p>
        }
      />
      <Section
        id="testimonials"
        title="Testimonials"
        content={
          <blockquote>
            “Metasys delivered impactful change with measurable ROI. Their team became an extension of ours.”
          </blockquote>
        }
      />
      <Section
        id="book-online"
        title="Book Online"
        content={<p>Coming soon: Online booking portal and consultations.</p>}
      />
      <Section
        id="contact"
        title="Contact Us"
        content={<p>Let&apos;s connect and explore opportunities to work together.</p>}
      />
    </main>
  );
}
