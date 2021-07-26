import { DefaultTheme } from 'react-native-paper';

import configureFonts from '../fonts';

export const theme = {
	...DefaultTheme,
	fonts: configureFonts(),
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#FE554A',
		accent: '#0B735F',
		gradient: {
			end: '#F9881F',
			init: '#FF774C',
		},
		dark: '#2A3037',
		darkGray: '#AAACAE',
		lightGray: '#DFE2E5',
		border: '#F0CAC1',
		light: '#FCFCFC',
		background: '#F8FBFF',
		fontColor: '#1C1C1C',
	},
};
