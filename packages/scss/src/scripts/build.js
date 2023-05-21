const Fs = require('fs');
const Path = require('path');
const Sass = require('sass');
const SOURCE_DIR = 'src';
const LIB_DIR = 'lib';
const SOURCE_PATH = Path.resolve(SOURCE_DIR);
const LIB_PATH = Path.resolve(LIB_DIR);

if (Fs.existsSync(LIB_PATH)) {
  Fs.rmSync(LIB_PATH, { recursive: true });
}

Fs.mkdirSync(LIB_PATH);

const getComponents = () => {
  let allComponents = [];

  const types = ['atoms', 'molecules', 'organisms', 'utilities'];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: Path.resolve('src', type, file),
      output: `${LIB_DIR}/${file.slice(0, -4)}` + 'css',
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [Path.resolve('src')],
  }).css.toString();

  Fs.writeFileSync(Path.resolve(fileName), result);
};

compile(`${SOURCE_DIR}/global.scss`, `${LIB_DIR}/global.css`);

getComponents().forEach(({ input, output }) => compile(input, output));
