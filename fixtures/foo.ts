import m from '..';

const dir = m(module);

export const dirname = dir.here();
export const bar = dir.here('foo', 'bar');
