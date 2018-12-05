import path from 'path';

export default function modulePath(mod: NodeJS.Module) {
	if (!('filename' in mod)) {
		throw new Error('Expected \'module\'');
	}

	return {
		pwd(...paths: string[]) {
			return path.resolve(process.cwd(), ...paths);
		},
		here(...paths: string[]) {
			return path.resolve(path.dirname(mod.filename), ...paths);
		}
	};
}

module.exports = modulePath;
module.exports.default = modulePath;
