import { getClassName, Button } from '../../shared';
import styles from './Footer.module.scss';
import useModal from '../../store/useModal';
import { CallBackModal } from '../modals';

const Footer = () => {

    const { setModal } = useModal();

    const handleOnClick = () => {
		setModal(<CallBackModal />);
	}

   return (
    <>
       <footer>
            <div className={getClassName(styles, 'logoContainer')}>
                <img src="/img/logo.png" alt="" />
            </div>
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
            <div className={getClassName(styles, 'buttonContainer')}>   
                <p className={getClassName(styles, 'phone')}>+8 (343) 311-21-11</p>
                <Button onClick={handleOnClick}
                        type="tertiary"
                        text="Перезвонить мне"
                        className={getClassName(styles, 'btnCallMe')} />            
            </div>            
       </footer>
       <div className={getClassName(styles, 'copyrightContainer')}>
            <p>Copyright 2020. Все права защищены</p>
            <p>Дизайн, разработка, реклама by Axmobi 8961-098-81-11</p>
        </div>
    
    </>
   );

};
export { Footer }