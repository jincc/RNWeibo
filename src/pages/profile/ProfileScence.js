import  React,{Component} from  'react'
import  {View, Text,ListView,StyleSheet,Image,FlatList} from  'react-native'
import  Button from '../../widget/Button'
import  color from '../../common/color'
import  screen from '../../common/screen'
import Separator from '../../widget/Separator'
import SpacingView  from '../../widget/SpacingView'

const  Maps = [
    'space',
    {image:require('../../img/profile/launchericonactivity.png'),
    title:'签到',
    des:'百万现金天天领',
        redPoint:true},
    {image:require('../../img/profile/launcher_icon_activityB.png'),
        title:'新的好友'},
    'space',
    {image:require('../../img/profile/launcher_icon_hot.png'),
        title:'我的相册'},
    'space',
    {image:require('../../img/profile/launcher_icon_promotio.png'),
        title:'我的赞',des:'收藏，移到这里啦'},
    {image:require('../../img/profile/launcher_icon_qrcode.png'),
        title:'微博钱包',
        des:'运动教师火爆卡克,参与领取各种好礼哦',
        redPoint:true},
    'space',
    {image:require('../../img/profile/launcher_icon_saleA.png'),
        title:'粉丝服务',
        des:'写文章，发点评，装粉丝'}


]

class  ProfileScence extends  Component {

    static  navigationOptions = {
        headerTitle:'我',
        headerLeft:<Button title={'添加好友'}
                           style={{color:color.grayText}}
                           containerStyle={{paddingLeft:5}}/>,
        headerRight:<Button title={'设置'}
                           style={{color:color.grayText}}
                           containerStyle={{paddingRight:5}}/>
    }
    // 构造
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <FlatList
                ItemSeparatorComponent={Separator}
                data={Maps}
                ListHeaderComponent = {Header}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItemComponent}
            />
        )

    }
    _keyExtractor = (item, index) => {
        return index
    }
    _renderItemComponent = ({item, separators}) => {
        if (item === 'space') {
            return (<SpacingView />)
        }
        return <Cell  data={item}/>
    };

}

const  Cell = ({data})=>{
    return (
        <View style={styles.cellContaienr}>
            <Image style={{width:20,height:20}}
                   source={data.image}/>
            <Text style={{marginHorizontal:5,fontSize:16}}>{data.title}</Text>
            {data.des && <Text style={{fontSize:12,color:color.grayText}}>{data.des}</Text>}
            <View style={{flex:1}}/>
            {data.redPoint && <Image style={{width:8,height:8,marginRight:0}} source={require('../../img/profile/colorred.png')}></Image>}

        </View>
    )
}

class Header extends  Component {
    render(){
        return (
            <View style={styles.headerContainer}>
                <View style={{flex:1,backgroundColor:'white'}}>
                    <View style={styles.headerTopContainer}>
                        <Image style={styles.headerLogo} source={require('../../img/profile/more_iconqq.png')}></Image>
                        <View style={styles.headerTopCenterC}>
                            <Text style={{textAlign:'center',color:'black',fontSize:18,fontWeight:'500'}}>达尔文Say</Text>
                            <Text style={{textAlign:'center',color:color.grayText,marginTop:6}} numberOfLines={1}>简介:a iOS developer! always keep running</Text>
                        </View>
                        <View style={styles.headerTopRightC}>
                            <Image style={{width:20,height:20}} source={require('../../img/profile/membershiplevel.png')}></Image>
                            <Text style={{color:'#FD8224',fontSize:12,marginHorizontal:3}}>会员</Text>
                            <Image style={{width:8,height:8}} source={require('../../img/profile/colorred.png')}></Image>
                        </View>
                    </View>
                    <Separator/>
                    <View style={styles.headerBottomContaienr}>
                        <View style={styles.headerFans}>
                            <Text style={{color:'black',fontWeight:'600',fontSize:14}}>63</Text>
                            <Text style={{color:color.grayText,marginTop:5,fontSize:13}}>微博</Text>
                        </View>
                        <View style={styles.headerFans}>
                            <Text style={{color:'black',fontWeight:'600',fontSize:14}}>129</Text>
                            <Text style={{color:color.grayText,marginTop:5,fontSize:13}}>关注</Text>
                        </View>
                        <View style={styles.headerFans}>
                            <Text style={{color:'black',fontWeight:'600',fontSize:14}}>10</Text>
                            <Text style={{color:color.grayText,marginTop:5,fontSize:13}}>粉丝</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    headerContainer:{
        height:140,
        width:screen.width,
        paddingTop:8
    },
    headerTopContainer:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:12,
        paddingVertical:14,
        alignItems:"center",
        justifyContent:'space-between'
    },
    headerBottomContaienr:{
        height:60,
        flexDirection:'row'
    },
    headerFans:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headerLogo:{
        width:60,
        height:60,
        borderRadius:30
    },
    headerTopRightC:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:0,

    },
    headerTopCenterC:{
        justifyContent:'center',
        alignItems:"flex-start",
        flex:1
    },
    cellContaienr:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        height:44,
        backgroundColor:'white'
    }




})

export  default  ProfileScence