import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
	callback: () => void, 
	refs: (RefObject<HTMLElement> | undefined)[]
) => {

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent | TouchEvent) => {
			const isOutside = refs.every(ref => {
				return ref?.current && !ref.current.contains(e.target as Node);
			});

			if (isOutside) callback();
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);

	}, [callback, refs]);
};