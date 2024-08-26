import { useLayoutEffect, useState, useRef} from 'react';
import { reviews } from '../../shared/consts/reviews';
import styles from './Reviews.module.scss'
import { getClassName } from '../../shared';
import { ProfileIcon } from '../../icons/ProfileIcon';
import { ArrowLeftIcon, ArrowLeftSliderIcon, ArrowRightIcon } from '../../icons';

const Reviews = () => {

    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0)
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    useLayoutEffect(() => {
        const cardElement = cardRef.current;
        if(!cardElement) return;
        
        setCardWidth(cardElement.clientWidth)
    }, [cardRef.current, window.innerWidth])

    const handleOnRightBtnClick = () => {
        if(currentCardIndex < reviews.length - 1){
            setCurrentCardIndex(prev => prev + 1)
        }
    }
    
    const handleOnLeftBtnClick = () => {
        if(currentCardIndex > 0){
            setCurrentCardIndex(prev => prev - 1)
        }
    }

   return (
       <section className={getClassName(styles, 'reviewsContainer')}>
            <h1 className={getClassName(styles, 'reviewsTitle')}>Отзывы</h1>
            <div className={getClassName(styles, 'sliderContainer')}>                
                <div className={getClassName(styles, 'slider')} 
                style={{ transform: `translateX(-${(cardWidth+16)*currentCardIndex}px)` }}>
                    {reviews.map((review) => 
                        <div className={getClassName(styles, 'sliderCard')} ref={cardRef}>
                            <div className={getClassName(styles, 'profileInfo')} key={review.id}>
                                <div className={getClassName(styles, 'avatarContainer')}>
                                    <ProfileIcon />
                                </div>
                                <p>{review.name}</p>
                            </div>
                            <p className={getClassName(styles, 'reviewText')}>
                                {review.text}
                            </p>
                            
                        </div>
                    )}
                </div>
                <div className={getClassName(styles, "buttonContainer")}>
                    <button className={getClassName(styles, "button")} 
                            onClick={handleOnLeftBtnClick}>
                        <ArrowLeftSliderIcon />
                    </button>
                    <button className={getClassName(styles, "button")} 
                            onClick={handleOnRightBtnClick}>
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
            <div className={getClassName(styles, 'buttonContainerMobile')}>
                <button onClick={handleOnLeftBtnClick}>
                    <ArrowLeftIcon />
                </button>

                <div>
                    <span className={getClassName(styles, 'currentStep')}>0{currentCardIndex + 1}</span>/0{reviews.length}</div>

                <button onClick={handleOnRightBtnClick}>
                    <ArrowRightIcon />                    
                </button>

            </div>
            
       </section>
   );

};
export { Reviews }