'use client'

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import TheTeaser from "@/components/TheTeaser";
import { postService } from '@/api';
import s from "./style.module.scss";

const Blog = () => {
	
	const {data} = useQuery({
		queryKey: ['posts list'],
		queryFn: () => postService.getAll()
	});
	
	return (
		<div className={clsx('main__inner', !data && 'main__inner_pending', s.blog)}>
			{data && <div className={s.blog__items}>
				{data.map((item, i) => <TheTeaser cls={s.blog__item} data = {item} key={item.slug} /> )}
			</div>}
		</div>
	);
}

export default Blog;