import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Image extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image 
                    style={{width: 250, height: 250}}
                    source={{uri: 'https://bisniswisata.co.id/wp-content/uploads/2019/01/airplane-flight-sunset.jpg'}}
                />
            </View>

        )
    }
}

export default Image;
