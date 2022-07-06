import React from "react";
import { View, Image, Text } from 'react-native'
import { Avatar } from "../Avatar";
import { styles } from "./styles";


export function Profile(){
    return (
        <View style={styles.conitainer}>

            <Avatar urlImage="https://github.com/JPeeeeee.png"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        João
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}