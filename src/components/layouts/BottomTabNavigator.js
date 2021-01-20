import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faAddressBook,
    faBell,
    faCalculator,
    faChartPie,
    faHelicopter,
    faHome,
    faMagnet, faSearch, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
 class BottomTabNavigator extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <AppContainer screenProps={this.props.navigation} />;
    }
}
const AppMaterialTopTabNavigator = createMaterialBottomTabNavigator(
    {
        'جستجوی پیشرفته':{screen:Home,
            navigationOptions:{
                tabBarLabel: 'جستجوی محصولات',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <FontAwesomeIcon icon={faSearch} size={20} style={{color: tintColor}}/>

                    </View>),
            }
        },
        // 'گزارشگیری':{screen:RootStack,
            'گزارشگیری':{screen:Login,
            navigationOptions:{
                tabBarLabel:'دسته بندی محصولات',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <FontAwesomeIcon icon={faSearch} size={20} style={{color: tintColor}}/>
                    </View>),
            }
        },
        'صفحه اصلی':{screen:Home,
            navigationOptions:{
                tabBarLabel:'به قیمت',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                      <FontAwesomeIcon icon={faHome} size={20} style={{color: tintColor}}/>


                    </View>),
            }
        },

    },
    {
        initialRouteName: 'صفحه اصلی',
        activeColor: '#d41d2a',
        inactiveTintColor: 'grey',
        barStyle: { backgroundColor: '#fff'},
        swipeEnabled: true,
        animationEnabled: true,
        shifting:false,
        tabBarLabel:{titleStyle:{fontFamily:'Lalezar-Regular',fontSize:30}},
    },
);

const AppContainer = createAppContainer(AppMaterialTopTabNavigator);
export default BottomTabNavigator;
