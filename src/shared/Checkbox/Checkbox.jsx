import { useState } from "react";
import styles from './Checkbox.module.scss';
import { getClassName } from "../functions/getClassName";
import { CheckboxIcon } from "../../icons/CheckboxIcon";


/**
 * Компонент чекбока
 */
const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleOnClick = () => {
        setIsChecked(prev => !prev);
    }

   return (
       <div className={getClassName(styles, 'checkboxContainer')} onClick={handleOnClick}>
            <div className={getClassName(styles, 'checkbox')}>
                {isChecked && <CheckboxIcon />}
            </div>
       </div>
   );

};
export { Checkbox }