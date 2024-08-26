import { ArrowDownIcon } from "../../icons";
import { getClassName } from "../functions/getClassName";
import styles from './Selector.module.scss';
import { useState } from "react";

/**
 * Компонент Selector
 * 
 * принимает параметры text
 */
const Selector = ( { text } ) => {
    const [isActive, setIsActive] = useState(false);

    const handleOnSelectorClick = () => {
        setIsActive(prev => !prev)
    }

   return (
       <div className={getClassName(styles, "selectorContainer")}>
            <div className={getClassName(styles, "selector")} onClick={handleOnSelectorClick}>
                <p className={getClassName(styles, "currentOption")}>{text}</p>
                <div className={`${isActive 
                    ? `${getClassName(styles, "active")}` 
                    : ''}`}>
                    <ArrowDownIcon />
                </div>
            </div>
            
       </div>
   );

};
export { Selector }