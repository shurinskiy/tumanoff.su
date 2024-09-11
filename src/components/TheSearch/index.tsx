import clsx from 'clsx';
import s from './style.module.scss'
import { BsSearch } from "react-icons/bs";

type Props = {
	cls?: string
};

const TheSearch = ({cls}: Props) => {
	return (
		<form className={clsx(cls, s.search)} action='/' name='search'>
			<input type="text" placeholder='Искать на сайте..' />
				<button type="button"><BsSearch size={22} />
			</button>
		</form>
	);
}

export default TheSearch;