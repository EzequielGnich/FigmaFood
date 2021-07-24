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
			init: '#F9881F',
			end: '#FF774C',
		},
		dark: '#2A3037',
		darkGray: '#AAACAE',
		lightGray: '#DFE2E5',
		light: '#FCFCFC',
		background: '#F7F7FB',
	},
};
