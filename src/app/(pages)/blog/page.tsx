import clsx from 'clsx';

import TheTeaser from "@/components/TheTeaser";
import { postService } from '@/services';
import s from "./style.module.scss";

const Blog = async () => {
	const data = await postService.getAll();
	
	return (
		<div className={clsx('main__inner', s.blog)}>
			{!!data.length && <div className={s.blog__items}>
				{data.map((item, i) => <TheTeaser cls={s.blog__item} data = {item} key={item.slug} /> )}
			</div>}
		</div>
	);
}

export default Blog;