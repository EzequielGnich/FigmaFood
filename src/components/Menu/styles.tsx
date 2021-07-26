import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',

		justifyContent: 'space-around',
		alignItems: 'flex-start',

		height: 80,

		backgroundColor: '#FFF',

		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,

		paddingTop: 20,

		elevation: 5,
	},
	searchContainer: { flex: 1, position: 'relative', alignItems: 'center' },
	searchWrapper: {
		backgroundColor: '#FFF',
		width: 150,
		height: 150,
		borderRadius: 75,
		position: 'absolute',
		top: -29,
		zIndex: -1,
	},
	linearGradient: {
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: -40,
		elevation: 5,
	},
});

export default styles;
