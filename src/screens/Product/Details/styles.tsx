import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 100,
	},
	imageContainer: {
		width: 260,
		height: 225,
		elevation: 12,
		backgroundColor: '#FFF',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 230,
		height: 150,
		resizeMode: 'cover',
		borderRadius: 20,
	},
	linearGradient: {
		width: 100,
		height: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'space-around',
		elevation: 5,
		flexDirection: 'row',
	},
});

export default styles;
