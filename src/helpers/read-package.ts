import { readFileSync } from 'fs';
import * as path from 'path';

export function readPackage() {
  const buffer = readFileSync(path.resolve(__dirname, '../../package.json'));

  return JSON.parse(buffer.toString());
}
