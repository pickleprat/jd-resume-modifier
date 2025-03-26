import { MouseEventHandler } from "react";
import jsPDF from "jspdf";

export function createPDFFromHTML() {
  const element = document.getElementById("resume-container");
  if (!element) return;

  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
    orientation: "portrait",
  });

  doc.html(element, {
    callback: (doc) => {
      doc.save("Resume.pdf");
    },
    x: 10, // Adjust to bring it closer to the left
    y: 10,
    width: 595, // Full width for A4
    windowWidth: 1200, // Ensure large enough rendering
  });

}

export function addChangesToResume(): MouseEventHandler<HTMLButtonElement> | undefined {
    return undefined
} 
