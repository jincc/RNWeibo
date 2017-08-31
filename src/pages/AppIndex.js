import React, { PureComponent } from 'react'
import { TouchableOpacity, Image,View,StatusBar,StyleSheet } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import  ComposeScence from './compose/ComposeScence'
import  DiscoverScence  from './discover/DiscoverScence'
import  HomeScence from './home/HomeScence'
import  MessageScence from './message/MessageScence'
import ProfileScence from './profile/ProfileScence'
import TabBarItem from  '../widget/TabBarItem'
import  color from '../common/color'
import  ScrollableTabView from  'react-native-scrollable-tab-view'
import  TabBar from '../widget/WBTabbar'

const Maps = {
    tabTitles :['微博','消息','发现','我'],
    tabIcons:[require('../img/wbtab/tabbar_home.png'),
              require('../img/wbtab/tabbar_message_center.png'),
        require('../img/wbtab/tabbar_discover.png'),
        require('../img/wbtab/tabbar_profile.png')],
    tabSelectedIcon:[require('../img/wbtab/tabbar_home_selected.png'),
        require('../img/wbtab/tabbar_message_center_selected.png'),
        require('../img/wbtab/tabbar_discover_selected.png'),
        require('../img/wbtab/tabbar_profile_selected.png')]
}


class TabView extends  PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShowComposeView:false
        };
    }

    _renderTabbar = () => {
        return (
            <TabBar
                tabNames={Maps.tabTitles}
                tabIconNames={Maps.tabIcons}
                selectedTabIconNames={Maps.tabSelectedIcon}
                pressCompose={this._pressCompose}>
            </TabBar>
        )
    }
    _pressCompose = ()=>{
        this.setState({isShowComposeView:!this.state.isShowComposeView})
        console.log("presseds")
    }
    _onChangeTab = (i)=>{
        console.log(i)
    }
    _dismissComposeScence = () => {
        this.setState({isShowComposeView:false})
    }
    _triggerItemFunc = ()=> {
        this._dismissComposeScence()
    }
    render(){
        return (
          <View style={{flex:1}}>
            <ScrollableTabView locked={true}
                               scrollWithoutAnimation={true}
                               tabBarPosition='bottom'
                               onChangeTab={this._onChangeTab}
                               renderTabBar={this._renderTabbar}
            >
                <HomeNavi tabLabel='微博'/>
                <MessageNavi tabLabel="消息"/>
                <DiscoverNavi tabLabel="发现"/>
                <MineNavi tabLabel="我"/>
                <View/>
            </ScrollableTabView>
              {this.state.isShowComposeView && <ComposeScence triggerItemFunc={this._triggerItemFunc}
                                                              backAction={this._dismissComposeScence}/>}
          </View>
        )
    }
}


const stackConfig =   {
    navigationOptions: {
        headerBackTitle: null,
        headerTintColor: 'orange',
        headerTitleStyle: {color: 'black'},
        showIcon: true,
    }
}

const HomeNavi = StackNavigator(
    {Home:{screen:HomeScence}},stackConfig
)
const MessageNavi = StackNavigator(
    {Message:{screen:MessageScence}},stackConfig
)
const DiscoverNavi = StackNavigator(
    {Discover:{screen:DiscoverScence}},stackConfig
)
const MineNavi = StackNavigator(
    {Mine:{screen:ProfileScence}},stackConfig
)


export  default   TabView
