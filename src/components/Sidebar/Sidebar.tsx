import { JSX } from "react";
import Header from "./Header";
import Sections from "./Sections"


export default function Sidebar(): JSX.Element {
    return (
        <>
        <div className="sidebar">
            <Header/>
            <Sections/>
        </div>
        </>
    ) 
}  