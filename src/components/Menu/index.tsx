import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { View, Platform, Keyboard } from 'react-native';

import { withTheme } from 'react-native-paper';

import styles from './styles';

import Icon from './Icon';
import LinearGradient from 'react-native-linear-gradient';

const Menu = props => {
	const {
		navigation: { navigate },
		state,
	}: any = props;

	const { index } = state;

	const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

	const { showTabBar } = useSelector<any, any>(c => c.menu);

	useEffect(() => {
		if (Platform.OS === 'android') {
			const listenerOpen = Keyboard.addListener('keyboardDidShow', e =>
				setIsKeyboardOpen(true),
			);
			const listenerClose = Keyboard.addListener('keyboardDidHide', e =>
				setIsKeyboardOpen(false),
			);
			return () => {
				listenerOpen.remove();
				listenerClose.remove();
			};
		}
	}, []);

	const handleClick = (name: string) => {
		switch (name) {
			case 'Posts':
				navigate(name, { screen: 'Home', params: { screen: 'Posts' } });
				break;
			case 'Albums':
				navigate(name, { screen: 'Home', params: { screen: 'Albums' } });
				break;
			case 'Todos':
				navigate(name, { screen: 'Home', params: { screen: 'Todos' } });
				break;
			default:
				navigate(name, { screen: 'Posts' });
				break;
		}
	};

	if (isKeyboardOpen || !showTabBar) return null;

	const { colors } = props.theme;

	return (
		<View style={styles.container}>
			<Icon
				iconName="home-outline"
				size={28}
				color="#FE554A"
				handleClick={() => handleClick('Home')}
			/>
			<Icon
				iconName="heart-outline"
				size={28}
				color="#FE554A"
				handleClick={() => handleClick('Posts')}
			/>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper} />
				<LinearGradient
					angle={-45}
					useAngle
					style={styles.linearGradient}
					colors={[colors.gradient.init, colors.gradient.end]}>
					<Icon
						iconName="magnify"
						size={36}
						color="#FFF"
						handleClick={() => handleClick('Posts')}
					/>
				</LinearGradient>
			</View>
			<Icon
				iconName="bell-outline"
				size={28}
				color="#FE554A"
				handleClick={() => handleClick('Posts')}
			/>
			<Icon
				iconName="cart-outline"
				size={28}
				color="#FE554A"
				handleClick={() => handleClick('Posts')}
			/>
		</View>
	);
};

export default withTheme(Menu);
