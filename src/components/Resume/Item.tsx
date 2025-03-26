import { JSX } from "react"; 
import { SectionItem } from "../../types";
import { BulletContent } from "../../types";

export function ItemWrapper(item: SectionItem): JSX.Element {
    return (
        <>
        <div className="item">
            <div className="item-header-row">
                <div className="item-left">
                    <div className="item-header" contentEditable="true">{item.organization}</div>
                    <div contentEditable="true">{item.role}</div>
                </div>
                <div className="item-right">
                    <div className="item-subheader" contentEditable="true">{item.location}</div>
                    <div contentEditable="true">{item.duration}</div>
                </div>
            </div>
            <div className="item-body">
                <ul>
                    {item.points.map((point) => {
                        return <li contentEditable="true">{point}</li>
                    })} 
                </ul>
            </div>
        </div>
        </>
    ) 
} 

export function ItemBody(items: BulletContent) : JSX.Element {
    return (
        <>
            <div className="item-body">
                <ul>
                    {items.points.map((point) => {
                        return <li contentEditable="true">{point}</li>
                    })} 
                </ul>
            </div>
        </>
    ) 
} 