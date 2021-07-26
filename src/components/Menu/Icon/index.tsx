import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
	handleClick: () => void;
	iconName: string;
	size: number;
	color: string;
}

const Icon: React.FC<IProps> = ({ handleClick, iconName, size, color }) => {
	return (
		<TouchableOpacity
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
			onPress={handleClick}>
			<IconMC name={iconName} size={size} color={color} />
		</TouchableOpacity>
	);
};

export default Icon;
