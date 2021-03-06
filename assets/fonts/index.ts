import { Platform, PlatformOSType } from 'react-native';
import type { Fonts } from '../../src/Types/IFonts';

const fontConfig = {
	web: {
		regular: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '400' as '400',
		},
		medium: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '500' as '500',
		},
		light: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '300' as '300',
		},
		thin: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '100' as '100',
		},
	},
	ios: {
		regular: {
			fontFamily: 'System',
			fontWeight: '400' as '400',
		},
		medium: {
			fontFamily: 'System',
			fontWeight: '500' as '500',
		},
		light: {
			fontFamily: 'System',
			fontWeight: '300' as '300',
		},
		thin: {
			fontFamily: 'System',
			fontWeight: '100' as '100',
		},
	},
	default: {
		regular: {
			fontFamily: 'DMSans-Regular',
			fontWeight: 'normal' as 'normal',
		},
		medium: {
			fontFamily: 'DMSans-Medium',
			fontWeight: 'normal' as 'normal',
		},
		bold: {
			fontFamily: 'DMSans-Bold',
			fontWeight: 'normal' as 'normal',
		},
	},
};

export default function configureFonts(
	config?: { [platform in PlatformOSType | 'default']?: Fonts },
): Fonts {
	const fonts = Platform.select({ ...fontConfig, ...config }) as Fonts;
	return fonts;
}
