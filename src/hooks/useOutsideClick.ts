import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent | TouchEvent) => {

			if (ref.current && !ref.current.contains(e.target as HTMLElement))
				callback();
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [callback]);

	return ref;
};