import { JSX } from "react";
import { createPDFFromHTML } from "./Helpers";
import { addChangesToResume } from "./Helpers";

function JobDescription(): JSX.Element {
    return (
        <div className="sidebar-section">
            <h3>Job Description</h3>
            <textarea id="job-description" placeholder="Paste job description here..."></textarea>
        </div>
    ) 
}  

function ContactInfo() : JSX.Element {
    return (
        <div className="sidebar-section">
            <h3>Contact Information</h3>
            <input type="tel" placeholder="Phone" id="phoneNumber"/>
            <input type="url" placeholder="LinkedIn URL" id="linkedinUrl"/>
            <input type="url" placeholder="Medium URL" id="mediumUrl"/>
            <input type="url" placeholder="Github URL" id="githubUrl"/> 
            <input type="url" placeholder="Huggingface URL" id="huggingfaceUrl"/>
            <input type="password" placeholder="Your FREE Gemini API key" id="api-key"/>
        </div>
    ) 
} 

function Buttons(): JSX.Element {
    return (
        <>
        <div className="sidebar-section">
            <h3>Actions</h3>
            <button className="sidebar-button" onClick={ addChangesToResume() }>
                <i className="fas fa-magic"></i> Optimize Resume
            </button>
            <button className="sidebar-button" onClick={createPDFFromHTML()}>
                <i className="fas fa-download"></i> Download PDF
            </button>
        </div>
        </>
    ) 
} 

export default function Sections(): JSX.Element {
    return (
        <>
            <JobDescription/>
            <ContactInfo/>
            <Buttons/> 
        </>
    ) 
} 
