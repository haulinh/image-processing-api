import request from 'supertest'
import fs from 'fs'
import app from '../index'
import { processingImage } from '../utils/image'
import { getPathImage } from '../utils'

describe('Test endpoint response', function (): void {
  it('Gets the /api/images endpoint', async function (): Promise<void> {
    const response = await request(app).get('/api/images').query({
      filename: 'encenadaport',
      width: '100',
      height: '100',
      test: 'yes'
    })

    expect(response.status).toEqual(200)
  })
})

describe('Test image processing', () => {
  it('Check image exist', async () => {
    const imagePath = getPathImage({
      filename: 'encenadaport',
      folderName: 'full'
    })
    const imageThumb = getPathImage({
      filename: 'encenadaport',
      width: '100',
      height: '100',
      folderName: 'thumb'
    })
    await processingImage(imagePath, 100, 100, imageThumb)
    await fs.promises.access(imageThumb, fs.constants.F_OK).then(() => {
      expect(true).toBeTruthy()
    })
  })
})
