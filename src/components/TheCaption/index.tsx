import React from 'react';
import clsx from 'clsx';

import s from './style.module.scss'
import { DataArticles } from '@/assets/data';

type Props = {
	cls?: string,
	data?: DataArticles,
	children? : React.ReactNode
};

const TheCaption = ({cls, data, children}: Props) => {
	return (
		<div className={clsx(cls, s.caption)}>
			<div className={`${s.caption__date}`}>
				{data && data.date.split(' ').map( (item, i) => <span key={i}>{item}</span> )}
			</div>
			<h2 className={`${s.caption__title}`}>
				{data
					? <a href={`/blog/${data.url}`} dangerouslySetInnerHTML={{__html: data.title}}/>
					: <>{children}</>
				}
			</h2>
			{data?.tags && 
				<div className={`${s.caption__tags}`}>
					{data.tags.map( (tag, i) => <a href={`/search/${tag}`} key={i}>{tag}</a> )}
				</div>
			}
		</div>
	);
}

export default TheCaption;