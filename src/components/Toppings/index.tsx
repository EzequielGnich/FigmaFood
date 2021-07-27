import React from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';

import { toppingsData } from '../../utils/data';
import Item from './Item';

const Toppings: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Toppings for you</Text>
			<FlatList
				contentContainerStyle={styles.flatListStyle}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={toppingsData || []}
				renderItem={({ item }) => <Item item={item} />}
			/>
		</View>
	);
};

export default Toppings;
