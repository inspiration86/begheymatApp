import React, {Component} from 'react';
import {View} from "react-native";
import {Switch, Appbar} from 'react-native-paper';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Appbar.Header  style={{backgroundColor:'#fff',marginTop:23}}>
                    <Appbar.Content
                        titleStyle={{
                            color: '#d41d2a',
                            fontFamily: 'Mj Tunisia Bd',
                            fontSize: 22,
                            textAlign:'center',
                        }}
                        title={this.props.title}/>
                        <Appbar.Action  style={{    justifyContent: 'flex-end', alignItems: 'flex-end',marginTop:-10,marginRight:10}} color={'#d41d2a'}
                                       size={30} icon={'menu'} onPress={this.props.onBackPress} />
                </Appbar.Header>
            </View>

        );
    }
}
