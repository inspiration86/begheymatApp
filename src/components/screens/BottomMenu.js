import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Easing, StatusBar,
    FlatList, TouchableOpacity, Alert, Dimensions, ScrollView
} from 'react-native';
import BottomTabNavigator from '../layouts/BottomTabNavigator';
import { SafeAreaView } from 'react-navigation';
import Header from '../layouts/Header';
class BottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSwitch: null,
        }
    }


    toggleDrawer = () => {
        this.props.navigation.openDrawer(); // edit this according to drawer library
    }


    render() {
        return (
            <View style={{flex: 1}}>
                      <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                                               backgroundColor={'#535456'}
                                               barStyle="light-content" />
                      <Header title="فروشگاه به قیمت" onBackPress={() => {
                                this.props.navigation.goBack();
                            }}/>
               <BottomTabNavigator navigation={this.props.navaigation}/>
                </View>
        );
    }
}

export default BottomMenu;
