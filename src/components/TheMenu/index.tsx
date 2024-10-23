import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './style.module.scss';

type Props = {
	cls?: string
};

const navLinks = [
	{ label: 'Мастерская', href: '/blog' },
	{ label: 'Обо мне', href: '/about' },
	{ label: 'Портфолио', href: '/portfolio' },
	{ label: 'Контакты', href: '/contacts' }
];

const TheMenu = ({cls}: Props) => {
	const pathname = usePathname();

	return <div className={clsx(cls, s.menu)}>
		{navLinks.map(link => {
			const isActive = pathname.startsWith(link.href);

			return <Link className={clsx(s.menu__link, isActive && s.active)} href={link.href} key={link.href}>
				{link.label}
			</Link>
		})}
	</div>
}

export default TheMenu;