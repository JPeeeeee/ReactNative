import React from "react";
import { Image, View } from "react-native";
import { theme } from "../../../global/styles/theme";
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';


type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props ){
    const { secondary50, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary100]}
        >
            <Image 
                source={{uri: urlImage}}
                style={styles.image}
            />
        </LinearGradient>
    )
}