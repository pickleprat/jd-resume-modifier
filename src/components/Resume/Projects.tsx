import { JSX } from "react";
import { SectionItem } from "../../types";
import { ItemWrapper } from "./Item";

export default function Projects(): JSX.Element {
    const projects: SectionItem[] = [{
            organization: "NRSC",
            role: "Data Science Intern",
            location: "Vadodara, Gujarat",
            duration: "Jul 2022 - Apr 2023",
            points: [
                "Worked as an IT apprentice to our university's Physics professor in utilizing modern-day technology to collate data from multiple sources.",
                "Leveraged the power of multi-modal neural networks to process time series image data to predict lightning strikes, and used Decision Trees to analyze their relationship with weather parameters."
            ]
        } as SectionItem , {
            organization: "Openeyes Software Solutions",
            role: "Stateside Summary",
            location: "Vadodara, Gujarat",
            duration: "Apr 2024 - Oct 2024",
            points: [
                "Leveraged open-source LLMs such as Llama and Mistral to generate summaries from large PDFs.",
                "Re-approached the problem with closed-source language models like GPT-4o to generate JSON from images for effective parsing of text."
            ]
        } as SectionItem, {
            organization: "Openeyes Software Solutions",
            role: "Project Astra",
            location: "Vadodara, Gujarat",
            duration: "Oct 2024 - Present",
            points: [
                "Worked as a backbone of the project by managing the backend, the frontend, the repository, and OPS of the project.",
                "Wrote and managed a FastAPI server that leveraged LLMs to effectively convert entire academic textbooks into a mesh of knowledge graphs, which can later be parsed and extracted from using GraphRAG.",
                "Displayed the hierarchical nature of concepts extracted from the book into a ReactFlow Tree."
            ]
        }
    ];
    return (
        <>
            <div className="section">
                <h2>PROJECT EXPERIENCE</h2>
                {projects.map((project) => {
                    return ItemWrapper(project); 
                })}
            </div>
        </>
    )
} 