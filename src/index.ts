import express, { Request, Response } from 'express'
import imagesRouter from './routes/api/images'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.use('/api/images', imagesRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

export default app
