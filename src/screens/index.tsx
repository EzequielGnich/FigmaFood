import React, { useRef } from 'react';
import { Dimensions, StatusBar, Text, View } from 'react-native';
import {
	NavigationContainer,
	NavigationContainerRef,
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withTheme } from 'react-native-paper';

import Home from './Home';

import AccountInfo from './Account/Info';
import AccountCreate from './Account/Create';
import AccountLogin from './Account/Login';
import AccountRecovery from './Account/Recovery';
import ResetPassword from './Account/Recovery/ResetPassword';

import ProductDetails from './Product/Details';

import CartDetails from './Cart';

import OrderDetails from './Order/Details';

import Menu from '../components/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AccountScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Info" component={AccountInfo} />
			<Stack.Screen name="AccountCreate" component={AccountCreate} />
			<Stack.Screen name="AccountLogin" component={AccountLogin} />
			<Stack.Screen name="AccountRecovery" component={AccountRecovery} />
			<Stack.Screen name="ResetPassword" component={ResetPassword} />
		</Stack.Navigator>
	);
};

const HomeScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};

const ProductScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="ProductDetails" component={ProductDetails} />
		</Stack.Navigator>
	);
};

const CartScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="CartDetails" component={CartDetails} />
		</Stack.Navigator>
	);
};

const OrderScreens = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="OrderDetails" component={OrderDetails} />
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<Tab.Navigator
			tabBar={props => (
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						width: Dimensions.get('window').width,
					}}>
					<Menu {...props} />
				</View>
			)}>
			<Tab.Screen name="Home" component={HomeScreens} />
			<Tab.Screen name="Account" component={AccountScreens} />
			<Tab.Screen name="Product" component={ProductScreens} />
			<Tab.Screen name="Cart" component={CartScreens} />
			<Tab.Screen name="Order" component={OrderScreens} />
		</Tab.Navigator>
	);
};

const Root = props => {
	const routeNameRef = useRef<string>();
	const navigationRef = useRef<NavigationContainerRef>();
	const { colors } = props.theme;

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="dark-content" backgroundColor={colors.background} />
			<NavigationContainer
				fallback={<Text>Loading...</Text>}
				ref={navigationRef}
				onReady={() => {
					routeNameRef.current = navigationRef.current.getCurrentRoute().name;
				}}
				onStateChange={() => {
					const previousRouteName = routeNameRef.current;
					const currentRouteName = navigationRef.current.getCurrentRoute().name;

					// Save the current route name for later comparison
					routeNameRef.current = currentRouteName;
				}}>
				<Stack.Navigator initialRouteName="Home" headerMode="none">
					<Stack.Screen name="Home" component={App} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default withTheme(Root);
