'use client'

import { useQuery } from '@tanstack/react-query';
import ReactHtmlParser from 'html-react-parser';
import { roboto } from '@/fonts'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';

import { postService } from '@/api';
import clsx from 'clsx';
import s from "./style.module.scss";
import TheCaption from '@/components/TheCaption';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('scss', scss);

type Props = {
	params: {
		slug: string
	}
}

const Post = ({params: {slug}}: Props) => {
	
	const {data} = useQuery({
		queryKey: ['one post'],
		queryFn: () => postService.getOne(slug)
	});

	const parseProcessor = (content: string) => {
		return ReactHtmlParser(content, {
			transform(reactNode, domNode, i) {
				if (reactNode && domNode.type === 'tag' && domNode.name === 'code') {
					return (
						<SyntaxHighlighter
							key={i}
							language={reactNode.props.className.replace('language-', '')}
							PreTag={({children}) => (<pre className={s.post__highlight}>{children}</pre>)}
							CodeTag={({children}) => (<code className={s.post__code}>{children}</code>)}
							codeTagProps={{}}
							showLineNumbers
							style={theme}
						>
							{domNode.children[0].data}
						</SyntaxHighlighter>
					);
				} else {
					return reactNode;
				}
			},
		})
	}

	return (
		<div className={clsx('main__inner', !data && 'main__inner_pending', s.post)}>
			{data && <div className={s.post__inner}>
				<TheCaption cls={s.post__caption} data={data}/>
				<div className={`${s.post__content} ${roboto.className}`}>
					{parseProcessor(data.content)}
				</div>
			</div>}
		</div>
	);
}

export default Post;