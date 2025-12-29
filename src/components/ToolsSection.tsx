import { motion } from "framer-motion";
import { profileData } from "../data";
import { cn } from "../lib/utils";

export default function ToolsSection() {
    const categories = Object.keys(profileData.tools) as Array<keyof typeof profileData.tools>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mb-20"
        >
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-xl font-bold text-gray-900">Tools</h2>
                <div className="h-px bg-gray-300 flex-1 opacity-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                {categories.map((category, categoryIndex) => (
                    <div key={category}>
                        <h3 className="text-gray-500 font-medium mb-4">{category}</h3>
                        <div className="space-y-3 flex flex-col items-start">
                            {profileData.tools[category].map((tool: any, index: number) => {
                                const Icon = tool.icon;
                                return (
                                    <motion.div
                                        key={tool.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 + index * 0.1 + categoryIndex * 0.2 }}
                                        className="flex items-center gap-3 p-2.5 pr-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-fit"
                                    >
                                        {tool.image ? (
                                            <img src={tool.image} alt={tool.name} className="w-5 h-5 object-contain" />
                                        ) : Icon ? (
                                            <Icon className={cn("text-xl", tool.color)} />
                                        ) : (
                                            // Fallback for tools without specific icons
                                            <div className={cn("w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500")}>
                                                {tool.name[0]}
                                            </div>
                                        )}
                                        <span className="font-medium text-gray-700">{tool.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
