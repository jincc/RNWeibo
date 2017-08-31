
import React, { Component ,PropTypes} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import  screen from '../common/screen'

class TabBar extends  Component {
    static  propTypes = {
        //这参数是scrollTableView自带传的
        goToPage:PropTypes.func,
        activeTab:PropTypes.number,
        tabs : PropTypes.array,

        //must pass on
        pressCompose:PropTypes.func,
        tabNames:PropTypes.array,
        tabIconNames:PropTypes.array,
        selectedTabIconNames:PropTypes.array,
    }

    render(){
        const { activeTab,pressCompose, selectedTabIconNames, tabIconNames, tabNames, goToPage } = this.props

        console.log(activeTab)

        let views = new Array()
        for ( let ii =0;ii<5;ii++){
            let Component;
            if (ii == 2) {
                Component =  (
                    <TouchableOpacity key='compose'
                                      activeOpacity={0.5}
                                      onPress={pressCompose}>
                        <Image style={{width:60,height:45,justifyContent:'center', alignItems:"center"}} source={require('../img/wbtab/tabbar_compose_button2.png')}>
                            <Image style={{width:22,height:22}} source={require('../img/wbtab/tabbar_compose_add.png')}/>
                        </Image>
                    </TouchableOpacity>
                )
            }else{
                let loop = ii
                if (loop >=2) {
                    loop -= 1
                }
                const isSelect = activeTab === loop
                let color =  'gray'
                let icon = isSelect ? selectedTabIconNames[loop] :  tabIconNames[loop]
                Component =  (
                    <TouchableOpacity
                        key={loop}
                        activeOpacity={0.8}
                        style={styles.tab}
                        onPress={()=>goToPage(loop)}>
                        <View style={styles.tabItem}>
                            <Image style={styles.icon} source={icon} />
                            <Text style={{color: color, fontSize: 12}}>{tabNames[loop]}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            views.push(Component)
        }

        return (
            <View style={styles.container} >
                {views}
            </View>
        )

    }

}

const  styles = StyleSheet.create({
    container:{
        width:screen.width,
        height:49,
        borderTopWidth:screen.onePixel,
        borderTopColor:'#d9d9d9',
        flexDirection:'row'
    },
    tab:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon: {
        width: 26,
        height: 26,
        marginBottom: 2
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },



})

export default  TabBar