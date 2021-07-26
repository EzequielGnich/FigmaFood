import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { withTheme } from 'react-native-paper';
import Filter from '../../components/Filter/Filter';
import Header from '../../components/Header';

import { IThemeStyle } from '../../Types/IStyle';

const hamburger = require('../../../assets/images/hamburger.png');
const hotDog = require('../../../assets/images/hotDog.png');
const taco = require('../../../assets/images/taco.png');

interface IProps extends IThemeStyle {}

const Home: React.FC<IProps> = props => {
	const { colors, fonts } = props.theme;
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<Header />
			{/* <View style={{ flex: 1 }}>
				<Text
					style={{
						fontFamily: fonts.medium.fontFamily,
						fontWeight: '700',
						fontSize: 24,
					}}>
					Enjoy Delicious food
				</Text>
				<View
					style={{
						height: 110,
						width: 80,

						backgroundColor: '#fff',
						borderWidth: 1,
						borderColor: colors.border,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 50,
						padding: 10,
					}}>
					<View
						style={{
							flex: 1,
							height: 110,
							width: 60,
							borderRadius: 50,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(169, 232, 139, 0.2)',
						}}>
						<Image source={hamburger} style={{ width: 30, height: 30 }} />
						<Text
							style={{ fontSize: 14, fontFamily: fonts.regular.fontFamily }}>
							Pizza
						</Text>
					</View>
				</View>
			</View> */}

			<Text
				style={{
					fontFamily: fonts.medium.fontFamily,
					fontWeight: '700',
					fontSize: 24,
				}}>
				Enjoy Delicious food
			</Text>

			<FlatList
				horizontal={true}
				alwaysBounceHorizontal={true}
				data={[
					{ id: 1, active: false, categoryName: 'Burguer', icon: hamburger },
					{ id: 2, active: true, categoryName: 'Sausage', icon: hotDog },
					{ id: 3, active: false, categoryName: 'Taco', icon: taco },
					{ id: 4, active: false, categoryName: 'Burguer', icon: hamburger },
					{ id: 5, active: false, categoryName: 'Sausage', icon: hotDog },
					{ id: 6, active: false, categoryName: 'Taco', icon: taco },
					{ id: 7, active: false, categoryName: 'Burguer', icon: hamburger },
					{ id: 8, active: false, categoryName: 'Sausage', icon: hotDog },
					{ id: 9, active: false, categoryName: 'Taco', icon: taco },
					{ id: 10, active: false, categoryName: 'Burguer', icon: hamburger },
					{ id: 11, active: false, categoryName: 'Sausage', icon: hotDog },
					{ id: 12, active: false, categoryName: 'Taco', icon: taco },
				]}
				renderItem={({ item }) => <Filter key={item.id} item={item} />}
			/>
		</View>
	);
};

export default withTheme(Home);
