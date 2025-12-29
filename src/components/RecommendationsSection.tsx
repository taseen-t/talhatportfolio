import { motion } from "framer-motion";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { profileData } from "../data";

export default function RecommendationsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Approximately one card width + gap
            const newScrollLeft =
                direction === "left"
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mb-20"
        >
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-gray-900">Recommendations</h2>
                <div className="h-px bg-gray-300 flex-1 opacity-50" />
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                    >
                        <FaChevronLeft size={12} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                    >
                        <FaChevronRight size={12} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {profileData.recommendations.map((rec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        className="min-w-[300px] w-[300px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between snap-center"
                    >
                        <div>
                            <FaQuoteLeft className="text-3xl text-gray-200 mb-4" />
                            <p className="text-gray-700 font-medium leading-relaxed mb-6">
                                {rec.text}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                                <img src={rec.image} alt={rec.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-bold text-gray-900 text-sm truncate">{rec.name}</h4>
                                <p className="text-gray-500 text-xs truncate">{rec.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
