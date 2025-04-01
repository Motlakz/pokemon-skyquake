import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SkyQuakeLogo = () => {
    return (
        <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col items-center relative">
                <motion.div
                    className="relative h-10 w-10 rounded-full shadow-md shadow-red-200 dark:shadow-red-900/30 overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Top half - red */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-400 to-red-600" />
                
                    {/* Bottom half - white */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-100 to-white" />
                    
                    {/* Center divider line */}
                    <div className="absolute top-[45%] left-0 right-0 h-[10%] bg-black" />
                    
                    {/* Center button */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white border-2 border-black z-10" />
                    
                    {/* Shine effect - diagonal highlight */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent opacity-40" />
                    
                    {/* Smaller shine dot in top left */}
                    <div className="absolute top-1 left-1 h-1 w-1 rounded-full bg-white opacity-80" />
                </motion.div>
                
                {/* Curved SkyQuake text */}
                <div className="relative w-20 h-6">
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 80 24"
                        className="absolute -top-1"
                    >
                        <defs>
                        <path
                            id="curve"
                            d="M 10 16 Q 40 26 70 16"
                            fill="transparent"
                        />
                        </defs>
                        <text className="text-[10px] font-bold">
                        <textPath 
                            href="#curve" 
                            startOffset="50%" 
                            textAnchor="middle"
                        >
                            <tspan className="fill-cyan-500 dark:fill-cyan-400">Sky</tspan>
                            <tspan className="fill-orange-500 dark:fill-orange-400">Quake</tspan>
                        </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default SkyQuakeLogo;