import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.background
    },

    content: {
        marginTop: -40,
        padding: 50
    },

    image: {
        width: '100%',
        height: 360
    },

    title: {
        color: theme.color.text,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    
    subtitle: {
        color: theme.color.text,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
})