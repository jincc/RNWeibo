import  React,{Component,PropTypes} from  'react'
import  {View, Text,Button,TouchableOpacity,StyleSheet,Image,ScrollView,Animated} from  'react-native'
import  NavigationItem  from '../../widget/NavigationItem'
import  screen from  '../../common/screen'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import  ComposeMenuView from './ComposeMenuView'
class  ComposeScence extends  Component {

    alphaAni:any
    menuView:any

    static  propTypes = {
        backAction:PropTypes.func,
        triggerItemFunc:PropTypes.func

    }
    _triggerItemFunc = ()=> {
        this.props.triggerItemFunc()
    }
    _closeScence = ()=> {

        Animated.timing(this.alphaAni,
            {
                duration:400,
                toValue:0
            }).start(()=>{
            this.props.backAction()
        })
        this.menuView.dismiss()
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.alphaAni = new Animated.Value(0)
    }
    componentDidMount(){
        Animated.timing(this.alphaAni,
            {
                duration:400,
                toValue:1
            }).start()

    }

    render(){
        return (
            <Animated.View style={[styles.container,{opacity:this.alphaAni}]}>
                <View style={{flex:1,alignItems:"center"}}
                                  activeOpacity={1}
                    onPress={this.props.backAction}>
                  <Image style={styles.slogen} source={require('../../img/tabbar/compose_slogan.png')}></Image>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                        <ComposeMenuView ref={(v)=> this.menuView=v}
                                         triggerItemFunc={this._triggerItemFunc}/>
                    </View>

                  <View style={styles.bottomContainer}>
                      <NavigationItem   iconStyle={{transform:[
                          {
                              rotate:this.alphaAni.interpolate({
                                  inputRange:[0,1],
                                  outputRange:['0deg','90deg']
                              })
                          }]}}
                                       icon={require('../../img/tabbar/tabbar_compose_background_icon_close.png')}
                                      onPress={this._closeScence}>
                      </NavigationItem>
                  </View>
                </View>
            </Animated.View>
        )
    }

}



const  styles = StyleSheet.create({
    container:{
        position: 'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F7F7F7',
        flex:1
    },
    slogen:{
        width:154,height:48,
        marginTop:100
    },
    bottomContainer:{
        backgroundColor:'white',
        height:44,
        width:screen.width,
        // position: 'absolute',
        // left:0,
        // right:0,
        // bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },
    scrollContaienr:{
        height:screen.width / 4 * 2 ,
        width:screen.width,
        position: 'absolute',
        bottom:104
    }
})
export  default  ComposeScence