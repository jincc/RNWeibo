
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from '../common/color'
import  screen  from '../common/screen'

class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.border,
    },
});

//make this component available to the app
export default Separator;
