import clsx from 'clsx';
import { magistral } from '@/fonts'
import s from "./style.module.scss";

const TheForm = () => {

	return (
		<form className={s.form}>
			<fieldset className={s.form__fields}>
				<div className={s.form__field}><input type="text" placeholder='Имя'/></div>
				<div className={s.form__field}><input type="text" placeholder='Email'/></div>
				<div className={`${s.form__field} ${s.form__field_wide}`}><textarea placeholder='Сообщение' rows={10}></textarea></div>
			</fieldset>
			<button className={`${s.form__submit} ${magistral.className}`} type='button'>Опубликовать</button>
		</form>
	);
}

export { TheForm };