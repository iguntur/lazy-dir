import Module from 'module';
import path from 'path';

export default function modulePath(mod: NodeJS.Module) {
	if (!(mod instanceof Module)) {
		throw new TypeError('Expected `module`');
	}

	const moduleDir = path.dirname(mod.filename);
	const pwd = (...paths: string[]) => path.resolve(process.cwd(), ...paths);
	const here = (...paths: string[]) => path.resolve(moduleDir, ...paths);

	return {
		pwd,
		here
	};
}

module.exports = modulePath;
module.exports.default = modulePath;
