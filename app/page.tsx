// pages/index.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Benefit {
  id: number;
  title: string;
  image: string;
}

export default function Home() {
  const router = useRouter();
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Benefit 1",
      image: "/channelpartner.networkBenefit1.webp",
    },
    {
      id: 2,
      title: "Benefit 2",
      image: "/channelpartner.networkBenefit2.webp",
    },
    {
      id: 3,
      title: "Benefit 3",
      image: "/channelpartner.networkBenefit3.webp",
    },
    {
      id: 4,
      title: "Benefit 4",
      image: "/channelpartner.networkBenefit4.webp",
    },
  ];

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleBenefitClick = (benefit: Benefit) => {
    setSelectedBenefit(benefit);
  };

  const closePopup = () => {
    setSelectedBenefit(null);
    setShowVideo(false);
  };

  const handleHowItWorks = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        >
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Main Content - with z-index to appear above video */}
      <main className="relative z-10 container mx-auto px-4 py-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Logo/Brand */}
          <div className="text-center mb-8 md:mb-12">
            <Image
              src="/logo.png"
              alt="channelpartner.network logo"
              width={300}
              height={100}
              className="mx-auto mb-4"
              priority
            />
          </div>

          {/* Launch Date */}
          <div className="text-center mb-4 md:mb-6">
            <p className="text-lg md:text-xl text-white font-semibold drop-shadow-lg">
              Launching on 1st April 2026
            </p>
          </div>

          {/* RERA Message */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-white mb-6 drop-shadow-lg">
              If you are a RERA Registered Channel Partner you can
            </p>

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-4 px-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Sign-Up to the Network
            </button>
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-5">
            <p className="text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-lg">
              See the 4 Key Benefits for the Channel Partners Here
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit) => (
                <button
                  key={benefit.id}
                  onClick={() => handleBenefitClick(benefit)}
                  className="bg-[#2a5fa6] hover:bg-[#1e4a8a] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
                >
                  {benefit.title}
                </button>
              ))}
            </div>

            {/* How It Works Button */}
            <button
              onClick={handleHowItWorks}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-4 px-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              See How It Works
            </button>
          </div>
        </div>
      </main>

      {/* Benefit Popup */}
      {selectedBenefit && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-auto bg-white rounded-2xl shadow-2xl">
            <button
              onClick={closePopup}
              className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close benefit popup"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-6">
              <div className="flex justify-center">
                <img
                  src={selectedBenefit.image}
                  alt={selectedBenefit.title}
                  className="max-w-full h-auto rounded-lg"
                  style={{ maxHeight: "80vh", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl h-[90vh]">
            <button
              onClick={closePopup}
              className="absolute -top-4 -right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close popup"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Howchannelpartner.networkworks.pdf"
              className="w-full h-full rounded-lg bg-white"
              title="Channel Partner PDF"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
