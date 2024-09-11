import Link from 'next/link';

import clsx from 'clsx';
import { roboto } from '@/fonts'
import { DataArticle } from '@/api';
import s from './style.module.scss'
import TheCaption from '@/components/TheCaption';

type Props = {
	cls?: string,
	data: DataArticle
};

const TheTeaser = ({cls, data }: Props) => {
	return (
		<div className={clsx(cls, s.teaser)}>
			<TheCaption cls={`${s.teaser__caption}`} data={data}/>
			<div className={`${s.teaser__text} ${roboto.className}`}>
				{data.teaser} <Link href={`/blog/${data.slug}`}>читать дальше..</Link>
			</div>
		</div>
	);
}

export default TheTeaser;