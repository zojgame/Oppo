import { useLayoutEffect, useState, useRef} from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../icons';
import { getClassName, stages } from '../../../shared';
import { StageCard } from '../StageCard/StageCard';
import styles from './StageSlider.module.scss'


const StageSlider = () => {

    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0)
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    useLayoutEffect(() => {
        const cardElement = cardRef.current;
        if(!cardElement) return;
        
        setCardWidth(cardElement.clientWidth)
    }, [cardRef.current, window.innerWidth])

    const handleOnRightBtnClick = () => {
        if(currentCardIndex < stages.length - 1){
            setCurrentCardIndex(prev => prev + 1)
        }
    }
    const handleOnLeftBtnClick = () => {
        if(currentCardIndex > 0){
            setCurrentCardIndex(prev => prev - 1)
        }
    }

   return (
       <>
            <div className={getClassName(styles, 'sliderContainer')}>
                
                <div className={getClassName(styles, 'slider')} style={{ transform: `translateX(-${(cardWidth+16)*currentCardIndex}px)` }}>
                    {stages.map((stage) => 
                        <StageCard id={stage.step} {...stage} cardRef={cardRef}/>
                    )}
                    <img src="img/oppo/2.png" alt="" className={getClassName(styles, "oppo")} />
                    <img src="/img/background.png" alt="" className={getClassName(styles, "infoBackground")}  />
                </div>
            </div>
            <div className={getClassName(styles, 'buttonContainer')}>
                <button onClick={handleOnLeftBtnClick}>
                    <ArrowLeftIcon />
                </button>

                <div><span className={getClassName(styles, 'currentStep')}>0{currentCardIndex + 1}</span>/0{stages.length}</div>

                <button onClick={handleOnRightBtnClick}>
                    <ArrowRightIcon />                    
                </button>

            </div>
       </>
   );

};
export { StageSlider }