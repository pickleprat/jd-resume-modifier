import { JSX } from "react";
import { SectionItem } from "../../types";
import { ItemWrapper } from "./Item";

export default function WorkExperience(): JSX.Element {
    const workItems = [{
            organization:"National Space Research Center Internship", 
            role: "Data Science Intern",  
            location: "Vadodara, Gujarat", 
            duration: "Jul 2022 - Apr 2023", 
            points:[ 
                "Data Science Intern at NRSC (ISRO) project, analyzing lightning strike patterns in Gujarat.", 
                "Assisted Dr. Pallavi Ghalsasi in processing satellite data using machine learning tools.", 
                "Collated, processed, and predicted insights from lightning strike data.", 
            ], 
        } as SectionItem, {
            organization: "Openeyes Software Solutions",
            role: "AI/ML Developer",
            location: "Vadodara, Gujarat",
            duration: "Jan 2024 - Present",
            points: [
                "Backend Engineer & MLOps at an IT solutions company serving U.S. organizations.",
                "Worked on Project Stateside, aiding the U.S. government in tracking and interpreting legislation.",
                "Developed Project Astra, leveraging LLMs to convert books into Neurological Knowledge Graphs."
            ]
        } as SectionItem, 
    ];  

    return (
        <>
        <div className="section">
            <h2>WORK EXPERIENCE</h2>
            {workItems.map((item) => {
                return ItemWrapper(item); 
            })}
        </div>
        </>
    ) 
} 