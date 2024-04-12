import { createWriteStream } from 'fs';
import { PDFDocument, RGB } from 'pdfkit';
import { JSONData } from './utils';

interface PDFOptions {
    header?: string;
    watermark?: string;
    textColor?: RGB;
}

export function exportToPDF(jsonData: JSONData[], pdfFile: string, options: PDFOptions = {}): void {
    const { header = 'JSON Data', watermark = '', textColor = [0, 0, 0] } = options;
    const doc = new PDFDocument();
    const stream = createWriteStream(pdfFile);
    doc.pipe(stream);

    // Custom header
    doc.font('Helvetica-Bold').fontSize(12).fillColor(textColor).text(header, { align: 'center' }).moveDown();

    // Watermark
    doc.fontSize(10).opacity(0.3).fillColor(textColor).text(watermark, { align: 'center', width: 412, oblique: true }).moveDown();

    // JSON data
    doc.font('Helvetica').fontSize(10).fillColor(textColor).text(JSON.stringify(jsonData, null, 2));

    doc.end();
}
