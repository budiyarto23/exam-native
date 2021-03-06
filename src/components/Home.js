import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllPost } from '../actions';
import ImageDetail from './ImageDetail';

class HomePage extends Component{

    static navigationOptions = {
        drawerLabel: 'Homepage'
    };

    componentDidMount() {
        this.props.getAllPost();
        
    }

    renderPost = () => {
            const listJSX = this.props.postlist.map((item) => {
                return (
                    <ImageDetail key={item.uid} post={item} />
                );
            });
            return listJSX;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header 
                    centerComponent={{text: 'InstaFreak', style: { color: '#fff', fontSize:27 }}}
                />
                <ScrollView style={{flex: 1}}>
                    {this.renderPost()}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.post); 
    const postlist = _.map(state.post, (val,uid) => {
        return { ...val, uid }
    });
    console.log(postlist);

    return {postlist};
};

export default connect(mapStateToProps, { getAllPost })(HomePage);