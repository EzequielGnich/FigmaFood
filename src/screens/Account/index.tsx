// import React, { useEffect, useState } from 'react';
// import {
// 	Dimensions,
// 	Image,
// 	StyleSheet,
// 	Text,
// 	TouchableOpacity,
// 	View,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { withTheme } from 'react-native-paper';

// import { IThemeStyle } from '../../Types/IStyle';
// import CarouselSlider from './Carrousel';

// const man = require('../../../assets/images/man.png');
// const mobile = require('../../../assets/images/mobile.png');
// const food = require('../../../assets/images/food.png');

// const logo = require('../../../assets/logo/Logo.png');

// const Register: React.FC<IThemeStyle> = props => {
// 	const { colors } = props.theme;

// 	const [data, setData] = useState([{ imgUrl: '' }]);

// 	useEffect(() => {
// 		setData([{ imgUrl: mobile }, { imgUrl: food }, { imgUrl: man }]);
// 	}, []);

// 	return (
// 		<View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
// 			<View style={{ flex: 1, flexDirection: 'row' }}>
// 				<View style={{ flex: 1 }} />
// 				<Image
// 					source={logo}
// 					style={{ width: 35, height: 35, resizeMode: 'contain' }}
// 				/>
// 				<View style={{ flex: 1, alignItems: 'flex-end' }}>
// 					<Text style={{ color: colors.primary }}>Skip</Text>
// 				</View>
// 			</View>
// 			<View style={{ flex: 1 }}>
// 				<Text
// 					style={{
// 						fontSize: 24,
// 						paddingHorizontal: 20,
// 						fontWeight: '700',
// 						fontFamily: 'DMSans-Medium',
// 						textAlign: 'center',
// 						includeFontPadding: true,
// 						color: colors.fontColor,
// 						lineHeight: 45,
// 					}}>
// 					Order from your favorite stores or vendors
// 				</Text>
// 			</View>
// 			<View
// 				style={{
// 					flex: 3,
// 					alignItems: 'center',
// 					justifyContent: 'center',
// 				}}>
// 				<CarouselSlider data={data} />
// 			</View>
// 			<View
// 				style={{
// 					flex: 1,
// 					alignItems: 'center',
// 					justifyContent: 'space-between',
// 				}}>
// 				<TouchableOpacity onPress={() => {}}>
// 					<LinearGradient
// 						style={{
// 							width: Dimensions.get('window').width - 25,
// 							height: 50,
// 							borderRadius: 20,
// 							alignItems: 'center',
// 							justifyContent: 'center',
// 						}}
// 						colors={[colors.gradient.init, colors.gradient.end]}>
// 						<Text
// 							style={{
// 								fontSize: 14,
// 								color: '#FFF',
// 								fontWeight: '700',
// 								fontFamily: 'DMSans-Medium',
// 							}}>
// 							Create an account
// 						</Text>
// 					</LinearGradient>
// 				</TouchableOpacity>
// 				<TouchableOpacity
// 					style={{ alignItems: 'center', justifyContent: 'center' }}>
// 					<Text style={{ color: colors.primary }}>login</Text>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	header: {
// 		color: '#222',
// 		fontSize: 28,
// 		fontWeight: 'bold',
// 		paddingLeft: 20,
// 		paddingTop: 20,
// 	},
// 	body: {
// 		color: '#222',
// 		fontSize: 18,
// 		paddingLeft: 20,
// 		paddingRight: 20,
// 	},
// });

// export default withTheme(Register);
