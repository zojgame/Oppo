import { BurgerMenuIcon, RigningPhoneIcon } from "../../icons";
import { Button } from "../../shared";
import { getClassName } from "../../shared";
import { Navigation } from "../Navigation/Navigation";
import styles from './Header.module.scss';
import useModal from "../../store/useModal";
import { CallBackModal } from "../modals";

const Header = () => {
	const { setModal } = useModal()

	const handleOnClick = () => {
		setModal(<CallBackModal />)
	}

	return (
		<header className={getClassName(styles, 'header')}>
			<BurgerMenuIcon />
			<img src="/img/logo.png" alt="" />
			<RigningPhoneIcon />
			<Navigation />
			<p className={getClassName(styles, 'phone')}>+8 (343) 311-21-11</p>
			<Button type="primary" 
					text="Перезвонить мне" 
					className={getClassName(styles, 'btnCallMe')} 
					onClick={handleOnClick} />
		</header>
	);

};



export { Header };