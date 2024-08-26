import { getClassName } from "../../shared";
import styles from './RepairPhone.module.scss';
import { Button } from "../../shared";
import { RepairIcon, PriceTagIcon, SettingIcon } from "../../icons";
import useModal from "../../store/useModal";
import { RepairOrderModal } from "../modals";

const RepairPhone = () => {
	const { setModal } = useModal()

	const handleOnClick = () => {
		setModal(<RepairOrderModal />)
	}

	return (
		<>
			<section className={getClassName(styles, 'repairPhoneContainer')}>
				<div className={getClassName(styles, 'infoContainer')}>
					<h1>Ремонт <span>OPPO</span> в <br/> Екатеринбурге любой<br/> сложности</h1>
					<p>Ремонтируем устройства любой сложности в кратчайшие сроки и с гарантией до 3 месяцев</p>
					<Button 
						text="Заказать ремонт" 
						type="secondary"
						onClick={handleOnClick} />
				</div>
				<div className={getClassName(styles, 'phoneContainer')}>
					<img src="/img/oppo/1.png" alt="oppo" />
				</div>
			</section>
			<div className={getClassName(styles, 'advantages')}>
				<div>
					<RepairIcon />
					<p>Ремонт  и консультация
                    на месте</p>
				</div>
				<div>
					<PriceTagIcon />
					<p>Нет скрытых платежей
                    и переплат</p>
				</div>
				<div>
					<SettingIcon />
					<p>Собственный склад запчастей</p>
				</div>
			</div>
        
		</>
	);

};
export { RepairPhone };