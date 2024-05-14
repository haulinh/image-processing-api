'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.validateQuery = exports.cacheProcessImage = void 0
var utils_1 = require('../utils')
var cacheProcessImage = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, filename, width, height, pathImageThumb, imageThumbExist
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          ;(_a = req.query), (filename = _a.filename), (width = _a.width), (height = _a.height)
          pathImageThumb = (0, utils_1.getPathImage)({
            filename: filename,
            width: width,
            height: height,
            folderName: 'thumb'
          })
          return [4 /*yield*/, (0, utils_1.checkImageExist)(pathImageThumb)]
        case 1:
          imageThumbExist = _b.sent()
          if (imageThumbExist) {
            res.status(200).sendFile(pathImageThumb)
            return [2 /*return*/]
          }
          next()
          return [2 /*return*/]
      }
    })
  })
}
exports.cacheProcessImage = cacheProcessImage
var validateQuery = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, filename, width, height
    return __generator(this, function (_b) {
      try {
        ;(_a = req.query), (filename = _a.filename), (width = _a.width), (height = _a.height)
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
      } catch (error) {
        res.status(400).send({ error: error.message })
      }
      return [2 /*return*/]
    })
  })
}
exports.validateQuery = validateQuery
