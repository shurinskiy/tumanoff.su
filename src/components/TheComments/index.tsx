import clsx from 'clsx';
import { roboto } from '@/fonts'
import Gravatar from 'react-gravatar';
import { useInView } from 'react-intersection-observer';

import { TypeComment } from '@/services';
import s from './style.module.scss'

type Props = {
	cls?: string,
	comments: TypeComment[],
	isCommented: boolean,
	onReply: (e: any) => void
};

const TheComments = ({cls, comments, isCommented, onReply}: Props) => {
	const { ref, inView, entry } = useInView({ threshold: 0, triggerOnce: true });

	return (
		<div className={clsx(cls, s.comments)} ref={ref}>
			{inView && comments?.map((comment: TypeComment) => (
				<div className={clsx(cls, s.comments__item, comment.parent_id && s.comments__item_child)} key={comment.id}>
					<div className={s.comments__avatar}>
						<Gravatar email={comment.email} default='blank' size={150} />
					</div>
					<div className={s.comments__side}>
						<div className={s.comments__cap}>
							<div className={`${s.comments__avatar} ${s.comments__avatar_small}`}>
								<Gravatar email={comment.email} default='blank' size={150} />
							</div>
							<div className={s.comments__author}>
								<span>{comment.author}</span>
								<span className={roboto.className}>{comment.date}</span>
							</div>
						</div>
						<div className={`${s.comments__text} ${roboto.className}`}>{comment.text}</div>

						{isCommented && <button 
							data-id={comment.id}
							className={`${s.comments__reply} ${roboto.className}`} 
							onClick={onReply}
						>Ответить</button>}
					</div>
				</div>
			))}
		</div>
	);
}

export { TheComments };