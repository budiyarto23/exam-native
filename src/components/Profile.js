import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { logoutUser } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'My Profile',
    };

    state = { email: '' }
    
    componentDidMount() {
        console.log(this.props.user)
        if (this.props.user) {  
            if(this.props.user.user) {
                this.setState({ email: this.props.user.user.email });
            }
            else {
                this.setState({ email: this.props.user.email });
            }
        }
    }

    onCaption = (text) => {
        this.props.inputCaption(text);
    }

    onUrl = (text) => {
        this.props.inputUrl(text);
    }

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    onButtonPress = () => {
        const { caption, url } = this.props;
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: this.state.email, style: { color: '#fff' } }}
                />
                <Card>
                    <CardSection>
                        <Input
                            label="Caption"
                            placeholder="your caption"
                            onChangeText={this.onEmailChange}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Image"
                            placeholder="Image URL"
                            onChangeText={this.onEmailChange}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.logOut}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state.auth;

    return { user };
};

export default connect(mapStateToProps, { logoutUser })(Profile);
