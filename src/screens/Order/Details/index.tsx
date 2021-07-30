import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { withTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { IThemeStyle } from '../../../Types/IStyle';
import { orderData } from '../../../utils/data';
import CardOrder from './CardOrder';

const burguer = require('../../../../assets/images/burguer.png');

interface IProps extends IThemeStyle {}
const Order: React.FC<IProps> = props => {
	const navigation = useNavigation();

	const { colors } = props.theme;

	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}>
				<IconMC name="chevron-left" size={36} color="#000" />
			</TouchableOpacity>
			<View style={{ flex: 12, paddingHorizontal: 20 }}>
				<Text style={{ fontSize: 24, fontWeight: '700' }}>Your orders</Text>
				<View>
					{(orderData || []).map(item => (
						<CardOrder key={item.id} item={item} />
					))}
				</View>
			</View>
		</View>
	);
};

export default withTheme(Order);
