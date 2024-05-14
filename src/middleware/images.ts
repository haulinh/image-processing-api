import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import { checkImageExist, getPathImage } from '../utils'

export const cacheProcessImage = async (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query

  const pathImageThumb = getPathImage({
    filename: filename as string,
    width: width as string,
    height: height as string,
    folderName: 'thumb'
  })

  const imageThumbExist = await checkImageExist(pathImageThumb)

  if (imageThumbExist) {
    res.status(200).sendFile(pathImageThumb)
    return
  }

  next()
}

export const validateQuery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { filename, width, height } = req.query

    if (!filename) {
      throw new Error('Filename is required')
    }

    if (!width) {
      throw new Error('Width is required')
    }

    if (!height) {
      throw new Error('Height is required')
    }

    if (isNaN(Number(width))) {
      throw new Error('Width must be a number')
    }

    if (isNaN(Number(height))) {
      throw new Error('Height must be a number')
    }

    next()
  } catch (error: unknown) {
    res.status(400).send({ error: (error as Error).message })
  }
}
