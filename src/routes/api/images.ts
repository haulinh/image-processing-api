import express, { query } from "express";
import { Request, Response } from "express";
import path from "path";
import sharp from "sharp";
import { cacheProcessImage } from "../../middleware/images";
import { getPathImage } from "../../utils";

const router = express.Router();

router.use(cacheProcessImage);

router.get("/", async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;

  const widthInt = parseInt(width as string);
  const heightInt = parseInt(height as string);

  const pathImage = getPathImage({
    filename: filename as string,
    folderName: "full",
  });

  const pathThumb = getPathImage({
    filename: filename as string,
    width: width as string,
    height: height as string,
    folderName: "thumb",
  });

  await sharp(pathImage)
    .resize(widthInt, heightInt)
    .toFile(pathThumb);
  res.sendFile(pathThumb);
});

export default router;
