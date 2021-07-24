import { Dimensions, StyleSheet } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		width: ITEM_WIDTH,
		paddingBottom: 40,
	},
	image: {
		width: ITEM_WIDTH,
		height: 300,
		resizeMode: 'contain',
	},
});

export default styles;
