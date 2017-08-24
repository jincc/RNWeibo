import React, { PureComponent } from 'react'
import { View, Text, StyleSheet , Image,Animated} from 'react-native'
import screen from  '../common/screen'
import Button from '../widget/Button'
import  color from '../common/color'
export  default  class  VisitorView extends  PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rotation: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.rotate()
    }

    componentWillUnmount() {
        this.state.rotation.stopAnimation()
    }
    rotate(){
        this.state.rotation.setValue(0)
        let timing =  Animated.timing(this.state.rotation,
            {
                toValue:1,
                duration:20000
            })
        timing = Animated.loop(timing)
        timing.start()
    }

    render(){
        let rotateAni = this.state.rotation.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        })
        return (
         <View style={{flex:1}}>
             <View style={styles.container}>
                 <Animated.Image source={require('../img/visitor/visitordiscover_smallicon.png')}
                                 style={[styles.circle,{
                                     transform: [
                                         {rotateZ: this.state.rotation.interpolate({
                                             inputRange: [0,1],
                                             outputRange: ['0deg', '360deg'],
                                         })},
                                     ]}]}>
                 </Animated.Image>

                 <Image style={styles.mask} source={require('../img/visitor/visitordiscover_Mask.png')}></Image>
             </View>
             <View style={styles.container}>
                 <Image style={styles.house} source={require('../img/visitor/visitordiscover_house.png')}></Image>
                 <Text style={styles.tipLabel} >关注一些人，回这里看看有什么惊喜</Text>
                 <View style={styles.buttonContainer}>
                     <Button title='注册' style={{color:color.theme,fontSize:16}} containerStyle={{width:80,height:30,borderColor:color.border,borderWidth:1}}/>
                     <Button title='登录' style={{color:'black',fontSize:16}} containerStyle={{width:80,height:30,borderColor:color.border,borderWidth:1}}/>
                 </View>
             </View>
         </View>
        )
    }
}

const LabelWidth = screen.width * 0.5

const styles = StyleSheet.create({
    container:{
        left:0,
        right:0,
        top:0,
        bottom:0,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    house:{
        width:94,
        height:90,
        marginTop:-0
    },
    circle:{
        width:175,
        height:175,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-100
    },
    mask:{
        width:screen.width,
        height:375/420.0 * screen.width,
        position: 'absolute',
        top:0
    },
    tipLabel:{
        color:'gray',
        fontSize:16,
        width:LabelWidth,
        marginTop:30,
        textAlign:"center"
    },
    buttonContainer:{
        flexDirection:'row',alignItems:"center",justifyContent:'space-between',width:LabelWidth,
        marginTop:20
    }

})

