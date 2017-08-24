import React, { PureComponent } from 'react'
import { TouchableOpacity, Image,View,StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import  ComposeScence from './compose/ComposeScence'
import  DiscoverScence  from './discover/DiscoverScence'
import  HomeScence from './home/HomeScence'
import  MessageScence from './message/MessageScence'
import ProfileScence from './profile/ProfileScence'
import TabBarItem from  '../widget/TabBarItem'
import  color from '../common/color'
import  TabBar from '../widget/WeiBoTabbar'
const  Tab =  TabNavigator(
    {
        Home:{
            screen: HomeScence,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '微博',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/tabbar_home.png')}
                        selectedImage={require('../img/tabbar/tabbar_home_selected.png')}
                    />
                ),
                headerTitle:'微博'
            }),
        },
        Message:{
            screen: MessageScence,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/tabbar_message_center.png')}
                        selectedImage={require('../img/tabbar/tabbar_message_center_selected.png')}
                    />
                ),
                headerTitle:'消息'
            }),
        },
        Compose:{
            screen: ComposeScence,
            navigationOptions: ({ navigation }) => ({
                headerTitle:'发现',
                tabBarIcon: ({ focused, tintColor }) => (
                   <ComposeButton/>
                ),
            }),
        },
        Discover:{
            screen: DiscoverScence,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '发现',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/tabbar_discover.png')}
                        selectedImage={require('../img/tabbar/tabbar_discover_selected.png')}
                    />
                ),
                headerTitle:'发现'
            }),
        },
        Profile:{
            screen: ProfileScence,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/tabbar/tabbar_profile.png')}
                        selectedImage={require('../img/tabbar/tabbar_profile_selected.png')}
                    />
                ),
                headerTitle:'我'
            }),
        },
    },{
        tabBarComponent: TabBar,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: 'gray',
            style: { backgroundColor: '#ffffff' },
            showLabel:true
        },
    }
)

const  ComposeButton = ({onPress})=> {
    //这里用一个touch包装下，当点击的时候，tab goToIndex不会再响应
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image style={{width:80,height:35,justifyContent:'center', alignItems:"center"}} source={require('../img/tabbar/tabbar_compose_button.png')}>
                <Image style={{width:25,height:25}} source={require('../img/tabbar/tabbar_add.png')}/>
            </Image>
        </TouchableOpacity>
    )
}

const  Navi = StackNavigator(
    {
        Tab:{screen:Tab}
    },
    {
        navigationOptions:{
            headerBackTitle: null,
            headerTintColor: 'orange',
            headerTitleStyle:{color:'black'},
            showIcon: true,
        }
    }

)

export  default  Navi