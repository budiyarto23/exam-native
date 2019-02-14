import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { postingUpdate } from '../actions'
import { CardSection, Input } from './common';

class PostImage extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Caption"
                        placeholder="Caption"
                        value={this.props.caption}
                        onChangeText={ text => this.props.postingUpdate('caption', text)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Image"
                        placeholder="Image URL"
                        value={this.props.link}
                        onChangeText={text => this.props.postingUpdate('link', text)}
                    />
                </CardSection>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { link, caption } = state.form;
    return { link, caption };
}

export default connect(mapStateToProps, { postingUpdate })(PostImage);