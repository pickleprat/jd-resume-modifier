import { JSX } from "react";
import { ItemBody } from "./Item";
import { BulletContent } from "../../types";

export default function SkillsAndInterests(): JSX.Element {
    const skillsAndInterests: BulletContent = {
        points: [
            "Web: Backend Engineering with Go, Python. Frontend in React.js", 
            "Specialization: MLOps, LLMOps, Machine Learning, Data Analysis", 
            "Interests: Writer at Medium", 
        ]
    } as BulletContent 
    return (
        <>
        <div className="section">
            <h2>SKILLS AND INTERESTS</h2>
        </div>
        {ItemBody(skillsAndInterests)}
        </>
    ) 
} 