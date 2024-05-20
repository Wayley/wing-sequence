# wing-sequence

JavaScript Sequence

## Uage

```js
import Sequence, { type PromiseHandler } from 'wing-sequence';

const sequence = new Sequence<PromiseHandler<boolean>>();
const log = (value: string) => sequence.push((v: boolean) => new Promise(async (r) => r(v && (await logAsync(value)))));
const logAsync = (value: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(true);
    }, Math.random() * 100);
  });
};

function test() {
  setTimeout(() => {
    log('3');
  }, 200);

  log('1');

  log('2');
}


test();
// 1
// 2
// 3
```
