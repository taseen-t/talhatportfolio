import { motion } from "framer-motion";
import { profileData } from "../data";

export default function SkillsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mb-20"
        >
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900">Skills</h2>
                <div className="h-px bg-gray-300 flex-1 opacity-50" />
            </div>

            <div className="flex flex-wrap gap-3">
                {profileData.skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        className="px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-700 font-medium hover:text-black hover:border-gray-200 transition-colors cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
