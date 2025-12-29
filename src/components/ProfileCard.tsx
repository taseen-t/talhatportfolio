import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { profileData, socialLinks } from "../data";

export default function ProfileCard() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto bg-white rounded-[12px] shadow-sm border border-gray-100 overflow-hidden"
        >
            <div className="px-8 pb-8 pt-5 md:px-12 md:pb-12 md:pt-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="shrink-0"
                    >
                        <div className="w-[161px] h-[194px] rounded-[8px] overflow-hidden bg-gray-100 relative group">
                            <img
                                src={profileData.image}
                                alt={profileData.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 pointer-events-none rounded-[8px] m-[1px] shadow-[inset_0px_0px_2px_3px_rgba(255,255,255,0.6)]" />
                            <div className="absolute inset-0 border border-white/20 rounded-[8px] pointer-events-none" />
                        </div>

                    </motion.div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                                {profileData.name}
                            </h1>
                            <div className="space-y-1 text-gray-600 text-[15px]">
                                <p>A 👨‍💻 <span className="font-semibold text-gray-900">{profileData.role}</span></p>
                                <p>With ⭐️ <span className="font-semibold text-gray-900">{profileData.yearsOfExperience}</span></p>
                                <p>Based in 🇩🇪 <span className="font-semibold text-gray-900">{profileData.location}</span>.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button
                                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                                onClick={() => navigate("/book-call")}
                            >
                                <img src="/calendar-white.png" alt="Book a Call" className="w-5 h-5 object-contain" />
                                Book a Call
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 bg-gray-50 text-gray-900 rounded-xl font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
                                onClick={() => console.log("Download CV")}
                            >
                                <img src="/download-cloud.png" alt="Download CV" className="w-5 h-5 object-contain" />
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-100" />
                <div className="flex justify-center gap-4 overflow-x-auto pb-2 md:pb-0">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                className="p-3 bg-white border border-gray-100 rounded-xl text-gray-600 hover:text-black hover:border-gray-300 transition-all hover:shadow-sm"
                                aria-label={link.name}
                            >
                                <Icon className="text-xl" />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
