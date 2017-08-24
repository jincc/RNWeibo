/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from '../common/color'
import { screen } from '../common/screen'

// create a component
class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.border,
    },
});

//make this component available to the app
export default Separator;
