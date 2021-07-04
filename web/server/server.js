const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const serveStatic = (...p) => express.static(path.join(__dirname, ...p));

const htmlFromDir = (dir) => {
  const dirCont = fs.readdirSync(dir);
  return dirCont.filter((e) => e.endsWith('.html'));
};

const buildLibraryPaths = (library, paths) => {
  const libPath = `/${library}/`;
  const libBuildPath = `./build/${library}`;

  app.use(libPath, serveStatic(libBuildPath));

  paths.forEach((p) => {
    app.use(`${libPath}${p}`, serveStatic(libBuildPath, `/${p}.html`));
  });
};

const reactLibs = htmlFromDir(path.resolve(__dirname, 'build/react'))
  .map((f) => f.replace('.html', ''))
  .filter((f) => f !== '404' && f !== 'index');

app.get('/', serveStatic('.'));

buildLibraryPaths('react', reactLibs);
buildLibraryPaths('vue', ['']); // vue nuxt-js build does this automatically
buildLibraryPaths('angular', ['']); // angular scully build does this automatically

app.listen(port, () => {
  console.log(
    `WAI-ARIA evaluation APP started, open http://localhost:${port} in your browser`
  );
});

// Note:
// - pkg bundles static files from ./build into executables, is it possible to only build server script ?
//    - https://github.com/vercel/pkg/issues/245
