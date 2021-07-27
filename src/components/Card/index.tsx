import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

interface IProps {
	item: {
		id: number;
		imageLink: ImageSourcePropType;
		title: string;
		description: string;
		stars: number;
		like: boolean;
	};
}

const Card: React.FC<IProps> = ({
	item: { imageLink, description, title, stars, like },
}) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				navigation.navigate('Product', { screen: 'ProductDetails' })
			}>
			<View style={styles.imageContainer}>
				<Image source={imageLink} style={styles.image} />
			</View>
			<View>
				<View style={styles.bodyContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
				<View style={styles.footer}>
					<View style={styles.wrapperStars}>
						<IconMC name="star" size={16} color="#F5A62E" />
						<Text>{stars}+</Text>
					</View>
					<TouchableOpacity>
						<IconMC name="heart" size={16} color={like ? '#FE554A' : 'gray'} />
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Card;
