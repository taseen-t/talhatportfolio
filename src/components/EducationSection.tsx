import { motion } from "framer-motion";
import { profileData } from "../data";


export default function EducationSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mb-20"
        >
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-gray-900">Education</h2>
                <div className="h-px bg-gray-300 flex-1 opacity-50" />
            </div>

            <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                    <motion.div
                        key={edu.school}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                            {edu.image ? (
                                <img src={edu.image} alt={edu.school} className="w-full h-full object-contain" />
                            ) : (
                                <span className="text-xl font-bold text-gray-400">{edu.school[0]}</span>
                            )}
                        </div>

                        <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {edu.school}
                                </h3>
                                <p className="text-gray-600 font-medium">{edu.degree}</p>
                            </div>
                            <span className="text-sm text-gray-500 font-medium whitespace-nowrap mt-1 md:mt-0">
                                {edu.date}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
