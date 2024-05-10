import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { checkImageExist, getPathImage } from "../utils";

export const cacheProcessImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename, width, height } = req.query;

  const pathImageThumb = getPathImage({
    filename: filename as string,
    width: width as string,
    height: height as string,
    folderName: "thumb",
  });

  console.log({pathImageThumb})

  const imageThumbExist = await checkImageExist(pathImageThumb);

  console.log({imageThumbExist})

  if (imageThumbExist) {
    res.sendFile(pathImageThumb);
    return
  }

  next();
};
