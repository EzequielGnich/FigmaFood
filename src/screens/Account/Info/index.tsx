import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withTheme } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';

import { IThemeStyle } from '../../../Types/IStyle';
import CarouselSlider from './Carrousel';

const man = require('../../../../assets/images/man.png');
const mobile = require('../../../../assets/images/mobile.png');
const food = require('../../../../assets/images/food.png');

const logo = require('../../../../assets/logo/Logo.png');

const Register: React.FC<IThemeStyle> = props => {
	const { colors } = props.theme;

	const navigation = useNavigation();
	const [data, setData] = useState([{ imgUrl: '' }]);

	useEffect(() => {
		setData([{ imgUrl: mobile }, { imgUrl: food }, { imgUrl: man }]);
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={{ flex: 1 }} />
				<Image
					source={logo}
					style={{ width: 35, height: 35, resizeMode: 'contain' }}
				/>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Text style={{ color: colors.primary }}>Skip</Text>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						fontSize: 24,
						paddingHorizontal: 20,
						fontWeight: '700',
						fontFamily: 'DMSans-Medium',
						textAlign: 'center',
						includeFontPadding: true,
						color: colors.fontColor,
						lineHeight: 45,
					}}>
					Order from your favorite stores or vendors
				</Text>
			</View>
			<View
				style={{
					flex: 3,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<CarouselSlider data={data} />
			</View>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<TouchableOpacity onPress={() => navigation.navigate('AccountCreate')}>
					<LinearGradient
						angle={-45}
						useAngle
						style={{
							width: Dimensions.get('window').width - 25,
							height: 50,
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'center',
						}}
						colors={[colors.gradient.init, colors.gradient.end]}>
						<Text
							style={{
								fontSize: 14,
								color: '#FFF',
								fontWeight: '700',
								fontFamily: 'DMSans-Medium',
							}}>
							Create an account
						</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate('AccountLogin')}
					style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{ color: colors.primary }}>login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default withTheme(Register);
