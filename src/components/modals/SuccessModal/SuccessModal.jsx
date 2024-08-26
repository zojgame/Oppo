import styles from './SuccessModal.module.scss'
import { getClassName } from '../../../shared';
import { CrossGreenIcon } from '../../../icons';
import useModal from '../../../store/useModal';
import { SuccessIcon } from '../../../icons/SuccessIcon';

const SuccessModal = () => {
    const { setModal } = useModal();

    const handleOnCloseClick = () => {
        setModal(null);
    }

   return (
       <div className={getClassName(styles, 'modalContainer')}>
            <div className={getClassName(styles, 'modal')}>
                <h2>Спасибо за заявку!</h2>
                <SuccessIcon />
                <button onClick={handleOnCloseClick} className={getClassName(styles, 'closeBtn')}>
                    <CrossGreenIcon />
                </button>
                <p>
                    Наш менеджер свяжется с Вами
                </p>

            </div>
       </div>
   );

};

export { SuccessModal }