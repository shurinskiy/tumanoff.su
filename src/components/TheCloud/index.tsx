import clsx from 'clsx';
import { tagsService } from '@/services';
import s from './style.module.scss';
import { TheCloudInner } from './TheCloudInner';

type Props = {
	cls?: string
};

const TheCloud = async ({ cls }: Props) => {
	const tags = await tagsService.getAll();

	return <>
		{!!tags?.length && <div className={clsx(cls, s.cloud)}>
			<TheCloudInner tags={tags} />
		</div>}
	</>
}

export default TheCloud;