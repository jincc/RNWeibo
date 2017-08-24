
import React, { PureComponent ,PropTypes} from 'react'
import { Image , View} from 'react-native'


class TabBarItem extends PureComponent {
    static  propTypes = {
        selectedImage : PropTypes.number.isRequired,
        normalImage:PropTypes.number.isRequired,
        focused:PropTypes.bool.isRequired,
        tintColor:PropTypes.string.isRequired,
    }


    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }
}

export default TabBarItem;
