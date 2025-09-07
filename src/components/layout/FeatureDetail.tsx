"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = [
  { id: 1, label: "Software" },
  { id: 2, label: "Product management" },
  { id: 3, label: "Marketing" },
  { id: 4, label: "Project management" },
  { id: 5, label: "Design" },
  { id: 6, label: "IT" },
];

const content: Record<number, { title: string; text: string; img: string }> = {
  1: {
    title: "Supercharge dev productivity",
    text: "Plan, track, and release world-class software with the number one tool for agile teams.",
    img: "/features/feature1.webp",
  },
  2: {
    title: "Drive product success",
    text: "Gather insights, prioritize features, and deliver product experiences your users love.",
    img: "/features/feature2.webp",
  },
  3: {
    title: "Boost marketing campaigns",
    text: "Plan, execute, and analyze campaigns with collaborative boards and analytics.",
    img: "/features/feature3.webp",
  },
  4: {
    title: "Stay on top of projects",
    text: "Manage deadlines, tasks, and deliverables in one organized workspace.",
    img: "/features/feature4.webp",
  },
  5: {
    title: "Empower design teams",
    text: "Collaborate on designs, share feedback, and ensure consistent brand experiences.",
    img: "/features/feature5.webp",
  },
  6: {
    title: "Keep IT operations running",
    text: "Track incidents, manage requests, and maintain system reliability with ease.",
    img: "/features/feature6.webp",
  },
};

export default function FeatureSection() {
  const [active, setActive] = useState(1);

  return (
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 lg:mb-16 px-2">
        <div className="flex flex-wrap gap-3 justify-center mb-12 md:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-purple-50 text-purple-800 rounded-full text-xs sm:text-sm lg:text-base font-medium hover:bg-purple-100 hover:scale-105 transition-all duration-200 cursor-pointer animate-in fade-in-0 slide-in-from-bottom-4
                ${active === tab.id ? "bg-purple-100 shadow-md" : ""}`}
              style={{
                animationDelay: `${600 + tab.id * 100}ms`,
                animationDuration: "700ms",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center w-full"
        >
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              {content[active].title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              {content[active].text}
            </p>
            <a
                href="/features"
                className="text-purple-700 hover:text-purple-800 font-medium inline-flex items-center group"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative md:col-span-2"
          >
            <Image
              src={content[active].img}
              alt={content[active].title}
              width={1600}
              height={900}
              className="rounded-2xl shadow-2xl w-full h-auto max-w-5xl mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
  );
}
