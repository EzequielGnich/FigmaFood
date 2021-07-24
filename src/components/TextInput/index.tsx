// import React from 'react';
// import { View, Text, TextInput } from 'react-native';
// import { withTheme } from 'react-native-paper';
// import { IThemeStyle } from '../../Types/IStyle';

// import styles from './styles';

// interface IProps extends IThemeStyle {
// 	label: string;
// 	placeholder: string;
// }

// const InputText: React.FC<IProps> = ({ placeholder, label, ...props }) => {
// 	const { colors } = props.theme;

// 	return (
// 		<View style={styles.inputContainer}>
// 			<Text style={{ paddingHorizontal: 20, marginVertical: 10 }}>{label}</Text>
// 			<TextInput
// 				placeholder={placeholder}
// 				placeholderTextColor={colors.darkGray}
// 				style={[styles.textInputStyle, { borderColor: colors.lightGray }]}
// 				{...props}
// 			/>
// 		</View>
// 	);
// };

// export default withTheme(InputText);

import React, { ReactNode } from 'react';
import {
	Text,
	View,
	TextInput as TextInputRN,
	TextInputProps,
	TextStyle,
	ViewStyle,
	TextProps,
} from 'react-native';

import {
	TextInputMask,
	TextInputMaskTypeProp,
	TextInputMaskOptionProp,
} from 'react-native-masked-text';
import { withTheme } from 'react-native-paper';
import { IThemeStyle } from '../../Types/IStyle';

import styles from './styles';

interface Props extends TextInputProps, IThemeStyle {
	id?: string;
	label?: ReactNode;
	labelProps?: Readonly<TextProps> & Readonly<{ children?: ReactNode }>;
	noneSelectedText?: string;
	handleChange?: Function;
	onClear?: Function;
	labelStyle?: TextStyle;
	inputContainerStyle?: ViewStyle;
	inputOuterContainerStyle?: ViewStyle;
	inputStyle?: TextStyle;
	rootStyle?: ViewStyle | ViewStyle[];
	select?: boolean;
	enableMask?: boolean;
	data?: any[];
	errors?: any;
	errorStyle?: TextStyle;
	type?: TextInputMaskTypeProp;
	options?: TextInputMaskOptionProp;
	loading?: boolean;
	showClearButton?: boolean;
	rightIconSize?: number;
}

const TextInput = ({
	id,
	label,
	labelStyle,
	inputContainerStyle,
	inputOuterContainerStyle,
	inputStyle,
	rootStyle,
	handleChange,
	select,
	data,
	value,
	noneSelectedText,
	errors,
	errorStyle,
	enableMask,
	type,
	loading,
	options,
	onClear,
	showClearButton,
	labelProps = {},
	theme,
	...rest
}: Props) => {
	const onChangeText = (value: string) => {
		handleChange && handleChange(id, value);
	};

	const { colors } = theme;

	const hasError = () => Boolean(errors && errors[id]);

	const renderError = () => {
		if (hasError)
			return (
				<Text style={[styles.errorStyle, errorStyle]}>
					{errors && errors[id]}
				</Text>
			);

		return null;
	};

	let labelComponent: ReactNode = label;

	if (typeof label === 'string') {
		labelComponent = (
			<Text style={[styles.labelStyle, labelStyle]} {...labelProps}>
				{label}
			</Text>
		);
	}

	return (
		<View
			style={[styles.inputContainer, label ? {} : { height: 60 }, rootStyle]}>
			{labelComponent}

			<View
				style={[
					inputContainerStyle,
					hasError() ? styles.inputContainerErrorStyle : {},
				]}>
				<TextInputRN
					nativeID={id}
					style={[
						styles.inputStyle,
						inputStyle,
						{ borderColor: colors.lightGray },
					]}
					onChangeText={onChangeText}
					value={value}
					allowFontScaling
					maxFontSizeMultiplier={1.8}
					{...rest}
				/>
			</View>
			{renderError()}
		</View>
	);
};

export default withTheme(TextInput);
