import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BookCall() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
            >
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-colors text-sm">
                    <FaArrowLeft />
                    Back to Profile
                </Link>

                <h1 className="text-2xl font-bold text-gray-900 mb-1">Book a Call</h1>
                <p className="text-gray-600 mb-6 text-sm">Let's discuss your project and how I can help you.</p>

                {/* 
            FORMSPREE INTEGRATION:
            1. Create a form at https://formspree.io
            2. Replace "YOUR_FORMSPREE_ID" in the action attribute below with your form ID
        */}
                <form
                    action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                    method="POST"
                    className="space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label htmlFor="name" className="block text-xs font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block text-xs font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="subject" className="block text-xs font-medium text-gray-700">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm"
                            placeholder="Project Discussion"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="message" className="block text-xs font-medium text-gray-700">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={3}
                            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none text-sm"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-xl font-bold text-base hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
