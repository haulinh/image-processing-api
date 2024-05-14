'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var express_1 = __importDefault(require('express'))
var images_1 = __importDefault(require('./routes/api/images'))
var app = (0, express_1.default)()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use('/api/images', images_1.default)
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
exports.default = app
