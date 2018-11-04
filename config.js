const MIN_YEAR = 1949;
const MAX_YEAR = new Date().getFullYear();

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

const CURRENT_YEAR = new Date().getFullYear();

const KIND_LIST = [
  {
    name: 'BGBl Teil 1',
    size: '~6 GB',
    id: 'bgbl1',
    years: range(1949, CURRENT_YEAR + 1, 1),
  },
  {
    name: 'BGBl Teil 2',
    size: '~4 GB',
    id: 'bgbl2',
    years: range(1951, CURRENT_YEAR + 1, 1),
  },
];
const KINDS = {};
KIND_LIST.forEach(x => {
  KINDS[x.id] = x;
});

export { MIN_YEAR, MAX_YEAR, KIND_LIST, KINDS };
