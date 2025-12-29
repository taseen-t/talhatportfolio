import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { profileData } from "../data";
import { cn } from "../lib/utils";

export default function ExperienceSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mb-20"
        >
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-gray-900">Experience</h2>
                <span className="text-sm text-gray-400 font-medium">(8 years)</span>
                <div className="h-px bg-gray-300 flex-1 opacity-50" />
            </div>

            <div className="space-y-6">
                {profileData.experience.map((job, index) => {
                    const Icon = job.icon;
                    const isOpen = openIndex === index;

                    return (
                        <div key={job.company} className="group">
                            <div
                                className="flex gap-6 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105",
                                    job.bgColor
                                )}>
                                    <Icon className="text-3xl" />
                                </div>

                                <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
                                            <p className="text-gray-600 font-medium">{job.role}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-gray-500 font-medium">{job.date}</span>
                                            {isOpen ? (
                                                <FaChevronUp className="text-gray-400 text-sm" />
                                            ) : (
                                                <FaChevronDown className="text-gray-400 text-sm" />
                                            )}
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-500 leading-relaxed mt-3 text-[15px]">
                                            {job.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
