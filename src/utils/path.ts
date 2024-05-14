import path from 'path'
import fs from 'fs'

interface PathImage {
  filename: string
  width?: string
  height?: string
  folderName: 'full' | 'thumb'
}
export const getPathImage = ({ filename, width, height, folderName }: PathImage) => {
  if (folderName === 'full') {
    return path.join(__dirname, '..', '..', 'assets', 'full', `${filename}.jpg`)
  }

  return path.join(__dirname, '..', '..', 'assets', 'thumb', `${filename}-${width}x${height}.jpg`)
}

export const checkImageExist = (pathImage: string): Promise<boolean> => {
  return new Promise((resolve) => {
    fs.access(pathImage, fs.constants.F_OK, (err) => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}
