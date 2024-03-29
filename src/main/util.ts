/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  console.log(`util.ts: ------------------- 1`);
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  console.log(`util.ts: ------------------- 2`);
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}
