import { JSX } from "react";
import { SectionItem } from "../../types";
import { ItemWrapper } from "./Item";

export default function LeadershipExperience(): JSX.Element {
    const leadershipExperiences : SectionItem[] = [{
        organization: "Openeyes Software Solutions",
        role: "AI/ML Developer",
        location: "Vadodara, Gujarat",
        duration: "Jul 2024 - Present",
        points: [
            "Led Project Astra, overseeing product design and backend-front integration.",
            "Trained and guided interns in writing unit tests and contributing to key components.",
            "Implemented standardized MLOps practices to streamline project workflows."
        ]
    } as SectionItem] 

    return (
        <>
        <div className="section">
            <h2>LEADERSHIP EXPERIENCE</h2>
            {leadershipExperiences.map((experience) => {
                return ItemWrapper(experience); 
            })}
        </div>
        </>
    ) 
} 