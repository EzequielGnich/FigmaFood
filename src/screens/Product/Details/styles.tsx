import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 100,
	},
	imageContainer: {
		elevation: 12,
		backgroundColor: '#FFF',
		borderRadius: 20,
	},
	image: {
		width: 260,
		height: 224,
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
