import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flexDirection: 'row',
		width: Dimensions.get('window').width,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	imageContainer: {
		width: 40,
		height: 40,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	image: { width: 15, height: 15, resizeMode: 'cover' },
	containerDelivery: { flex: 1, alignItems: 'center' },
	image2: { width: 40, height: 40, resizeMode: 'cover' },
});

export default styles;
