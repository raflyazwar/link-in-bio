import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { userConfig } from './config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0B1120]">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-grid" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f35]/80 via-[#0B1120] to-[#1a1f35]/80" />

        {/* Animated Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/5 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Snow Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`snow-${i}`}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
              }}
              animate={{
                y: window.innerHeight + 10,
                x: `calc(${Math.random() * 100}px * sin(${Date.now() / 1000}))`,
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Glowing Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`line-${i}`}
              className={`absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-glow-line`}
              style={{
                left: `${(i + 1) * (100 / 7)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-64 h-64 rounded-full opacity-30 mix-blend-multiply filter blur-xl"
              style={{
                background: `radial-gradient(circle, ${['#4f46e5', '#7c3aed', '#2563eb'][i]} 0%, transparent 70%)`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                delay: i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Constellation Effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Aurora Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-1/4 w-1/2 h-full rotate-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-3xl animate-aurora" />
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-full -rotate-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-3xl animate-aurora animation-delay-2000" />
          </div>
        </div>

        {/* Nebula Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-transparent to-transparent animate-pulse-slow" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen p-4 sm:p-8 text-gray-100">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-800/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50"
          >
            {/* Profile Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="flex flex-col items-center mb-8"
            >
              <div className="relative w-32 h-32 mb-4 group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={userConfig.profileImage}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover shadow-lg ring-4 ring-gray-700/50 group-hover:ring-gray-500/50 transition-all duration-300"
                  />
                </motion.div>
              </div>
              <motion.h1 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {userConfig.name}
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {userConfig.title}
              </motion.p>
            </motion.div>

            {/* Links Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {userConfig.socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={itemVariants}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center p-4 rounded-xl bg-gray-800/30 shadow-lg backdrop-blur-sm border border-gray-700/50 transition-all duration-300 ${link.color} hover:border-gray-500/50 group`}
                >
                  <motion.img 
                    src={link.image} 
                    alt={link.name}
                    className="w-10 h-10 rounded-full object-cover mr-4 ring-2 ring-gray-600/50 group-hover:ring-gray-400/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="flex-grow font-medium text-gray-100">{link.name}</span>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-gray-300/70" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;