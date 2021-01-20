import {Image, View, Button, StyleSheet, ScrollView, Text, ImageBackground, StatusBar} from "react-native";
import {createDrawerNavigator, DrawerItems,DrawerActions} from 'react-navigation-drawer';
import {createAppContainer,} from 'react-navigation';
import React from "react";
import { Divider } from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
     faHome,
    faSign,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import {Body, Footer, Header, Left, Right} from "native-base";
import Home from '../screens/Home';
import BottomMenu from '../screens/BottomMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomDrawerComponent = props => (
    <View style={{flex: 1, backgroundColor: '#fff',}}>
      <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                               backgroundColor={'#535456'}
                               barStyle="light-content" />
        <Header style={styles.container}>
            <View style={{marginLeft:150,marginTop:50}}>
                <Icon
                  // onPress={this.props.navigation.closeDrawer()}
                    name='bars'
                    color='#d41d2a'
                    size={25} />
            </View>
        </Header>

            <View style={{backgroundColor:'#fff',flex:1}}>
                <ScrollView>
                <DrawerItems {...props} />
                </ScrollView>
            </View>

        <Footer style={styles.containerfooter}>
            <View style={{flexDirection: 'row-reverse', flex: 1,paddingHorizontal:10}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end',marginHorizontal:20}}>
                    <FontAwesomeIcon color={'#d41d2a'} icon={faSignOutAlt} style={styles.containericon}/>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={styles.textMenu}>خروج</Text>
                </View>
            </View>
        </Footer>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#fff',
    },
    containerfooter: {
    backgroundColor: '#fff',
    },
    viewMenu:{flex: 1, flexDirection: 'row',backgroundColor:'#fff',height:55,justifyContent:'center',alignItems:'center'},
    textMenu:{fontFamily:'Dana-FaNum-Bold',fontSize: 16, color: '#535456',textAlign:'right',marginRight:30}
});

const CustomerMyDrawerNavigator = createDrawerNavigator({
        'صفحه اصلی': {
            screen: BottomMenu,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>صفحه اصلی</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <FontAwesomeIcon icon={faHome} size={25} style={{color: '#d41d2a'}}/>
                        </View>
                        <Divider/>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'لیست': {
            screen: Home,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={styles.viewMenu}>
                        <View style={{flex: 9}}>
                            <Text style={styles.textMenu}>پروفایل</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon
                                name='user-o'
                                color='#d41d2a'
                                size={28}  style={{marginRight:15}}/>
                        </View>
                    </View>
                ),
            },
               contentOptions: {
                activeTintColor: '#fff',
            }
        },

    },
    {
        drawerPosition: 'right',
        drawerWidth: 240,
        initialRouteName:'صفحه اصلی',
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#fff',
            activeBackgroundColor: '#fff',
            inactiveBackgroundColor: '#fff',
            itemsContainerStyle: {
                backgroundColor:'#fff',
              //  opacity:0.8
            },
        },
    });
export default createAppContainer(CustomerMyDrawerNavigator);
