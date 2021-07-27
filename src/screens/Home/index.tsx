import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';
import Card from '../../components/Card';
import Filter from '../../components/Filter/Filter';
import Header from '../../components/Header';

import { IThemeStyle } from '../../Types/IStyle';
import { dataFilter, dataCard } from '../../utils/data';

import styles from './styles';

interface IProps extends IThemeStyle {}

const Home: React.FC<IProps> = props => {
	const { colors, fonts } = props.theme;
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<Header />
			<View style={styles.container}>
				<View style={styles.wrapperFilter}>
					<Text style={styles.filterTitle}>Enjoy Delicious food</Text>

					<FlatList
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.flatList}
						horizontal={true}
						alwaysBounceHorizontal={true}
						data={dataFilter || []}
						renderItem={({ item }) => <Filter key={item.id} item={item} />}
					/>
				</View>

				<View style={styles.wrapperCard}>
					<View style={styles.header}>
						<Text style={styles.headerTitle}>Popular restaurants</Text>
						<TouchableOpacity>
							<Text style={{ color: colors.primary }}>View all(29)</Text>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 20 }}>
						<FlatList
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ padding: 20 }}
							horizontal={true}
							alwaysBounceHorizontal={true}
							data={dataCard || []}
							renderItem={({ item }) => <Card item={item} />}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default withTheme(Home);
