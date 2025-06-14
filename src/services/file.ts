import fs from 'fs/promises'
import path from 'path'

export const readFile = async (target: string) => {
  const filePath = path.join(process.cwd(), target)
  return await fs.readFile(filePath, 'utf8')
}

export const readDir = async (target: string): Promise<string[]> => {
  const dirPath = path.join(process.cwd(), target)
  return await fs.readdir(dirPath)
}
