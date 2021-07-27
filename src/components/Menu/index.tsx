import React, { useEffect } from 'react';
import _ from 'lodash';
import { View } from 'react-native';

import { withTheme } from 'react-native-paper';

import styles from './styles';

import Icon from './Icon';
import LinearGradient from 'react-native-linear-gradient';

import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

const Menu = props => {
	const {
		navigation: { navigate },
		state,
	}: any = props;

	const { colors } = props.theme;

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

	const offsetTab = useSharedValue(100);

	useEffect(() => {
		offsetTab.value = withTiming(0, { duration: 500 });
	}, []);

	const tabStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: offsetTab.value }],
		};
	});

	const offsetSearch = useSharedValue(10);

	useEffect(() => {
		offsetSearch.value = withTiming(0, { duration: 1000 });
	}, []);

	const searchStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${offsetSearch.value}rad` }],
		};
	});

	return (
		<Animated.View style={[styles.container, tabStyle]}>
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
					<Animated.View style={[searchStyle]}>
						<Icon
							iconName="magnify"
							size={36}
							color="#FFF"
							handleClick={() => handleClick('Posts')}
						/>
					</Animated.View>
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
		</Animated.View>
	);
};

export default withTheme(Menu);
