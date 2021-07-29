import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	productsContainer: {
		minWidth: 335,
		height: 115,

		backgroundColor: '#FFF',

		borderRadius: 30,
		paddingHorizontal: 10,
		marginBottom: 15,
		marginHorizontal: 20,

		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',

		elevation: 10,
		shadowColor: 'rgba(2, 32, 44, 0.5)',
	},
	wrapperImage: {
		elevation: 10,
		width: 80,
		height: 70,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
	image: { width: 70, height: 45, resizeMode: 'contain' },
	productName: { lineHeight: 22, fontSize: 14, fontWeight: '700' },
	productCategory: { lineHeight: 22, fontSize: 11 },
	productPrice: { lineHeight: 22, fontSize: 16 },
	container: { flexDirection: 'row', alignItems: 'center' },
	touchable: {
		width: 24,
		height: 24,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	actionsContainer: {
		position: 'absolute',
		flexDirection: 'row',
		top: 30,
		right: 50,
		zIndex: -1,
	},
	actionButton: {
		width: 40,
		height: 40,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DAFAE5',
		marginRight: 10,
	},
	buttonImage: { width: 25, height: 25, resizeMode: 'contain' },
});

export default styles;
