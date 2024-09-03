import TheTeaser from "@/components/TheTeaser";
import s from "./style.module.scss";
import { data } from '@/assets/data';

const Blog = () => {
	return (
		<div className={`${s.blog} main__inner`}>
			{data && 
				data.map((item, i) => {
					return <TheTeaser cls={s.blog__item} data = {item} key={item.url} />;
				})
			}
		</div>
	);
}

export default Blog;