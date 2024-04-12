import { createWriteStream } from 'fs';
import { PDFDocument } from 'pdfkit';
import { JSONData } from './utils';

export function exportToPDF(jsonData: JSONData[], pdfFile: string): void {
    const doc = new PDFDocument();
    const stream = createWriteStream(pdfFile);
    doc.pipe(stream);

    doc.font('Helvetica-Bold').fontSize(12);
    doc.text(JSON.stringify(jsonData, null, 2));

    doc.end();
}
