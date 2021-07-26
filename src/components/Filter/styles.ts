import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		height: 110,
		width: 80,

		backgroundColor: '#fff',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		padding: 10,
		marginRight: 20,
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
