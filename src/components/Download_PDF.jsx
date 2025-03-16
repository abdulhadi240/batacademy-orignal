'use client'
import React from 'react'
import { Button } from './ui/button'
import { jsPDF } from "jspdf";

const Download_PDF = ({ locale , courseDetail }) => {
    const handleDownload = async () => {
        const doc = new jsPDF();

        // Helper: convert image URL to Base64
        const getBase64FromUrl = async (url) => {
            const data = await fetch(url);
            const blob = await data.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        };

        // Add Company Logo and Name
        const logoUrl = "/logobat.png"; // Your logo URL
        const logoBase64 = await getBase64FromUrl(logoUrl);
        // Add the logo image at position (10,10) with size 30x30
        doc.addImage(logoBase64, "PNG", 10, 10, 30, 30);
        const companyName = "British Academy";
        doc.setFontSize(16);
        doc.text(companyName, 45, 25);

        // Add Brochure Title
        const brochureTitle = locale === 'ar' ? "الكتيب التدريبي" : "Course Brochure";
        doc.setFontSize(14);
        doc.text(brochureTitle, 10, 50);

        // Draw a line separator
        doc.setLineWidth(0.5);
        doc.line(10, 55, 200, 55);

        // Add Course Content Section
        const contentTitle = locale === 'ar' ? "المحتوى:" : "Content:";
        doc.setFontSize(12);
        doc.text(contentTitle, 10, 65);
        const contentText = courseDetail.content || "";
        doc.setFontSize(10);
        const contentLines = doc.splitTextToSize(contentText, 190);
        doc.text(contentLines, 10, 75);

        // Update Y position based on content height
        let currentY = 75 + contentLines.length * 7 + 10;

        // Add Course Objectives Section
        const objectivesTitle = locale === 'ar' ? "الأهداف" : "Objectives:";
        doc.setFontSize(12);
        doc.text(objectivesTitle, 10, currentY);
        const objectivesText = courseDetail.objectives_and_target_group || "";
        doc.setFontSize(10);
        const objectivesLines = doc.splitTextToSize(objectivesText, 190);
        currentY += 10;
        doc.text(objectivesLines, 10, currentY);

        // Save the generated PDF file
        doc.save(`${courseDetail.slug || "brochure"}.pdf`);
    };

    return (
        <div>
            <Button variant="primary" className="text-white bg-primary" onClick={handleDownload}>
                {locale === 'ar' ? "تحميل PDF" : "Download PDF"}
            </Button>
        </div>
    )
}

export default Download_PDF