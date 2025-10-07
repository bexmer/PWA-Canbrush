"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Iconos ---
const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7H13M13 7L7 1M13 7L7 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// --- Animaciones ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  return (
    <div className="bg-light-bg">
      <motion.header
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-dark-card text-white/80 rounded-full flex justify-between items-center p-2 shadow-header">
          <div className="font-bold text-lg tracking-wider pl-4">PORTFOLIO</div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Studio
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <button className="bg-white text-black text-sm px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors">
            Book a call
          </button>
        </div>
      </motion.header>

      <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-center items-center text-center px-4">
        <motion.div
          className="absolute inset-0 z-0 bg-gray-300"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/hero-background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <motion.div
          className="relative z-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Professional Creative Photography
          </h1>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 space-y-24 md:space-y-32">
        <motion.section {...fadeIn} className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="text-4xl md:text-5xl font-medium leading-tight text-dark-text">
            "Every image tells a story, capturing moments with a seamless blend
            of art and emotion."
          </p>
          <div className="mt-8">
            <p className="font-semibold">Mr. Liam Johnson</p>
            <p className="text-gray-text">CEO Founder Mica</p>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            Why work with me?
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            Great photography is an experience rooted in collaboration, trust,
            and creativity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <div className="w-12 h-12 bg-card-bg rounded-xl mb-6 mx-auto"></div>
              <h3 className="font-semibold text-lg">Tailored to Your Vision</h3>
              <p className="text-gray-text mt-2">
                Custom approach to every project your story, your style.
              </p>
              <span className="inline-block bg-card-bg text-sm px-4 py-2 rounded-full mt-6">
                Visionary Image Creation
              </span>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <div className="w-12 h-12 bg-card-bg rounded-xl mb-6 mx-auto"></div>
              <h3 className="font-semibold text-lg">Shot with Top Gear</h3>
              <p className="text-gray-text mt-2">
                Utilizing top-tier equipment for exceptional photos.
              </p>
              <span className="inline-block bg-card-bg text-sm px-4 py-2 rounded-full mt-6">
                High-Quality Imagery
              </span>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <div className="w-12 h-12 bg-card-bg rounded-xl mb-6 mx-auto"></div>
              <h3 className="font-semibold text-lg">Editing Included</h3>
              <p className="text-gray-text mt-2">
                Every image is meticulously edited to align with your unique
                vision.
              </p>
              <span className="inline-block bg-card-bg text-sm px-4 py-2 rounded-full mt-6">
                Professional editing
              </span>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            A glimpse through my perspective
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            I transform your vision into reality with creative editorial and
            portrait photography.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-4xl p-6 shadow-card">
                <div className="w-full h-96 bg-card-bg rounded-3xl mb-6"></div>
                <h3 className="font-semibold text-xl text-left">
                  Crafted Details
                </h3>
                <p className="text-gray-text text-left mt-2">
                  Telling flavor stories through styled shots.
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            How can I assist you today?
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            I transform your ideas into captivating images, focusing on
            creativity and expert use of light.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <h3 className="font-semibold text-xl">Portrait Photography</h3>
              <p className="text-gray-text mt-2">
                For individuals, couples, and professionals.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <h3 className="font-semibold text-xl">
                Branding & Lifestyle Photography
              </h3>
              <p className="text-gray-text mt-2">
                Custom visuals that tell your story.
              </p>
            </div>
            <div className="bg-white rounded-4xl p-8 shadow-card lg:col-span-2">
              <h3 className="font-semibold text-xl">Shot with Top Gear</h3>
              <p className="text-gray-text mt-2">
                Using premium equipment for stunning images.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            News & Update
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            Insights and stories from my photography journey, showcasing my
            creative process and recent projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-4xl p-4 shadow-card">
                <div className="w-full h-64 bg-card-bg rounded-3xl mb-4"></div>
                <h3 className="font-semibold text-left">Savor the Stillness</h3>
                <span className="bg-card-bg text-xs px-3 py-1 rounded-full mt-2 inline-block">
                  Editing
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeIn}
          className="bg-white rounded-5xl p-8 md:p-16 shadow-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
                Faq
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mt-4">
                Have Questions
              </h2>
              <p className="text-gray-text mt-4">
                Let us know how we can assist
              </p>
              <button className="bg-black text-white font-semibold px-6 py-3 rounded-full mt-8">
                Contact Us
              </button>
            </div>
            <div className="space-y-4">
              {[
                "What types of photography do you offer?",
                "How do I book a session?",
                "Do you edit the photos?",
                "How long until I get my photos?",
                "Can I request specific styles or poses?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="bg-card-bg rounded-2xl p-5 flex justify-between items-center"
                >
                  <p className="font-medium">{q}</p>
                  <PlusIcon />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="text-center">
          <span className="text-sm bg-card-bg px-4 py-2 rounded-full">
            Initiate Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mt-4">
            Great photos begin with a conversation
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            Contact us to discuss how we can bring your vision to life with
            meaningful photography.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-24 h-32 bg-card-bg rounded-3xl"></div>
            ))}
          </div>
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full mt-8">
            Get In Touch
          </button>
        </motion.section>
      </main>

      <motion.footer
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32 pb-12"
      >
        <div className="border-t border-gray-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Neopa®</h3>
              <p className="text-gray-text mt-4">
                Contemporary architecture, prime locations, and upscale home
                design to inspire your next journey.
              </p>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-semibold">Pages</h4>
              <ul className="mt-4 space-y-2 text-gray-text">
                <li className="hover:text-black transition-colors">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-black transition-colors">
                  <a href="#">Services</a>
                </li>
              </ul>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-4 space-y-2 text-gray-text">
                <li className="hover:text-black transition-colors">
                  <a href="#">Portfolios</a>
                </li>
                <li className="hover:text-black transition-colors">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="text-left md:text-right">
              <h4 className="font-semibold">Utility Pages</h4>
              <ul className="mt-4 space-y-2 text-gray-text">
                <li className="hover:text-black transition-colors">
                  <a href="#">Contact</a>
                </li>
                <li className="hover:text-black transition-colors">
                  <a href="#">404</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
