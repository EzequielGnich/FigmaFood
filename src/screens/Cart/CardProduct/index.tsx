import React, { useEffect, useState } from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { withTheme } from 'react-native-paper';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import { IThemeStyle } from '../../../Types/IStyle';

import styles from './styles';

const editIcon = require('../../../../assets/icons/Edit.png');
const deleteIcon = require('../../../../assets/icons/Delete.png');

interface IProps extends IThemeStyle {
	item: {
		imageUrl: ImageSourcePropType;
		name: string;
		category: string;
		price: string;
	};
}

const CardProduct: React.FC<IProps> = ({
	item: { imageUrl, name, price, category },
	...props
}) => {
	const [showActions, setShowActions] = useState(true);

	const { colors } = props.theme;

	const offsetCard = useSharedValue(0);

	offsetCard.value = withTiming(showActions ? 0 : -145, {
		duration: 550,
	});

	const cardStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offsetCard.value }],
		};
	});

	const offsetActions = useSharedValue(0);

	offsetActions.value = withTiming(showActions ? 145 : -30, {
		duration: 550,
	});

	const actionsStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offsetActions.value }],
		};
	});

	return (
		<View>
			<Animated.View style={[{ flexDirection: 'row' }, cardStyle]}>
				<TouchableOpacity
					onPress={() => setShowActions(!showActions)}
					style={[styles.productsContainer]}>
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
					<View style={styles.containerActions}>
						<TouchableOpacity
							style={[
								styles.touchableActions,
								{ backgroundColor: colors.gradient.init },
							]}>
							<IconMC name="minus" size={12} color="#fff" />
						</TouchableOpacity>
						<TouchableOpacity style={{ marginHorizontal: 5 }}>
							<Text style={{ fontWeight: '700' }}>1</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.touchableActions,
								{ backgroundColor: colors.gradient.init },
							]}>
							<IconMC name="plus" size={12} color="#fff" />
						</TouchableOpacity>
					</View>
				</TouchableOpacity>
			</Animated.View>

			<Animated.View
				style={[
					{
						position: 'absolute',
						flexDirection: 'row',
						top: 30,
						right: 50,
						zIndex: -1,
					},
					actionsStyle,
				]}>
				<View
					style={{
						width: 40,
						height: 40,
						borderRadius: 15,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#DAFAE5',
						marginRight: 10,
					}}>
					<Image
						source={editIcon}
						style={{ width: 25, height: 25, resizeMode: 'contain' }}
					/>
				</View>
				<View
					style={{
						width: 40,
						height: 40,
						borderRadius: 15,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#FBE7E7',
					}}>
					<Image
						source={deleteIcon}
						style={{ width: 25, height: 25, resizeMode: 'contain' }}
					/>
				</View>
			</Animated.View>
		</View>
	);
};

export default withTheme(CardProduct);
