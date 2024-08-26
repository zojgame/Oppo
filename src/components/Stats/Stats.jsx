import styles from './Stats.module.scss';
import { Button, getClassName, Input } from '../../shared';
import useModal from '../../store/useModal';
import { CallBackModal } from '../modals';

const Stats = () => {

    const { setModal } = useModal();

    const handleOnClick = () => {
		setModal(<CallBackModal />);
	}

   return (
       <section className={getClassName(styles, "statsSection")}>
            <div className={getClassName(styles, "statsContainer")}>
                <div className={getClassName(styles, "statsDescription")}>
                    В своём стремлении улучшить пользовательский опыт мы упускаем, 
                    что базовые сценарии поведения пользователей формируют глобальную 
                    экономическую сеть и при этом -  ограничены исключительно образом мышления.
                    Дальнейшее развитие различных форм деятельности позволяет оценить значение 
                    благоприятных перспектив. Прежде всего, новая модель организационной деятельности
                    играет определяющее значение для соответствующих условий активизации. Имеется спорная
                    точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса
                    неоднозначны и будут объявлены нарушающими общечеловеческие нормы этики и морали. Банальные
                    , но неопровержимые выводы, а также непосредственные участники технического прогресса и по сей день
                    остаются уделом либералов,
                    которые жаждут быть заблокированы в рамках своих собственных рациональных ограничений.
                </div>
                <div className={getClassName(styles, "stats")}>
                    <div className={getClassName(styles, "statsCircle")}>
                        <div className={getClassName(styles, "innerCircle")}>
                            <p>1500</p>
                        </div>
                    </div>
                    <p className={getClassName(styles, "statsTitle")}>смартфонов OPPO <br/> отремонтировано</p>
                </div>
            </div>
            <div className={getClassName(styles, 'brokenPhoneForm')}>
                <h2>Заберем ваш сломанный смартфон прямо из дома</h2>
                <p>Оставьте Ваш номер телефона и мы перезвоним Вам <span>прямо сейчас.</span></p>
                <div className={getClassName(styles, 'buttonsContainer')}>
                    <Input placeholder='Имя' />
                    <Input placeholder='+7 --- --- -- --' />
                    <Button 
                        onClick={handleOnClick}
                        type="secondary" 
                        text="Перезвонить мне" 
                        className={getClassName(styles, 'callBackButton')} />
                </div>
                 <img src="/img/brokenPhoneForm/1.png" 
                    alt="" 
                    className={getClassName(styles, 'firstBackgroundImage')} />
                <img src="/img/brokenPhoneForm/2.png" 
                    alt="" 
                    className={getClassName(styles, 'secondBackgroundImage')} />
                 <img src="/img/brokenPhoneForm/1-mobile.png" 
                    alt="" 
                    className={getClassName(styles, 'firstBackgroundImageMobile')} />
                <img src="/img/brokenPhoneForm/2-mobile.png" 
                    alt="" 
                    className={getClassName(styles, 'secondBackgroundImageMobile')} />
            </div>
            
       </section>
   );

};

export { Stats }