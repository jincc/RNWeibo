import  React,{PureComponent,PropTypes} from  'react'
import  {View,TouchableOpacity,StyleSheet,Image, Text,PanResponder,Animated} from  'react-native'
import  CollectionView from '../../widget/CollectionView'
import  screen from  '../../common/screen'


export  default  class  ComposeMenuView extends   PureComponent {

    static  propTypes = {
        triggerItemFunc:PropTypes.func
    }
    views  = []

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render(){
       return (
           <CollectionView datas={Menus}
                           verticalCount={2}
                           horizontalCount={3}
                           cellStyle={{height:screen.width/3,width:screen.width/3}}
                           renderRow={this._MenuItem}>
           </CollectionView>
       )
    }
    _MenuItem = (data,ii)=> {
        const delay =  0.025*ii*1000
        const view  = <Item data={data}
                            delayPop={delay}
                            ref={(v)=>{
                                if (!this.views[ii]) {
                                    this.views[ii]  = v
                                }
                            }}
                            key = {ii}
                            triggerFunc={this.props.triggerItemFunc}/>

        return view
    }
    //隐藏自己弹回去
    dismiss(){
        this.views.forEach((view,i)=>{
            view.dismiss()
        })
    }


}




class Item extends  PureComponent {
    _panResponder:any
    static propTypes = {
        data:PropTypes.object,
        triggerFunc:PropTypes.func,
        delayPop:PropTypes.number,//多少秒后弹出
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            itemScaleAni:new Animated.Value(1),
            popTranslateY: new  Animated.Value(400)
        };
    }
    _scaleAnimate = ()=> {
        Animated.timing(this.state.itemScaleAni,{
            duration:200,
            toValue:1.2
        }).start()
    }
    _resetScale = () => {
        Animated.timing(this.state.itemScaleAni,{
            duration:200,
            toValue:1
        }).start()
    }
    _trigger(){
        Animated.sequence([
            Animated.timing(this.state.itemScaleAni,{
                duration:200,
                toValue:1.0
            }),
        ]).start(()=>{
            this.props.triggerFunc()
        })

    }
    pop(){
        Animated.spring(this.state.popTranslateY,
            {
                toValue:0,
                speed:3,
                bounciness:8
            }).start()

    }
    dismiss(){

        setTimeout(()=>{
            Animated.spring(this.state.popTranslateY,
                {
                    toValue:400,
                    speed:3,
                    bounciness:8
                }).start()
        },this.props.delayPop)
    }


    componentWillMount() {
        //弹出自己
        setTimeout(()=>{
            this.pop()
        },this.props.delayPop)
        //手势
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                console.log('start')
                this._scaleAnimate()
            },
            onPanResponderMove: (evt, gestureState) => {

                console.log('move')
                this._resetScale()
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                console.log('Release')
                this._trigger()
            },
            onPanResponderTerminate: (evt, gestureState) => {
                console.log('Terminate')
                this._resetScale()
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    render(){
        const {data} = this.props
        return (
            <Animated.View  style={[styles.menuitem,{
                transform:[
                    {translateY: this.state.popTranslateY},
                ]
            }]}>
                <Animated.Image {...this._panResponder.panHandlers}
                                style={{width:MenuImageW,height:MenuImageW,transform:[
                                    {scale:this.state.itemScaleAni}
                                ]}}
                                source={data.imageName}/>

                <Text style={{color:'#686868',fontSize:14,marginTop:8}}>
                    {data.title}
                </Text>
            </Animated.View>
        )
    }
}










const  Menus = [
    {"imageName": require("../../img/tabbar/tabbar_compose_idea.png"), "title": "文字"},
    {"imageName": require('../../img/tabbar/tabbar_compose_photo.png'), "title": "照片/视频"},
    {"imageName": require("../../img/tabbar/tabbar_compose_weibo.png"), "title": "长微博"},
    {"imageName": require("../../img/tabbar/tabbar_compose_lbs.png"), "title": "签到"},
    {"imageName": require("../../img/tabbar/tabbar_compose_review.png"), "title": "点评"},
    {"imageName": require("../../img/tabbar/tabbar_compose_more.png"), "title": "更多"},
    {"imageName": require("../../img/tabbar/tabbar_compose_friend.png"), "title": "好友圈"},
    {"imageName": require("../../img/tabbar/tabbar_compose_wbcamera.png"), "title": "微博相机"},
    {"imageName": require("../../img/tabbar/tabbar_compose_music.png"), "title": "音乐"},
    {"imageName": require("../../img/tabbar/tabbar_compose_shooting.png"), "title": "拍摄"}
]


const  MenuImageW = (screen.width - 150 ) / 3

const styles = StyleSheet.create({
    menuitem:{
        width:screen.width / 3,
        height:screen.width / 3,

        alignItems:'center',
        justifyContent:'center'
    },
})
