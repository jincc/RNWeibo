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
                /*
                 title - 可以作为头部标题 headerTitle ，或者Tab标题 tabBarLabel
                 header - 自定义的头部组件，使用该属性后系统的头部组件会消失
                 headerTitle - 头部的标题，即页面的标题
                 headerBackTitle - 返回标题，默认为 title
                 headerTruncatedBackTitle - 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为 “Back”
                 headerRight - 头部右边组件
                 headerLeft - 头部左边组件
                 headerStyle - 头部组件的样式
                 headerTitleStyle - 头部标题的样式
                 headerBackTitleStyle - 头部返回标题的样式
                 headerTintColor - 头部颜色
                 headerPressColorAndroid - Android 5.0 以上MD风格的波纹颜色
                 gesturesEnabled - 否能侧滑返回， iOS 默认 true ， Android 默认 false

                 */
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
                   <ComposeButton onPress={()=>{
                        //这里我想在tab
                   }}/>
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
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: 'gray',
            style: { backgroundColor: '#ffffff' },
            showLabel:true
        },
        /*
         tabBarComponent - Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
         TabBarTop - 在页面的顶部
         TabBarBottom - 在页面的底部
         tabBarPosition - Tab选项卡的位置，有 top 或 bottom 两个值
         swipeEnabled - 是否可以滑动切换Tab选项卡
         animationEnabled - 点击Tab选项卡切换界面是否需要动画
         lazy - 是否懒加载页面
         initialRouteName - 初始显示的Tab对应的页面路由名称
         order - 用路由名称数组来表示Tab选项卡的顺序，默认为路由配置顺序
         paths - 路径配置
         backBehavior - androd点击返回键时的处理，有 initialRoute 和 none 两个值
         initailRoute - 返回初始界面
         none - 退出
         tabBarOptions - Tab配置属性，用在 TabBarTop 和 TabBarBottom 时有些属性不一致：
         用于 TabBarTop 时：
         activeTintColor - 选中的文字颜色
         inactiveTintColor - 未选中的文字颜色
         showIcon - 是否显示图标，默认显示
         showLabel - 是否显示标签，默认显示
         upperCaseLabel - 是否使用大写字母，默认使用
         pressColor - android 5.0以上的MD风格波纹颜色
         pressOpacity - android 5.0以下或者iOS按下的透明度
         scrollEnabled - 是否可以滚动
         tabStyle - 单个Tab的样式
         indicatorStyle - 指示器的样式
         labelStyle - 标签的样式
         iconStyle - icon的样式
         style - 整个TabBar的样式
         用于 TabBarBottom 时：
         activeTintColor - 选中Tab的文字颜色
         activeBackgroundColor - 选中Tab的背景颜色
         inactiveTintColor - 未选中Tab的的文字颜色
         inactiveBackgroundColor - 未选中Tab的背景颜色
         showLabel - 是否显示标题，默认显示
         style - 整个TabBar的样式
         labelStyle - 标签的样式
         tabStyle - 单个Tab的样式

         */
    }
)

const  ComposeButton = ({onPress})=> {
    //这里用一个touch包装下，当点击的时候，tab goToIndex不会再响应
    // return (
    //     <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
    //         <Image style={{width:80,height:35,justifyContent:'center', alignItems:"center"}} source={require('../img/tabbar/tabbar_compose_button2.png')}>
    //             <Image style={{width:25,height:25}} source={require('../img/tabbar/tabbar_add.png')}/>
    //         </Image>
    //     </TouchableOpacity>
    // )
    return     <Image style={{width:60,height:45,justifyContent:'center', alignItems:"center"}} source={require('../img/tabbar/tabbar_compose_button.png')}>
        <Image style={{width:22,height:22}} source={require('../img/tabbar/tabbar_add.png')}/>
    </Image>
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
        /*
         initialRouteName - 导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个路由页面为初始显示页面
         initialRouteParams - 给初始路由的参数，在初始显示的页面中可以通过 this.props.navigation.state.params 来获取
         navigationOptions - 路由页面的配置选项，它会被 RouteConfigs 参数中的 navigationOptions 的对应属性覆盖。
         paths - 路由中设置的路径的覆盖映射配置
         mode - 页面跳转方式，有 card 和 modal 两种，默认为 card ：
         card - 原生系统默认的的跳转
         modal - 只针对iOS平台，模态跳转
         headerMode - 页面跳转时，头部的动画模式，有 float 、 screen 、 none 三种：
         float - 渐变，类似iOS的原生效果
         screen - 标题与屏幕一起淡入淡出
         none - 没有动画
         cardStyle - 为各个页面设置统一的样式，比如背景色，字体大小等
         transitionConfig - 配置页面跳转的动画，覆盖默认的动画效果
         onTransitionStart - 页面跳转动画即将开始时调用
         onTransitionEnd - 页面跳转动画一旦完成会马上调用

         */
    }

)

export  default  Navi