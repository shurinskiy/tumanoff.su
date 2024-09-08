import { useEffect } from 'react';

export const useOutsideClick = (callback, refs) => {

	useEffect(() => {
		const handleClickOutside = e => {
			const isOutside = refs.every(ref => ref.current && !ref.current.contains(e.target));			
			if (isOutside) callback();
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);

	}, [callback, refs]);
};