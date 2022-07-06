import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        height: 56,
        width: '100%',
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },

    iconWrapper: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#991F36'
    },

    icon: {
        height: 18,
        width: 24
    }
})