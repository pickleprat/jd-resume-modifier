import { JSX } from "react";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import LeadershipExperience from "./LeadershipExperience";
import SkillsAndInterests from "./SkillsAndInterests";

export default function Resume(): JSX.Element {
    return (
        <>
        <div className="resume-container" id="resume-container">
            <div className="resume" id="resume">
                <ContactInfo/>
                <Education/>
                <WorkExperience/>
                <Projects/>
                <LeadershipExperience/>
                <SkillsAndInterests/>
            </div>
        </div>
        </>
    ) 
} 

function Education(): JSX.Element {
    return (
        <>
        <div className="section">
            <h2>EDUCATION</h2>
            <div className="item">
                <div className="item-header-row">
                    <div className="item-left">
                        <div className="item-header" contentEditable="true">Navrachana University</div>
                        <div contentEditable="true">Bachelors in Data Science</div>
                    </div>
                    <div className="item-right">
                        <div className="item-subheader" contentEditable="true">Vadodara, Gujarat</div>
                        <div className="item-date" contentEditable="true">Graduation Date: Jul 2024</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) 
} 


function ContactInfo(): JSX.Element {
    return (
        <>
            <h1 contentEditable="true">Pratyush Rao</h1>
            <div 
                className="contact-info" 
                id="contact-info" 
                contentEditable="true"
                >India | 9324066624 | pratyush.rao.ai@gmail.com | Linkedin | Medium
            </div>
        </>
    ) 
} 

