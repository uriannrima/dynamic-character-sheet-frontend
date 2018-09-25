import { lstatSync, readdirSync, PathLike } from 'fs';
import { join } from 'path'

export const isDirectory = (source: PathLike) => lstatSync(source).isDirectory()
export const getDirectories = (source: string) => readdirSync(source).map(name => join(source, name)).filter(isDirectory)

export default {
  isDirectory,
  getDirectories
};
