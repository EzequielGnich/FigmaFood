import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	ScrollView,
	View,
	Dimensions,
	FlatList,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import Header from '../../../components/Header';
import { IThemeStyle } from '../../../Types/IStyle';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import Toppings from '../../../components/Toppings';

const burguerLG = require('../../../../assets/images/burguerLG.png');

interface IProps extends IThemeStyle {}

const Product: React.FC<IProps> = props => {
	const { colors } = props.theme;
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<Header />
			<ScrollView style={styles.scrollViewStyle}>
				<View style={[styles.container, { marginBottom: 100 }]}>
					<View style={[styles.imageContainer, { shadowColor: colors.shadow }]}>
						<Image style={styles.image} source={burguerLG} />
					</View>
					<View style={{ marginTop: 35 }}>
						<LinearGradient
							angle={-45}
							useAngle
							style={styles.linearGradient}
							colors={[colors.gradient.init, colors.gradient.end]}>
							<TouchableOpacity>
								<IconMC name="minus" size={20} color="#FFF" />
							</TouchableOpacity>
							<Text style={{ color: '#FFF' }}>2</Text>
							<TouchableOpacity>
								<IconMC name="plus" size={20} color="#FFF" />
							</TouchableOpacity>
						</LinearGradient>
					</View>
					<View style={{ marginTop: 35 }}>
						<Text style={{ fontWeight: '700', fontSize: 24 }}>
							Big boys Cheese burger
						</Text>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<IconMC name="star" size={16} color="#F5A62E" />
								<Text style={{ fontSize: 12 }}>4+</Text>
							</View>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<IconMC name="fire" size={16} color="#F5A62E" />
								<Text style={{ fontSize: 12 }}>300cal</Text>
							</View>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<IconMC name="clock" size={16} color="#F5A62E" />
								<Text style={{ fontSize: 12 }}>5-10min</Text>
							</View>
						</View>
					</View>
					<Text style={{ paddingHorizontal: 35, marginTop: 35 }}>
						Our simple, classic cheeseburger begins with a 100% pure beef burger
						seasoned with just a pinch of salt and pepper. The McDonald’s
						Cheeseburger is topped
					</Text>
					<View>
						<TouchableOpacity style={{ marginTop: 40 }} onPress={() => {}}>
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
									Add to cart
								</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
					<Toppings />
				</View>
			</ScrollView>
		</View>
	);
};

export default withTheme(Product);
