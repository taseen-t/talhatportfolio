import { motion } from "framer-motion";
import { profileData } from "../data";

export default function AboutSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mt-12 mb-20"
        >
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900">About</h2>
                <div className="h-px bg-gray-300 flex-1 opacity-50" />
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                {profileData.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </motion.div>
    );
}
