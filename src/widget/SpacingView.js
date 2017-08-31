
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from '../common/color'


class SpacingView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: color.background,
    },
});

export default SpacingView;
