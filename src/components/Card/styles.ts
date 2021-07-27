import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: 200,
		height: 260,
		backgroundColor: '#FFF',
		borderRadius: 50,
		padding: 20,
		flexDirection: 'column',
		justifyContent: 'space-between',
		elevation: 10,
		shadowColor: 'rgba(170, 170, 170, 0.8)',
		marginRight: 20,
	},
	imageContainer: { flex: 1, alignItems: 'center' },
	image: { width: 100, height: 100 },
	bodyContainer: { marginVertical: 10 },
	title: {
		fontWeight: '700',
		fontSize: 15,
		marginBottom: 5,
	},
	description: { fontSize: 12 },
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 5,
	},
	wrapperStars: { flexDirection: 'row', alignItems: 'center' },
});

export default styles;
