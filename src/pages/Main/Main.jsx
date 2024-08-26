import { useState, useEffect } from "react";
import { ConsultationForm, Header, RepairPhone, Stats, WorkStages, Footer } from "../../components";
import { Reviews } from "../../components/Reviews/Reviews";
import { getClassName } from "../../shared";
import useModal from "../../store/useModal";
import styles from './Main.module.scss';
import { ToTopButtonIcon } from "../../icons";

function Main() {
	const { modal } = useModal();
	const [isToTopButtonVisible, setIsToTopButtonVisible] = useState(false);

	const handleOnScroll = () => {
		const scrollTopPos = window.scrollY;
		const _isToTopButtonAvailable = scrollTopPos > 500;
		setIsToTopButtonVisible(_isToTopButtonAvailable);
	}

	const handleOnTopClick = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

	useEffect(() => {
		handleOnScroll()
		window.addEventListener('scroll', handleOnScroll);
		
		return () => {
			window.removeEventListener('scroll', handleOnScroll);
		}
	}, []);


	return (
		<>
			{modal}
			{isToTopButtonVisible && <button className={getClassName(styles, 'toTopButton')} 
												onClick={handleOnTopClick}>
				<ToTopButtonIcon />
			</button>}
			<div>
				<img src="/img/repairPhoneBackground.png" alt="" 
					className={getClassName(styles, "repairPhoneBackgroundContainer")} />
				<img src="/img/rectangle.png" alt=""
					className={getClassName(styles, "rectangle")} />
				<Header />
				<RepairPhone />
			</div>
			<div className={getClassName(styles, "infoSectionContainer")}>				
				<WorkStages />
			</div>
			<Stats /> 
			<Reviews />   
			<ConsultationForm />
			<Footer />
		</>
	);
}

  
  
export default Main;
  