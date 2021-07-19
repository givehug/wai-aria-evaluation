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
buildLibraryPaths('vue', ['']);
buildLibraryPaths('angular', ['']);
buildLibraryPaths('svelte', ['']);

app.listen(port, () => {
  console.log(
    `WAI-ARIA evaluation APP started, open http://localhost:${port} in your browser`
  );
});
