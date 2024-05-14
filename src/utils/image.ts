import sharp from 'sharp'

export const processingImage = async (pathImage: string, width: number, height: number, pathThumb: string) => {
  console.log({ pathImage, pathThumb })
  await sharp(pathImage).resize(width, height).toFile(pathThumb)
}
