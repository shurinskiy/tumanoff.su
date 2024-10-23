'use client';

import clsx from 'clsx';
import s from './style.module.scss'
import { TypeTag } from '@/services';
import Link from 'next/link';

type Props = {
	tags: TypeTag[]
};

const TheCloudInner = ({ tags }: Props) => {
	return (
		<>
			{tags.map((tag, i) => {
				return <Link href={`/blog/?tag=${tag.slug}`} key={tag.slug}>{tag.name}</Link>
			})}
		</>
	);
}

export { TheCloudInner };