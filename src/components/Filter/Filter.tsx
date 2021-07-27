import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../Types/IStyle';

import styles from './styles';

interface IProps extends IThemeStyle {
	item: {
		id: number;
		active: boolean;
		categoryName: string;
		icon: ImageSourcePropType;
	};
}

const Filter: React.FC<IProps> = props => {
	const { colors, fonts } = props.theme;
	const {
		item: { categoryName, icon, active },
	} = props;

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {}}
				style={[
					styles.wrapper,
					{ borderColor: active ? '#3EC032' : colors.border },
				]}>
				<View
					style={[
						styles.backgroundActive,
						{ backgroundColor: active ? 'rgba(169, 232, 139, 0.2)' : '#fff' },
					]}>
					<Image source={icon} style={styles.image} />
					<Text style={{ fontSize: 14, fontFamily: fonts.regular.fontFamily }}>
						{categoryName}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default withTheme(Filter);
