import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
} from 'react-native';

import styles from './styles';

import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../../Types/IStyle';

interface IProps extends IThemeStyle {
	item: {
		imageUrl: ImageSourcePropType;
		title: string;
	};
}

const Item: React.FC<IProps> = ({ item: { imageUrl, title }, ...props }) => {
	const { colors } = props.theme;

	return (
		<TouchableOpacity
			style={[styles.touchable, { shadowColor: colors.shadow }]}>
			<Image source={imageUrl} style={styles.image} />
			<Text>{title}</Text>
		</TouchableOpacity>
	);
};

export default withTheme(Item);
