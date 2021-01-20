import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    Alert,
    Image,
    Text,
    StatusBar,
} from 'react-native';
export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }

    componentDidMount() {
        this.animate();
        this.splash();
    }
    splash() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 6000);
    }

    animate() {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver:false
            });
        };
        Animated.sequence([
            createAnimation(this.animatedValue1, 600, Easing.ease),
            createAnimation(this.animatedValue2, 800, Easing.ease),
            createAnimation(this.animatedValue3, 800, Easing.ease),

        ]).start();
    }

    render() {
        const scale = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [0.1, 1],
        });
        const opacity = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const introtext = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 50],
        });

        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           barStyle="light-content"/>
                <View style={{
                    flex: 3, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                </View>
                <View style={{
                    flex: 2, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Animated.View style={{transform: [{scale: scale}]}}>

                            <Image style={{width: 135, height: 190}}
                                   source={require('../../../assets/images/logo.png')}
                            />

                    </Animated.View>
                </View>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                </View>



                <View style={{
                    flex: 4, justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Animated.View style={{bottom: introtext, marginTop:10}}>
                        <Text style={{color:'#535456',fontSize:24,alignSelf:'center',fontFamily:"Mj Tunisia Bd"}}>فروشگاه اینترنتی به قیمت</Text>
                    </Animated.View>

                    <Animated.View style={{opacity}}>
                        <Text style={styles.textversion}>نسخه 1.0.0</Text>
                    </Animated.View>
                </View>
                <View style={{}}>

                    <View style={{width:'100%',height:50,borderTopRightRadius:100,borderTopLeftRadius:100,backgroundColor:'#fff'}}>
                        <Animated.View style={{opacity}}>
                            <Text style={{fontSize: 14, color: '#535456',marginTop:10,justifyContent:'space-between',alignSelf:'center', fontFamily:"Kalameh_Bold"}}>طراحی و پیاده سازی
                                شرکت دانش بنیان آرکا</Text>
                        </Animated.View>
                    </View>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textContainer: {
        // marginTop: 450,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'black',
        // opacity:0.5,
    },
    text: {
        marginTop: 5,
        fontSize: 60,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        // fontFamily: 'GreatVibes-Regular',
        fontFamily: 'Far_Aref',
    },
    textversion: {
        fontSize: 12,
        marginTop: 50,
        color: '#fff',
        // fontFamily: 'GreatVibes-Regular',
        fontFamily: 'IRANSansMobile(FaNum)',

    },
});
