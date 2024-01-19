const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const liveServer = require("live-server");
const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');

const CSSFiles = ["flexboxgrid-a11y.css", "normalize.css", "skeleton-a11y.css"];

// Compiler et bundler les fichiers
function buildFiles() {

  let fullCSS = "";

  // 1ère étape: Minification et agrégation
  for (let CSSFileName of CSSFiles) {
    fullCSS += minifyCSS(CSSFileName);
  }

  // 2ème étape: résultat dans dossier dist
  const outputPath = path.join("dist", "skeleton-a11y.min.css");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, fullCSS);

  fs.rm("tmp", { recursive: true }, () => console.log("Removed tmp directory."));

  console.log("Build completed!");
}

// Lancez le build initial
buildFiles();

// Créer un watcher pour le dossier src
const watcher = chokidar.watch(".", {
  ignored: [/(^|[\/\\])\../, "dist", "node_modules", "tmp"],
  persistent: true,
});

watcher.on("change", (path) => {
  console.log(`File ${path} has been changed`);
  buildFiles();
});

// Lancez live-server pour hot reloading
liveServer.start({
  port: 8080,
  host: "localhost",
  open: false,
  file: "index.html",
  wait: 1000,
});

function minifyCSS(filePath) {
  const minFileName = filePath.replace(/\.css/, ".min.css");
  const fileFullPath = path.join("css", filePath);
  if (fs.existsSync(fileFullPath)) {
    fs.mkdirSync("tmp", { recursive: true });
    minify({
      compressor: cleanCSS,
      input: fileFullPath,
      output: path.join("tmp", minFileName),
      callback: function (err, min) {}
    });
    return fs.readFileSync(path.join("tmp", minFileName), "utf-8");
  }
}
