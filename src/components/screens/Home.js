import React, {Component} from 'react';
import {
    StyleSheet,
    View,FlatList,
    Image, ScrollView, TouchableOpacity, StatusBar, Text,Dimensions,Platform
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import {SliderBox} from 'react-native-image-slider-box';
import { SearchBar} from 'react-native-elements';
import {Avatar, Card, IconButton, Title, Paragraph, Appbar, Switch,Button } from 'react-native-paper';
import { CardViewWithImage } from "react-native-simple-card-view";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component {
    constructor(props) {
        super(props);
           this.state = {
                  search: '',
                  SliderUrl: [
                        require('../../../assets/images/banner1.png'),
                        require('../../../assets/images/banner2.png'),
                        require('../../../assets/images/banner3.png'),
                    ],
                     CategoryProducts: [
                                    {
                                        id: 1,
                                        title: 'دسر',
                                    },
                                    {
                                        id: 2,
                                        title: 'شیرینی',
                                    },
                                    {
                                        id: 3,
                                        title: 'نان',


                                    },
                                    {
                                        id: 4,
                                        title: 'حلوا',
                                    },
                                    {
                                        id: 5,
                                        title: 'کیک',
                                    },
                                    {
                                        id: 6,
                                        title: 'محلی',
                                    },
                                    {
                                        id: 7,
                                        title: 'سایر',
                                    },
                                ],
                                     BestProducts: [
                                                                                {
                                                                                    id: 1,
                                                                                    title: 'گوشی سامسونگ A10',
                                                                                    name: "موبایل فرهادی",
                                                                                    subCategory:"گوشی موبایل",
                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                    price: '20000'
                                                                                },
                                                                                {
                                                                                    id: 2,
                                                                                    title: 'گوشی سامسونگ A10',
                                                                                    name: "موبایل فرهادی",
                                                                                    subCategory:"گوشی موبایل",
                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                    price: '20000'

                                                                                },
                                                                                {
                                                                                    id: 3,
                                                                                    title: 'گوشی سامسونگ A10',
                                                                                    name: "موبایل فرهادی",
                                                                                    subCategory:"گوشی موبایل",
                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                    price: '20000'

                                                                                },
                                                                                {
                                                                                    id: 4,
                                                                                    title: 'گوشی سامسونگ A10',
                                                                                    name: "موبایل فرهادی",
                                                                                    subCategory:"گوشی موبایل",
                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                    price: '20000'

                                                                                },

                                                                            ],
                                Products: [
                                                      {
                                                                                                                                    id: 1,
                                                                                                                                    title: 'گوشی سامسونگ A10',
                                                                                                                                    name: "موبایل فرهادی",
                                                                                                                                    subCategory:"گوشی موبایل",
                                                                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                                                                    price: '20000'
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    id: 2,
                                                                                                                                    title: 'گوشی سامسونگ A10',
                                                                                                                                    name: "موبایل فرهادی",
                                                                                                                                    subCategory:"گوشی موبایل",
                                                                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                                                                    price: '20000'

                                                                                                                                },
                                                                                                                                {
                                                                                                                                    id: 3,
                                                                                                                                    title: 'گوشی سامسونگ A10',
                                                                                                                                    name: "موبایل فرهادی",
                                                                                                                                    subCategory:"گوشی موبایل",
                                                                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                                                                    price: '20000'

                                                                                                                                },
                                                                                                                                {
                                                                                                                                    id: 4,
                                                                                                                                    title: 'گوشی سامسونگ A10',
                                                                                                                                    name: "موبایل فرهادی",
                                                                                                                                    subCategory:"گوشی موبایل",
                                                                                                                                    image: require('../../../assets/images/a10.png'),
                                                                                                                                    price: '20000'

                                                                                                                                },

                                                                                                                            ]
                                                                                                                            };
  updateSearch = (search) => {
    this.setState({ search });
  };
  }
    render() {
    const { search } = this.state;
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

        return (
       <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
         <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                                  backgroundColor={'#535456'}
                                  barStyle="light-content" />
                                     <SearchBar
                                          placeholder="جستجوی کالا"
                                          onChangeText={this.updateSearch}
                                          value={search}
                                        />
                                          <ScrollView>
                    <SliderBox autoplay circleLoop
                                                           images={this.state.SliderUrl} style={{width: '100%', height: 200}}
                                                           position={this.state.position}
                                                           onPositionChanged={position => this.setState({position})}
                                                           dotColor="#d41d2a"
                                                           resizeMethod={'resize'}
                                                           resizeMode={'cover'}
                                                           inactiveDotColor="#fff"
                                                           dotStyle={{
                                                               width: 10,
                                                               height: 10,
                                                               borderRadius: 10,
                                                               marginHorizontal: 2,
                                                               padding: 0,
                                                               margin: 0,
                                                           }}
                                                           paginationBoxStyle={{
                                                               position: "absolute",
                                                               bottom: 0,
                                                               padding: 0,
                                                               alignItems: "center",
                                                               alignSelf: "center",
                                                               justifyContent: "center",
                                                               paddingVertical: 10,
                                                           }}

                                                />

                                                 <View style={{justifyContent: 'center', alignItems: 'center'}}>


                                                            </View>
   <View style={{
                            backgroundColor: '#fff',
                            padding:10,
                            marginTop: 5,
                            marginBottom: 7,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 17,
                                textAlign: 'center',
                                fontFamily: 'Dana-FaNum-Bold',
                                color: '#777',
                            }}>
                               جدیدترین تخفیف ها
                            </Text>
                        </View>
                           <FlatList
                                                        showsHorizontalScrollIndicator={false}
                                                        horizontal
                                                        inverted
                                                        contentContainerStyle={{
                                                            paddingStart: -1,
                                                            paddingEnd: 5,
                                                            marginTop: 2
                                                        }}
                                                        data={this.state.BestProducts}
                                                        keyExtractor={(item) => {
                                                            return item.id;
                                                        }}
                                                        renderItem={({item,index}) => {
                                                            return (
    <CardViewWithImage
        width={160}
        content={'قیمت: ' + item.price+' تومان'}
        source={item.image}
        title={item.title}
        titleFontFamily={'Dana-FaNum-Bold'}
        titleFontSize={14}
        contentFontSize={11}
        contentFontFamily={'Dana-FaNum-Bold'}
        imageWidth={ 160 }
        imageHeight={ 100 }
        onPress={() => console.log("CardViewWithImage Clicked!")}
        roundedImage={ true }
        roundedImageValue={ 2 }
        imageMargin={ {top: 10} }
    />


                                    )
                                }
                                }
                            />



  <Card>
    <Card.Title title="گوشی" subtitle="سامسونگ" justifyContent='center' right={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
                         <View style={{
                                                    backgroundColor: '#fff',
                                                    padding:10,
                                                    marginTop: 5,
                                                    marginBottom: 7,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        fontSize: 17,
                                                        textAlign: 'center',
                                                        fontFamily: 'Dana-FaNum-Bold',
                                                        color: '#777',
                                                    }}>
                                                      پرفروش ترین محصولات
                                                    </Text>
                                                </View>

                                       <FlatList
                                                                                              showsHorizontalScrollIndicator={false}
                                                                                              horizontal
                                                                                              inverted
                                                                                              contentContainerStyle={{
                                                                                                  paddingStart: -1,
                                                                                                  paddingEnd: 5,
                                                                                                  marginTop: 2
                                                                                              }}
                                                                                              data={this.state.BestProducts}
                                                                                              keyExtractor={(item) => {
                                                                                                  return item.id;
                                                                                              }}
                                                                                              renderItem={({item,index}) => {
                                                                                                  return (
                                          <TouchableOpacity activeOpacity={0.5}>
                                                                                                                        <View style={{backgroundColor:'#fff',margin:5}}>
    <Icon
                                                                                                                                              style={{marginTop:15,marginLeft:20}}
                                                                                                                                              name='heart-o'
                                                                                                                                              size={18}
                                                                                                                                              color='#EF2B2F'
                                                                                                                                              />
                                                                                                                        <Image style={{width:90,height:90,alignSelf:'center'}} source={item.image}/>
                                                                                                                          <View style={{flex:1}}>
                                                                                                                          <View style={{flex:5,marginTop:5}}>
                                                                                                                            <Text  style={styles.name}>{item.title}</Text>
                                                                                                                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                                                                                               <Text  style={{marginLeft:25}}>{item.name}</Text>
                                                                                                                            <Text  >{item.subCategory}</Text>
                                                                                                                           </View>
                                                                                                                          <View style={{flexDirection:'row',flex:1}}>
     <Icon
                                                                                                                                              style={{marginLeft:15,flex:1}}
                                                                                                                                              name='shopping-cart'
                                                                                                                                              size={18}
                                                                                                                                              color='#EF2B2F'
                                                                                                                                              />
                                                                                                                           <Text style={{flex:5}}>{'قیمت: ' + item.price+' تومان'}</Text>
                                                                                                                           </View>
                                                                                                                           </View>
                                                                                                                           </View>
                                                                                                                        </View>
                                                                                                                      </TouchableOpacity>
                                                                          )
                                                                      }
                                                                      }
                                                                  />




                          <View style={{
                                                    backgroundColor: '#fff',
                                                    padding:10,
                                                    marginTop: 5,
                                                    marginBottom: 7,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        fontSize: 17,
                                                        textAlign: 'center',
                                                        fontFamily: 'Dana-FaNum-Bold',
                                                        color: '#777',


                                                    }}>
                                                       جدیدترین  محصولات
                                                    </Text>
                                                </View>
          <FlatList
                                                                            style={styles.userList}
                                                                            columnWrapperStyle={styles.listContainer}
                                                                            data={this.state.Products}
                                                                            keyExtractor= {(item) => {
                                                                              return item.id;
                                                                            }}
                                                                            renderItem={({item}) => {
                                                                            return (
                                                                              <TouchableOpacity activeOpacity={0.5}>
                                                                              <View  style={styles.box}>
                                                                                <View style={{flexDirection:'row',flex:1}}>
                                                                                <View>
                                                                                                  <TouchableOpacity  style={{flex:1}} onPress={()=>this.props.navigation.navigate('LawDetail')}>
                                                                                                   <Icon
                                                                                                    style={{marginTop:15,marginLeft:20}}
                                                                                                    name='heart-o'
                                                                                                    size={18}
                                                                                                    color='#EF2B2F'
                                                                                                    />
                                                                                                    </TouchableOpacity >
                                                                                                                                                                                                      <TouchableOpacity  style={{flex:1}} onPress={()=>this.props.navigation.navigate('LawDetail')}>

                                                                                                   <Icon
                                                                                                    style={{marginTop:15,marginLeft:20}}
                                                                                                    name='shopping-cart'
                                                                                                    size={20}
                                                                                                    color='#EF2B2F'
                                                                                                    />
                                                                                                    </TouchableOpacity >
                                                                                                    </View>
                                                                                <View style={{flex:5,marginTop:10}}>
                                                                                  <Text  style={styles.name}>{item.title}</Text>
                                                                                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                                                     <Text  style={[styles.catShop,{marginLeft:25}]}>{item.name}</Text>
                                                                                  <Text  style={styles.catShop}>{item.subCategory}</Text>
                                                                                 </View>
                                                                                 <Text  style={styles.name}>{'قیمت: ' + item.price+' تومان'}</Text>
                                                                                 </View>
                                                                                <Image style={styles.image} source={item.image}/>
                                                                                 </View>
                                                                              </View>
                                                                            </TouchableOpacity>
                                                                            )}}/>



</ScrollView>

                                  </View>
                    );
                    }
                    }
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DCDCDC',
        flex: 1
    },
    productList: {
        padding: 10,
    },

    image: {
      width: 90,
      height:90,
      borderRadius:5,
    },
    box: {
        marginHorizontal:15,
        borderRadius:5,
      marginVertical:5,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    catShop: {
          fontSize:10,
          fontFamily:"Dana-FaNum-Bold",
          color: '#777',

        },
    name: {
      fontSize:12,
      fontFamily:"Dana-FaNum-Bold",
      color: '#444',
    },


  });
