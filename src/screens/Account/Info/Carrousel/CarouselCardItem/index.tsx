import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../../../../Types/IStyle';

import styles from './styles';

interface IProps extends IThemeStyle {
	item: { imgUrl: ImageSourcePropType };
	index: number;
}

const CarouselCardItem: React.FC<IProps> = ({ item, index, ...props }) => {
	const { colors } = props.theme;

	return (
		<View
			style={[styles.container, { backgroundColor: colors.background }]}
			key={index}>
			<Image source={item.imgUrl} style={styles.image} />
		</View>
	);
};

export default withTheme(CarouselCardItem);
