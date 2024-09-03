import s from './style.module.scss'

type Props = {};

const TheFooter = ({}: Props) => {
	return (
		<footer className={`${s.footer} footer`}>
			Copyright &copy; { new Date().getFullYear() }
		</footer>
	);
}

export default TheFooter;