import s from './style.module.scss'

type Props = {
	cls?: string
};

const TheCloud = ({cls}: Props) => {
	return (
		<div className={`${cls || ''} ${s.cloud}`}>
			<a href="/">верстка</a>
			<a href="/">эффекты</a>
			<a href="/">решения</a>
			<a href="/">javascript</a>
			<a href="/">scss</a>
			<a href="/">wordpress</a>
			<a href="/">react</a>
			<a href="/">next.js</a>
		</div>
	);
}

export default TheCloud;