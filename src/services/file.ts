import fs from 'fs/promises'
import path from 'path'

export const read = async (target: string) => {
  const filePath = path.join(process.cwd(), target)
  return await fs.readFile(filePath, 'utf8')
}
