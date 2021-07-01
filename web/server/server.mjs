import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url';

const BUILD_DIR_REACT = '../react/out'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = 3000

app.use('/react/', express.static(join(__dirname, BUILD_DIR_REACT)))
app.use('/vue/', express.static(join(__dirname, BUILD_DIR_REACT)))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
