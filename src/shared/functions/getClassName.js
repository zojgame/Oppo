
/**
 * Функция извлечения модульных классов
 */
const getClassName = (style, className) => {
	return style[className] || '';
};

export { getClassName }; 