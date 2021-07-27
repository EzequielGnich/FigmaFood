import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	wrapper: {
		height: 110,
		width: 80,
		elevation: 5,

		backgroundColor: '#FFF',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		padding: 10,
	},
	backgroundActive: {
		flex: 1,
		height: 110,
		width: 60,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: { width: 30, height: 30 },
});

export default styles;
