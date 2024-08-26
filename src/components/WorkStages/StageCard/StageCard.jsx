import { getClassName } from '../../../shared';
import styles from './StageCard.module.scss';

const StageCard = ({ step, title, img, cardRef }) => { 
	return (
		<div className={getClassName(styles, 'card')} ref={cardRef}>
			<img src={img} alt="" />
			<p className={getClassName(styles, 'title')}>{title}</p>
			<div className={getClassName(styles, 'step')}><p>{step}</p></div>
		</div>
	);

};
export { StageCard };