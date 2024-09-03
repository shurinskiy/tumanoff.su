// import { Roboto } from "next/font/google";
import localFont from 'next/font/local'

const magistral = localFont({
	src: [
		{
			path: '../../public/fonts/Magistral.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/MagistralBold.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/MagistralBlack.woff',
			weight: '900',
			style: 'normal',
		}
	]
});

const roboto = localFont({
	src: [
		{
			path: '../../public/fonts/Roboto-Light.woff',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Roboto-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Roboto-Bold.woff',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Roboto-Black.woff',
			weight: '900',
			style: 'normal',
		}
	]
});

export { magistral, roboto }