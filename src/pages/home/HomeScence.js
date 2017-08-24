import  React,{Component} from  'react'
import  {View, Text} from  'react-native'
import  VisitorView from '../../widget/VisitorView'
class  HomeScence extends  Component {
    render(){
        return (
         <View style={{flex:1}}>
            <VisitorView/>
         </View>
        )
    }
}

export  default  HomeScence