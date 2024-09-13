'use client';

import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import scrollLock from 'scroll-lock';
import s from './style.module.scss'
import Image from 'next/image'

import { FaChild } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { useSwipeable } from 'react-swipeable';

import TheMenu from '@/components/TheMenu';
import TheCloud from '@/components/TheCloud';
import TheSearch from '@/components/TheSearch';
import { useOutsideClick } from '@/hooks/useOutsideClick';

type Props = {
	home?: boolean
};

const TheSidebar = ({home}: Props) => {
	const [menuOpen, setMenuOpen] = useState<boolean | null>(null);
	const refButton = useRef<HTMLButtonElement>(null);
	const refNavi = useRef<HTMLDivElement | null>(null);
	const swipe = useSwipeable({ onSwipedLeft: (e) => setMenuOpen(false) });

	const refUnited = (el: HTMLDivElement) => {
		swipe.ref(el);
		refNavi.current = el;
	}
	
	useOutsideClick(() => setMenuOpen(false), [refNavi, refButton]);

	useEffect(() => {
		if (menuOpen) {
			scrollLock.disablePageScroll()
			document.body.classList.add('underlay');
		} else if (!menuOpen && menuOpen !== null) {
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
			document.body.classList.add('underlay_closing');
			
			refNavi.current && refNavi.current.addEventListener('transitionend', () => {
				document.body.classList.remove('underlay', 'underlay_closing');
			}, { once: true });
		}
	}, [menuOpen]);

	return (
		<aside className={clsx(s.sidebar, home && s.sidebar_home, 'sidebar')} data-scroll-lock-fill-gap>
			<div className={s.sidebar__inner}>
				<a href="/" className={s.sidebar__logo}>
					<FaChild color='#abdf9c' size="28" />
					<span>Персональный блог</span> 
					<span>еще одного фрилансера</span>
				</a>
				<div className={clsx(s.sidebar__navi, menuOpen && s.opened)} ref={refUnited}>
					<button className={s.sidebar__close} onClick={() => setMenuOpen(false)}>
						<BsXLg fill='#fff' size="24" />
					</button>
					<div className={s.sidebar__scroll} data-scroll-lock-scrollable>
						<a href="/" className={s.sidebar__avatar}>
							<Image src={ '/images/me.jpg' } alt="It's me" width='230' height='230' />
						</a>
						{! home &&
							<>
								<TheSearch cls={s.sidebar__search}/>
								<TheCloud cls={s.sidebar__cloud}/>
							</>
						}
						<TheMenu cls={s.sidebar__menu}/>
					</div>
				</div>
				<button className={s.sidebar__open} onClick={() => setMenuOpen(!menuOpen)} ref={refButton}>
					<CgMenuRight color='#cbcbcb' size='28' />
				</button>
			</div>
		</aside>
	);
}

export default TheSidebar;