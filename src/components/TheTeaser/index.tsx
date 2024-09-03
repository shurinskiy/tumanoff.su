import s from './style.module.scss'
import { DataArticles } from '@/assets/data';
import TheCaption from '@/components/TheCaption';
import { roboto } from '@/fonts'
import Link from 'next/link';

type Props = {
	cls?: string,
	data: DataArticles
};

const TheTeaser = ({cls, data }: Props) => {
	return (
		<div className={`${cls || ''} ${s.teaser}`}>
			<TheCaption cls={`${s.teaser__caption}`} data={data}/>
			<div className={`${s.teaser__text} ${roboto.className}`}>
				{data.text} <Link href={`/blog/${data.url}`}>читать дальше..</Link>
			</div>
		</div>
	);
}

export default TheTeaser;