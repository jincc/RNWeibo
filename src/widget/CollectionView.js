import React, { PureComponent, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import  screen from '../common/screen'
const  kPerPagePaddingVertical = 50
const  kPageControlContainerHeight = 40

class CollectionView extends  PureComponent {
    width : number
    height : number
    static  propTypes = {
        //数据源
        datas:PropTypes.array.isRequired,
        //返回cell
        renderRow:PropTypes.func.isRequired,
        horizontalCount:PropTypes.number.isRequired,
        verticalCount:PropTypes.number.isRequired,
        //每个cell的width和height
        cellStyle:View.propTypes.style,
        //pageControl配置
        dotColor: PropTypes.string,
        activeDotColor: PropTypes.string
    }
    static defaultProps = {
        dotColor: '#686868',
        activeDotColor: '#FDA929'
    }

    // 构造
    constructor(props) {
        super(props);
        const  {cellStyle,horizontalCount,verticalCount} = props
        const style = {width:cellStyle.width * horizontalCount,height:cellStyle.height * verticalCount + kPerPagePaddingVertical + kPageControlContainerHeight}

        this.width = style.width
        this.height = style.height
        // 初始状态
        this.state = {
            currentIndex:0
        };
    }

    _onScroll = (e) => {
        const page = parseInt(e.nativeEvent.contentOffset.x / screen.width)
        if (this.state.currentIndex !== page) {
            this.setState({
                currentIndex:page
            })
        }

    }

    render(){
        const {datas,renderRow,horizontalCount,verticalCount,cellStyle} = this.props
        const  length = datas.length
        let  pageCount = length / (horizontalCount*verticalCount)
        pageCount = parseInt(pageCount) //取整
        const  residueCount = length %  (horizontalCount*verticalCount)

        let  views = datas.map((item,ii)=>{
            return (
                renderRow(item,ii)
            )
        })

        let Components = new Array()
        const perCount = (horizontalCount*verticalCount);
        //前N页
        for (let  i = 0 ;i < pageCount;i ++)
        {
            const perViews =  views.splice(i * perCount,perCount);
            
            let Component = (
                <View key = {i}
                      style={styles.pageContainer}>
                    {
                        perViews
                    }   
                </View>
            )
            Components.push(Component)
        }
        //最后一页
        if (residueCount !== 0) {
            pageCount+=1
            const perViews =  views

            let Component = (
                <View key = {pageCount}
                      style={styles.pageContainer}>
                    {
                        perViews
                    }
                </View>
            )
            Components.push(Component)
        }
        //pageControls
        let dots = new Array()
        for  ( let i = 0 ;i < pageCount ; i ++) {
            let color = this.state.currentIndex === i ? this.props.activeDotColor : this.props.dotColor
            let activeDot = <View  key={i} style={{backgroundColor: color, width: 8, height: 8, borderRadius: 4}} />

            dots.push(activeDot)
        }

        const style = {width:this.width,height:this.height}

        return (
            <View style={[style,{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}]}>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    scrollEnabled={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{flex:1}}
                    contentContainerStyle={{paddingTop:0}}
                    scrollEventThrottle={10}
                    onScroll={this._onScroll}>
                    {Components}
                </ScrollView>
                <View style={[styles.pageControlContainer,{width:pageCount*15}]}>
                    {dots}
                </View>
            </View>

        );
    }
}

var styles = StyleSheet.create({
   pageContainer:{
       flex:1,width:screen.width,flexDirection:'row',flexWrap:'wrap',paddingVertical:kPerPagePaddingVertical
   },
    pageControlContainer:{
        height:kPageControlContainerHeight,justifyContent:'space-between',alignItems:'center',flexDirection:'row',width:30
    }
});
export  default  CollectionView