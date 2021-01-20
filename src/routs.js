import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './components/screens/Splash';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import DashboardUser from './components/layouts/DashboardUser';

const RootStack = createStackNavigator({
        Splash: {screen: Splash,
                            navigationOptions: ({navigation}) => ({
                            headerShown: false
                            })},
          Home: {screen: Home,
                    navigationOptions: ({navigation}) => ({
                    headerShown: false
                    })},
          Login: {screen: Login,
            navigationOptions: ({navigation}) => ({
            headerShown: false
             })},
          Register: {screen: Register,
          navigationOptions: ({navigation}) => ({
          headerShown: false
                      })},
           DashboardUser: {screen: DashboardUser,
                  navigationOptions: ({navigation}) => ({
                  headerShown: false
                              })},
    },

    {
        initialRouteName: 'Splash',
    },
    {
        defaultNavigationOptions: {headerShown: false}
    }
);
export default createAppContainer(RootStack);
//
// import { enableScreens } from 'react-native-screens';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
//
// enableScreens();
// const Stack = createNativeStackNavigator();
//
// function MyStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Splash" component={Splash} />
//             {/*<Stack.Screen name="Notifications" component={Notifications} />*/}
//             {/*<Stack.Screen name="Profile" component={Profile} />*/}
//             {/*<Stack.Screen name="Settings" component={Settings} />*/}
//         </Stack.Navigator>
//     );
// }
