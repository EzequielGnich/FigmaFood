import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-paper';

import styles from './styles';

const menu = require('../../../assets/icons/menu.png');
const face = require('../../../assets/icons/face.png');

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { IThemeStyle } from '../../Types/IStyle';

interface IProps extends IThemeStyle {}

const Header: React.FC<IProps> = props => {
	const { colors } = props.theme;

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={menu} style={styles.image} />
			</View>
			<View style={styles.containerDelivery}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ textDecorationLine: 'underline' }}>Delivery to</Text>
					<TouchableOpacity onPress={() => {}}>
						<IconMC name="chevron-down" size={18} color="#000" />
					</TouchableOpacity>
				</View>
				<Text style={{ color: colors.primary }}>lekki phase 1, Estate</Text>
			</View>
			<View style={styles.imageContainer}>
				<Image source={face} style={styles.image2} />
			</View>
		</View>
	);
};

export default withTheme(Header);
