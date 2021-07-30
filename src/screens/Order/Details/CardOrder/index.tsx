import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../../../Types/IStyle';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

interface IProps extends IThemeStyle {
	item: {
		id: number;
		imageUrl: ImageSourcePropType;
		name: string;
		category: string;
		price: string;
		status: boolean;
	};
}

const CardOrder: React.FC<IProps> = ({
	item: { category, imageUrl, name, price, status },
	...props
}) => {
	console.log(imageUrl);
	const { colors } = props.theme;
	return (
		<View style={[{ flexDirection: 'row' }]}>
			<View
				style={[
					styles.productsContainer,
					{ position: 'relative', overflow: 'hidden' },
				]}>
				<View
					style={{
						backgroundColor: '#85BB72',
						width: 90,
						height: 15,
						transform: [{ rotate: '45deg' }],
						position: 'absolute',
						zIndex: 1000,
						alignItems: 'center',
						justifyContent: 'center',
						right: -20,
						top: 15,
					}}>
					<Text style={{ color: '#FFF', fontSize: 11 }}>Complete</Text>
				</View>

				<View style={[styles.wrapperImage, { shadowColor: colors.shadow }]}>
					<Image source={imageUrl} style={styles.image} />
				</View>
				<View>
					<Text style={styles.productName}>{name}</Text>
					<Text style={styles.productCategory}>{category}</Text>
					<Text style={[styles.productPrice, { color: colors.primary }]}>
						${price}
					</Text>
				</View>

				<View>
					<View style={{ flex: 1 }} />
					<View style={[styles.container, { flex: 1 }]}>
						<TouchableOpacity
							style={[
								styles.touchable,
								{ backgroundColor: colors.gradient.init },
							]}>
							<IconMC name="minus" size={12} color="#fff" />
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 5 }}>
							<Text style={{ fontWeight: '700' }}>1</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.touchable,
								{ backgroundColor: colors.gradient.init },
							]}>
							<IconMC name="plus" size={12} color="#fff" />
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
							<Text
								style={{
									color: colors.primary,
									textDecorationLine: 'underline',
								}}>
								Order again
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default withTheme(CardOrder);
