import { ArrowDownIcon, LongArrowIcon, PhoneIcon } from '../../icons';
import { getClassName, stages, Button } from '../../shared';
import styles from './WorkStages.module.scss';
import { StageSlider } from './StageSlider/StageSlider';

const WorkStages = () => {

	return (
		<section className={getClassName(styles, 'stagesContainer')}>
            <h1 className={getClassName(styles, 'title')}>Как мы работаем?</h1>
            <StageSlider />

            <div className={getClassName(styles, 'searchModelContainer')}>
                <div className={getClassName(styles, 'searchModel')}>
                    <div className={getClassName(styles, 'searchModelTitle')}>
                        ПОИСК МОДЕЛИ
                    </div>
                    <div className={getClassName(styles, 'modelSelector')}> 
                        <p>Модель</p>
                        <button><ArrowDownIcon /></button>
                    </div>
                    <Button text="Поиск" type="secondary" className={getClassName(styles, 'buttonSearch')} />
                </div>

            </div>

            <div className={getClassName(styles, 'modelsContainer')}>
                <h2 className={getClassName(styles, 'modelTitle')}>Выберите модель</h2>
                <p className={getClassName(styles, 'subTitle')}>Выберите свою модель</p>
                <div className={getClassName(styles, 'cardModelContainer')}>
                    {Array.from({length: 8})
                        .map((_, index) => <div key={index}>
                           <p>20 Pro 8/256Gb Phantom Blue</p>
                           <img src="/img/model.png" alt="model" />     
                    </div>)}
                </div>
            </div>

            <div className={getClassName(styles, 'servicesContainer')}>
                <h2 className={getClassName(styles, 'servicesTitle')}>Наши услуги</h2>
                <p className={getClassName(styles, 'servicesSubTitle')}>Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги</p>
                <div className={getClassName(styles, 'cardServicesContainer')}>
                    {Array.from({length: 10})
                        .map((_, index) => <div className={getClassName(styles, 'card')} key={index}>
                        <p>Замена light сенсора на телефоне</p>
                        <div>
                            <p>1-3 дня</p>   
                            <p>1 000 - 3 000 ₽</p> 
                        </div>     
                    </div>)}
                </div>
                <img src="/img/oppo/3.png" alt="" className={getClassName(styles, 'oppo')}/>
            </div>

            <div className={getClassName(styles, 'infoContainer')}>
                <div className={getClassName(styles, 'infoCardFirstContainer')}>
                    <div className={getClassName(styles, 'infoCard')}>
                        <h3>Слишком сильные повреждения?</h3>
                        <p className={getClassName(styles, 'linkTitle')}>Сдайте ваше устройство на запчасти обратившись в наш сервис</p>
                        <div>
                            <p>Разобрать на запчасти</p>
                            <LongArrowIcon />
                        </div>
                        <img src="/img/info/1.png" alt="" 
                        className={getClassName(styles, 'infoImage')} />
                        <img src="/img/info/1-mobile.png" alt="" 
                        className={getClassName(styles, 'infoImageMobile')} />
                    </div>
                    <div className={getClassName(styles, 'secondInfoCard')}>
                        <h3>Ознакомится с более точными ценами</h3>                        
                        <div>
                            <PhoneIcon />
                            <p>89610988111</p>
                        </div>
                        <img src="/img/info/2.png" alt="" 
                        className={getClassName(styles, 'infoSecondImage')} />
                        <img src="/img/info/2-bg.png" alt="" 
                        className={getClassName(styles, 'infoBackgroundImage')} />
                    </div>
                </div>
                <div className={getClassName(styles, 'infoCardSecondContainer')}>
                    <div className={getClassName(styles, 'infoCard')}>
                            <img src="/img/info/3-bg.png" alt="" 
                            className={getClassName(styles, 'infoImage')} />
                            <h3>Покупайте запчасти онлайн</h3>
                            <p className={getClassName(styles, 'linkTitle')}>Комплектующие на различные девайсы прямо со склада</p>
                            <div>
                                <p>Посмотреть</p>
                                <LongArrowIcon />
                            </div>
                        </div>
                    </div>

            </div>
		</section>
	);

};
export { WorkStages };