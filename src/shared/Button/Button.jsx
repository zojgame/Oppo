import { getClassName } from "../functions/getClassName";
import styles from './Button.module.scss';

const buttonStyles = {
	primary: getClassName(styles, 'primary'),
	secondary: getClassName(styles, 'secondary'),
	tertiary: getClassName(styles, 'tertiary'),
};


/**
 * Кастомная кнопка со стилями primary, secondary, tertiary
 *
 * Принимает параметры type, text, className, onClick
 *
 */
const Button = ( {type, text, className, onClick} ) => {
	const style = buttonStyles[type];

	return (
		<button className={`${style} ${className}`} onClick={onClick}>
			<div>
				{text}
			</div>
		</button>
	);

};

Button.propTypes; 

export { Button };