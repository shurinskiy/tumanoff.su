import Link from 'next/link';
import s from './style.module.scss';

type Props = {
	cls?: string
};

const TheMenu = ({cls}: Props) => {
	return (
		<div className={`${cls || ''} ${s.menu}`}>
			<Link className={`${s.menu__link} ${s.active}`} href="/blog">Мастерская</Link>
			<Link className={`${s.menu__link}`} href="/">Обо мне</Link>
			<Link className={`${s.menu__link}`} href="/">Портфолио</Link>
			<Link className={`${s.menu__link}`} href="/">Контакты</Link>
		</div>
	);
}

export default TheMenu;