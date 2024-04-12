

import * as XLSX from 'xlsx';
import { JSONData } from './utils';

export function exportToExcel(jsonData: JSONData[], excelFile: string): void {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, excelFile);
}
