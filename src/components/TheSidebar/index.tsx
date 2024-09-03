'use client';

import { useEffect, useState } from 'react';
import scrollLock from 'scroll-lock';
import s from './style.module.scss'
import Image from 'next/image'

import { FaChild } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

import TheMenu from '@/components/TheMenu';
import TheCloud from '@/components/TheCloud';
import TheSearch from '@/components/TheSearch';
import { useOutsideClick } from '@/hooks/useOutsideClick';

type Props = {
	home?: boolean
};

const TheSidebar = ({home}: Props) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const naviRef = useOutsideClick(() => setMenuOpen(false));

	useEffect(() => {
		menuOpen ? scrollLock.disablePageScroll() : scrollLock.enablePageScroll();
	}, [menuOpen]);

	return (
		<aside className={`${s.sidebar} ${home ? s.sidebar_home : ''} sidebar`} data-scroll-lock-fill-gap>
			<div className={s.sidebar__inner}>
				<a href="/" className={s.sidebar__logo}>
					<FaChild color='#abdf9c' size="28" />
					<span>Персональный блог</span> 
					<span>еще одного фрилансера</span>
				</a>
				<a href="/" className={s.sidebar__avatar}>
					<Image src={ '/images/me.jpg' } alt="It's me" width='230' height='230' />
				</a>
				<div className={`${s.sidebar__navi} ${!menuOpen || s.opened}`} ref={naviRef}>
					<button className={s.sidebar__close} onClick={() => setMenuOpen(false)}>
						<BsXLg fill='#fff' size="24" />
					</button>
					{! home && 
						<>
							<TheSearch cls={s.sidebar__search}/>
							<TheCloud cls={s.sidebar__cloud}/>
						</>
					}
					<TheMenu cls={s.sidebar__menu}/>
				</div>
				<button className={s.sidebar__open} onClick={() => setMenuOpen(!menuOpen)}>
					<CgMenuRight color='#cbcbcb' size='28' />
				</button>
			</div>
		</aside>
	);
}

export default TheSidebar;