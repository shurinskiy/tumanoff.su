import { postService, commentService } from '@/services';
import { ThePost } from '@/components/ThePost';
import { Metadata } from 'next';

type Props = {
	params: {
		slug: string
	}
}

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata> {
	const post = await postService.getOne(slug);
	return { title: post.title }
}

const Post = async ({params: {slug}}: Props) => {
	const post = await postService.getOne(slug);
	const comments = await commentService.getByPost(post.id);

	return (
		post && <ThePost post={post} comments={comments} />
	);
}

export default Post;