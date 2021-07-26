import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const menu = require('../../../assets/icons/menu.png');
const face = require('../../../assets/icons/face.png');

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
	return (
		<View
			style={{
				padding: 20,
				flexDirection: 'row',
				width: Dimensions.get('window').width,
				position: 'absolute',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'transparent',
			}}>
			<View
				style={{
					width: 40,
					height: 40,
					borderRadius: 15,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#fff',
				}}>
				<Image
					source={menu}
					style={{ width: 15, height: 15, resizeMode: 'cover' }}
				/>
			</View>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ textDecorationLine: 'underline' }}>Delivery to</Text>
					<TouchableOpacity onPress={() => {}}>
						<IconMC name="chevron-down" size={18} color="#000" />
					</TouchableOpacity>
				</View>
				<Text>lekki phase 1, Estate</Text>
			</View>
			<View
				style={{
					width: 40,
					height: 40,
					borderRadius: 15,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#fff',
				}}>
				<Image
					source={face}
					style={{ width: 40, height: 40, resizeMode: 'cover' }}
				/>
			</View>
		</View>
	);
};

export default Header;
