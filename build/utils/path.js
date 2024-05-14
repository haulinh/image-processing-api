'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.checkImageExist = exports.getPathImage = void 0
var path_1 = __importDefault(require('path'))
var fs_1 = __importDefault(require('fs'))
var getPathImage = function (_a) {
  var filename = _a.filename,
    width = _a.width,
    height = _a.height,
    folderName = _a.folderName
  if (folderName === 'full') {
    return path_1.default.join(__dirname, '..', '..', 'assets', 'full', ''.concat(filename, '.jpg'))
  }
  return path_1.default.join(
    __dirname,
    '..',
    '..',
    'assets',
    'thumb',
    ''.concat(filename, '-').concat(width, 'x').concat(height, '.jpg')
  )
}
exports.getPathImage = getPathImage
var checkImageExist = function (pathImage) {
  return new Promise(function (resolve) {
    fs_1.default.access(pathImage, fs_1.default.constants.F_OK, function (err) {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}
exports.checkImageExist = checkImageExist
