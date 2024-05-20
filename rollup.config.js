import { terser } from 'rollup-plugin-terser';
export default {
  input: 'temp/index.js',
  output: [
    {
      file: 'dist/wing-sequence.js',
      name: 'wing-sequence',
      format: 'umd',
    },
    {
      file: 'dist/wing-sequence.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-sequence.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-sequence.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [terser()],
};
