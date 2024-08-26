import { Button, Input, getClassName } from "../../shared";
import useModal from "../../store/useModal";
import styles from './ConsultationForm.module.scss';
import { CallBackModal } from "../modals";


const ConsultationForm = () => {
    const { setModal } = useModal();

    const handleOnClick = () => {
		setModal(<CallBackModal />);
	}

    return (
        <section className={getClassName(styles, 'consultationSection')}>
                <div className={getClassName(styles, 'consultationForm')}>
                    <h2>Нужна консультация?</h2>
                    <p>Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.</p>
                    <div className={getClassName(styles, 'buttonsContainer')}>
                        <Input placeholder='Имя' />
                        <Input placeholder='+7 --- --- -- --' />
                        <Button 
                            type="secondary" 
                            text="Перезвонить мне" 
                            className={getClassName(styles, 'callBackButton')}
                            onClick={handleOnClick}
                            />
                    </div>

                    <img src="/img/consultationBackground.png" 
                        alt=""
                        className={getClassName(styles, 'consultationBackgroundImage')} />
                    <img src="/img/consultationBackground-mobile.png" 
                        alt=""
                        className={getClassName(styles, 'consultationBackgroundImageMobile')} />
                </div>
                <div className={getClassName(styles, 'infoDisclaimer')}>
                    <p>
                        ИНФОРМАЦИЯ НА САЙТЕ НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ <br />
                        Продавец  услуг оставляет за собой право в любое время вносить какие-либо изменения в данные предложения без предварительного уведомления.<br />
                        Информация на сайте не является публичной офертой до момента заказа услуги. Изменения могут быть как существенными, так и незначительными. Однако было сделано все возможное, чтобы обеспечить точность подробных сведений. <br /> 
                        Данная информация ни при каких условиях не должна рассматриваться как предложение, сделанное Продавцом какому-либо лицу. <br />
                        Информация на сайте носит ознакомительный характер и следовательно к сожалению не всегда может отражать настоящую стоимость услуги. Несмотря на это мы прикладываем все усилия для размещения верной и правдивой информации. <br />
                    </p>           
                </div>
        </section>
    );
};

export { ConsultationForm }