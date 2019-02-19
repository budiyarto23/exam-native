import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { Card, CardSection, Button } from './common';
import { logoutUser, postingCreate } from '../actions';
import PostImage from './PostImage';

class Profile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        
    };

    state = {
        text: this.props.user.email
    }

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    onButtonSavePress = () => {
        var data = {
                link: this.props.link, 
                caption: this.props.caption,
                email: this.props.user.email
        }
        this.props.postingCreate(data); 
    }

    render() {
        return (
            <View>
                <Header centerComponent={{text: this.state.text, style: { color: '#fff', fontSize: 16 }}}/>
                <Card>
                    <PostImage />
                    <CardSection>
                        <Button onPress={this.onButtonSavePress}>
                            Post
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.logOut}>
                            Log Out
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.auth.user,
        link: state.form.link,
        caption: state.post.caption
    }
}

export default connect(mapStateToProps, { logoutUser, postingCreate })(Profile);