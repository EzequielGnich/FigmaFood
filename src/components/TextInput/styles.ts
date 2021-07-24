import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
	inputContainer: ViewStyle;
	inputContainerErrorStyle: ViewStyle;
	inputStyle: any;
	errorStyle: TextStyle;
	labelStyle: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	inputContainer: { paddingHorizontal: 20 },
	inputStyle: {
		paddingHorizontal: 20,
		borderRadius: 15,
		borderWidth: 1,
		height: 50,
		backgroundColor: '#FFF',
	},
	errorStyle: {
		borderColor: '#FE554A',
	},
	inputContainerErrorStyle: {
		borderColor: '#FE554A',
	},
	labelStyle: { paddingHorizontal: 20, marginVertical: 10, fontSize: 12 },
});

export default styles;
