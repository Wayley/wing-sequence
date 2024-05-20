import { dts } from 'rollup-plugin-dts';
import { name } from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [{ file: `dist/${name}.d.ts`, format: 'es' }],
    plugins: [dts()],
  },
];
