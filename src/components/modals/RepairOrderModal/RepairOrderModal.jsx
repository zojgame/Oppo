import styles from './RepairOrderModal.module.scss'
import { Button, getClassName, Input } from '../../../shared';
import { Checkbox } from '../../../shared';
import { CrossIcon } from '../../../icons';
import useModal from '../../../store/useModal';
import { SuccessModal } from '../SuccessModal/SuccessModal';

const RepairOrderModal = () => {
    const { setModal } = useModal();

    const handleOnCloseClick = () => {
        setModal(null);
    }

    const handleOnSubmitClick = () => {
        setModal(<SuccessModal />);
    }

   return (
       <div className={getClassName(styles, 'modalContainer')}>
            <div className={getClassName(styles, 'modal')}>
                <div className={getClassName(styles, 'header')}>
                    Заполните форму 
                    и с вами свяжутся 
                    в ближайшее время 
                </div>

                <div className={getClassName(styles, 'content')}>
                    <div className={getClassName(styles, 'inputForm')}>
                        <p className={getClassName(styles, 'inputTitle')}>ВАШЕ ИМЯ:</p>
                        <Input placeholder="Александр" type='secondary' />
                    </div>
                    <div className={getClassName(styles, 'inputForm')}>
                        <p className={getClassName(styles, 'inputTitle')}>ВАШ ТЕЛЕФОН:</p>
                        <Input placeholder="+7 (000) 000-00-00" type='secondary' />
                    </div>
                    <div className={getClassName(styles, 'inputForm')}>
                        <p className={getClassName(styles, 'inputTitle')}>КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО):</p>
                        <Input placeholder="Введите ваши пожелания" type='secondary' />
                    </div>
                    <div className={getClassName(styles, 'checkboxForm')}>
                        <Checkbox />
                        <p className={getClassName(styles, 'checkboxText')}>Я соглашаюсь на обработку персональных данных 
                            и c <a href="">политикой конфиденциальности</a></p>
                    </div>
                    <Button text="Отправить" type="secondary" 
                            className={getClassName(styles, 'sendBnt')}
                            onClick={handleOnSubmitClick} />
                </div>

                <button onClick={handleOnCloseClick} className={getClassName(styles, 'closeBtn')}>
                    <CrossIcon />
                </button>

            </div>
       </div>
   );

};

export { RepairOrderModal }