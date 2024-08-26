import { getClassName } from "../functions/getClassName";
import styles from './Input.module.scss'

const inputStyles = {
    primary: getClassName(styles, 'primary'),
    secondary: getClassName(styles, 'secondary')
}

/**
 * Компонент input, который имеет стили primary, secondary
 * 
 * принимает параметры placeholder, type
 */
const Input = ({ placeholder, type = 'primary' }) => {
    const style = inputStyles[type];

   return (
       <div className={`${style}`}>
            <input placeholder={placeholder} />
       </div>
   );

};
export { Input }