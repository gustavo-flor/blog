import fs from 'fs/promises'
import path from 'path'

export const read = async (target: string) => {
  const filePath = path.join(process.cwd(), 'public', target)
  return await fs.readFile(filePath, 'utf8')
}
