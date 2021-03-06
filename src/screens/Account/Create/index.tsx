import React from 'react';
import {
	Dimensions,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../../Types/IStyle';
import TextInput from '../../../components/TextInput';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/core';

const logo = require('../../../../assets/logo/Logo.png');
const coloredGoogle = require('../../../../assets/icons/google.png');

interface IProps extends IThemeStyle {}

const Create: React.FC<IProps> = props => {
	const navigation = useNavigation();

	const { colors, fonts } = props.theme;

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				backgroundColor: colors.background,
				paddingHorizontal: 10,
			}}>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					marginTop: 30,
					paddingHorizontal: 10,
				}}>
				<View style={{ flex: 1 }} />
				<Image
					source={logo}
					style={{ width: 35, height: 35, resizeMode: 'contain' }}
				/>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Text style={{ color: colors.primary }}>Skip</Text>
				</View>
			</View>
			<View style={{ paddingHorizontal: 40, marginBottom: 40, marginTop: 40 }}>
				<Text
					style={{
						fontFamily: fonts.medium.fontFamily,
						fontWeight: '700',
						fontSize: 24,
						marginBottom: 20,
					}}>
					Create an account
				</Text>
				<Text style={{ fontFamily: fonts.regular.fontFamily }}>
					Welcome friend, enter your details so lets get started in ordering
					food.
				</Text>
			</View>
			<View style={{ marginBottom: 60 }}>
				<TextInput placeholder="Enter email" label="Email Address" />
				<TextInput placeholder="Enter password" label="Password" />
				<TextInput placeholder="Confirm Password" label="Confirm Password" />
			</View>
			<View style={{ alignItems: 'center', marginBottom: 40 }}>
				<TouchableOpacity
					style={{
						width: Dimensions.get('screen').width / 2,
						height: 50,
						backgroundColor: '#fff',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 20,
						marginBottom: 20,
					}}>
					<Image
						source={coloredGoogle}
						style={{
							width: 25,
							height: 25,
							resizeMode: 'cover',
							marginRight: 5,
						}}
					/>
					<Text>Sign-in with Google</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginBottom: 20 }} onPress={() => {}}>
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
				<TouchableOpacity onPress={() => navigation.navigate('AccountLogin')}>
					<Text
						style={{
							color: colors.primary,
							fontFamily: fonts.medium.fontFamily,
							fontWeight: '700',
						}}>
						Login to my account
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default withTheme(Create);
