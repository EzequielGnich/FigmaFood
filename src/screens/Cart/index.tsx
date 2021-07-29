import React from 'react';
import {
	Dimensions,
	FlatList,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withTheme } from 'react-native-paper';
import Header from '../../components/Header';
import { IThemeStyle } from '../../Types/IStyle';
import { products } from '../../utils/data';
import CardProduct from './CardProduct';

import styles from './styles';

interface IProps extends IThemeStyle {}

const Cart: React.FC<IProps> = props => {
	const { colors } = props.theme;
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<Header />
			<ScrollView style={styles.container}>
				<View style={{ marginBottom: 120, alignItems: 'center' }}>
					<View style={styles.containerTitle}>
						<Text style={styles.title}>Your Cart</Text>

						{(products || []).map(item => (
							<CardProduct key={item.id} item={item} />
						))}
					</View>
					<View
						style={{
							marginTop: 35,
							width: Dimensions.get('window').width,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-around',
						}}>
						<Text>Total</Text>
						<Text style={{ fontSize: 24, fontWeight: '700' }}>$345</Text>
					</View>
					<TouchableOpacity style={{ marginTop: 35 }} onPress={() => {}}>
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
								Process to payment
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

export default withTheme(Cart);
