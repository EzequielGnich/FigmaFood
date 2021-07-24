import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../../Types/IStyle';
import TextInput from '../../../components/TextInput';

interface IProps extends IThemeStyle {}

const Create: React.FC<IProps> = props => {
	const { colors } = props.theme;
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<TextInput label="Email Address" placeholder="Enter email" />
			<TextInput label="Password" placeholder="Enter password" />
			<TextInput label="Confirm Password" placeholder="Confirm password" />
		</View>
	);
};

export default withTheme(Create);
