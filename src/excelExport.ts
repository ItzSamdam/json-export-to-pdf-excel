import * as XLSX from 'xlsx';
import { JSONData } from './utils';

interface ExcelOptions {
    header?: string[];
    sheetName?: string;
}

export function exportToExcel(jsonData: JSONData[], excelFile: string, options: ExcelOptions = {}): void {
    const { header = Object.keys(jsonData[0]), sheetName = 'Sheet1' } = options;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(jsonData, { header });
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, excelFile);
}
