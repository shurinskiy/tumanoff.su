'use client'
import { useQuery } from '@tanstack/react-query';

import { postService } from '@/api';
import clsx from 'clsx';
import s from "./style.module.scss";
import TheCaption from '@/components/TheCaption';

type Props = {
	params: {
		slug: string
	}
}

const Post = ({params: {slug}}: Props) => {
	
	const {data} = useQuery({
		queryKey: ['one post'],
		queryFn: () => postService.getOne(slug)
	});

	return (
		<div className={clsx('main__inner', !data && 'main__inner_pending', s.post)}>
			{data && <div className={s.post__inner}>
				<TheCaption cls={`${s.post__caption}`} data={data[0]}/>
			</div>}
		</div>
	);
}

export default Post;