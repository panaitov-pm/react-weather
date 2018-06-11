
export default val =>
	val === undefined ||
	val === null ||
	val.length === null ||
	(typeof val === 'object' && Object.values(val).length === 0) ||
	(typeof val === 'string' && val.trim().length === 0);
