import ProfileCard from "../components/ProfileCard";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ToolsSection from "../components/ToolsSection";
import EducationSection from "../components/EducationSection";
import RecommendationsSection from "../components/RecommendationsSection";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full">
                <ProfileCard />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ToolsSection />
                <EducationSection />
                <RecommendationsSection />
            </div>
        </div>
    );
}
