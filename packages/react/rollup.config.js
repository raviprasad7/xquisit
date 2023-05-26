import Ts from 'rollup-plugin-typescript2';

export default {
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Image/index.ts',
    'src/atoms/Margin/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
  external: ['react', '@xquisit/scss', '@xquisit/foundation'],
};
