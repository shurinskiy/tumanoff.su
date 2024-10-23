'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { roboto, magistral } from '@/fonts'
import ReactHtmlParser from 'html-react-parser';
import { FaBookBookmark } from "react-icons/fa6";
import { useState } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';

import { TypePost, TypeComment } from '@/services';
import { TheCaption } from '@/components/TheCaption';
import { TheComments } from '@/components/TheComments';
import { TheForm } from '@/components/TheForm';
import s from "./style.module.scss";

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('scss', scss);


type Props = {
	post: TypePost,
	comments?: TypeComment[]
}

const ThePost = ({ post, comments }: Props) => {
	const [showform, setShowform] = useState<boolean>(false);

	const onReply = (e: any) => {
		console.log(e.target.dataset?.id);
	}

	const parseProcessor = (content: string) => {
		return ReactHtmlParser(content, {
			transform(reactNode: any, domNode: any, i) {
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
		<div className={clsx('main__inner', s.post)}>
			{post && <div className={s.post__inner}>
				<TheCaption cls={s.post__caption} data={post}/>
				<div className={`${s.post__content} ${roboto.className}`}>
					{parseProcessor(post.content)}
				</div>
				
				{post.source && <div className={s.post__signature}>
					<FaBookBookmark />
					<span>Источник: </span>
					<Link href={post.source.url}>{post.source.title}</Link>
				</div>}

				{!!comments?.length && <TheComments 
					cls={s.post__comments} 
					comments={comments}
					isCommented={post.commented}
					onReply={() => setShowform(true)}
				/>}
				
				{showform && <TheForm />}
				
				{!showform && post.commented && <button
					className={`${s.post__reply} ${magistral.className}`}
					onClick={() => setShowform(true)}
				>Оставьте комментарий</button>}
			</div>}
		</div>
	);
}

export { ThePost };