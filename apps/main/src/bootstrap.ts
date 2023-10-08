import { addRoutes, bootstrap } from './micro-base/index';

Promise.all([
  import('sub1Entry/entry'),
  import('sub2Entry/entry'),
]).then(subEntries => {
  for (const entry of subEntries) {
    addRoutes(entry.routes);
  }
}).then(() => {
  bootstrap();
});
