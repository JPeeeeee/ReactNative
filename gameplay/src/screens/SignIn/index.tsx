import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar} from 'react-native';

import { style } from './styles'
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){
    return(
        <View style={style.container}>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Image 
                resizeMode='stretch'
                source={IllustrationImg} 
                style={style.image}
             />

            <View style={style.content}>
                <Text style={style.title}>
                    Organize {`\n`}
                    suas jogatinas  {`\n`}
                    favoritas
                </Text>
                <Text style={style.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos {`\n`}
                </Text>

                <ButtonIcon 
                    title="Entrar com Dicord"
                    activeOpacity={.8}
                />
            </View>
        </View>
    )
}