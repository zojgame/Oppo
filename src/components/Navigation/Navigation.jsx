import { getClassName } from '../../shared';
import styles from './Navigation.module.scss';

const Navigation = () => {
	return (
	   <div className={getClassName(styles, 'navigation')}>
			<button className={getClassName(styles, 'tab')}>
                Наши услуги
			</button >
			<button className={getClassName(styles, 'tab')}>
                Бренды
			</button>
			<button className={getClassName(styles, 'tab')}>
                Отзывы
			</button>
	   </div>
	);

};

export { Navigation }