import path from 'path';
import test from 'ava';
import fn from '.';

test.beforeEach(t => {
	t.context = {
		dir: fn(module)
	};
});

test('error - expected module', t => {
	// @ts-ignore
	t.throws(() => fn(), TypeError)
});

test('.pwd()', t => {
	const {dir} = t.context;
	t.is(dir.pwd(), process.cwd());
});

test('.here()', t => {
	const {dir} = t.context;
	t.is(dir.here(), __dirname);
	t.is(dir.here('a/b', 'c', 'd'), path.join(__dirname, 'a/b/c/d'));

	const fixture = require('./fixtures/foo');
	t.is(fixture.dirname, path.join(__dirname, 'fixtures'));
	t.is(fixture.bar, path.join(__dirname, 'fixtures/foo/bar'));
});
