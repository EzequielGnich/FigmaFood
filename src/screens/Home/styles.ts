import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: 70 },
	wrapperFilter: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingHorizontal: 20,
		marginTop: 10,
	},
	filterTitle: {
		fontWeight: '700',
		fontSize: 24,
	},
	flatList: { marginTop: 15 },
	wrapperCard: { padding: 20 },
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerTitle: { fontWeight: '700' },
});

export default styles;
