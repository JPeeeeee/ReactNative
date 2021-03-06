import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    conitainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    user: {
        flexDirection: 'row'
    },

    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },

    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },

    message: {
        fontFamily: theme.fonts.text500,
        fontSize: 12, 
        color: theme.colors.highlight
    }
})