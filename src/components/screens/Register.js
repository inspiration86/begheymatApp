import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, StatusBar, ImageBackground} from 'react-native';
import {Button} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mobile: '',
      password: '',
    };
  }
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
         <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                                   backgroundColor={'#535456'}
                                   barStyle="light-content" />
            <View style={{flex:6,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:135,height:190}}
                   source={require('../../../assets/images/logo.png')}
            />
          </View>
          <View style={{flex:3,marginHorizontal:35}}>
              <Input
                  keyboardType="phone-pad"
                  onChangeText={mobail => this.setState({mobail})}
                  placeholder='شماره همراه خود را وارد نمایید'
                  inputStyle={{textAlign:'center',fontFamily:'Dana-FaNum-Medium',fontSize:14}}
                  placeholderTextColor='#999999'
                  maxLength={11}
                  leftIcon={
                    <Icon
                        style={{marginLeft:10}}
                        name='mobile'
                        size={30}
                        color='#EF2B2F'
                    />
                  }
              />
              <Input secureTextEntry={true}
                     onChangeText={password => this.setState({password})}
                     inputStyle={{paddingHorizontal:10,textAlign:'center',fontFamily:'Dana-FaNum-Medium',fontSize:14}}
                     placeholder='رمز عبور خود را وارد نمایید'
                     placeholderTextColor='#999999'
                     leftIcon={
                       <Icon
                           style={{marginLeft:10}}
                           name='lock'
                           size={24}
                           color='#EF2B2F'
                       />
                     }
              />
          </View>
          <View style={{flex:4,marginTop:10}}>
            <View style={{marginHorizontal:40}}>
              <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.props.navigation.navigate('DashboardCustomer')}>
                <Button style={{marginTop:30,backgroundColor:'#d41d2a',borderRadius:5,height:45,justifyContent:'center',alignItems:'center',
                   }}  mode="contained">
                  <Text style={{fontSize: 20,fontFamily: 'Dana-FaNum-Bold'}}>ثبت نام</Text>
                </Button>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Login')}
                  style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize: 16,fontFamily: 'Mj Tunisia Bd',color:'#535456'}}>قبلا ثبت نام کرده اید؟</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>

    );
  }
}
export default Register;
