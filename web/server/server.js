const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const serveStatic = (...p) => express.static(path.join(__dirname, ...p))

const buildLibraryPaths = (library, paths) => {
  const libPath = `/${library}/`
  const libBuildPath = `./build/${library}`

  app.use(libPath, serveStatic(libBuildPath))  

  paths.forEach(p => {
    app.use(`${libPath}${p}`, serveStatic(libBuildPath, `/${p}.html`))
  });
}

app.get('/', serveStatic('.'))

buildLibraryPaths('react', ['material-ui', 'chakra-ui', 'reakit', 'ant-design', 'bootstrap', 'empty-template', 'semantic-ui'])
buildLibraryPaths('vue', ['material-ui', 'chakra-ui', 'reakit', 'ant-design', 'bootstrap', 'empty-template'])

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
