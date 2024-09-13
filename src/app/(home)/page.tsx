import s from "./style.module.scss";
import { roboto } from '@/fonts'

export default function Home() {
	return (
		<main className='main main_home'>
			<div className={s.wellcome}>
				<div className={`${s.wellcome__text}`}>
					<p>Здравствуйте,</p>
					<p>меня зовут <strong>Александр Туманов.</strong></p>
					<p>Я - <span>веб-разработчик</span></p>
				</div>
				<a className={`${s.wellcome__btn} ${roboto.className}`} href="./index.html">Посмотреть работы</a>
			</div>
		</main>
	);
}