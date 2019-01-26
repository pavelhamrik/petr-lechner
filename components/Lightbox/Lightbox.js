import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LIGHTBOX_IMAGE_ALT, PHOTOS_SIZES} from '../../constants/constants';
import {showNextLightboxImage, showPrevLightboxImage} from '../../store/simpleActions';
import lightboxStyles from './Lightbox.scss';

class Lightbox extends Component {
    // nextImage = () => {
    //
    // };

    render() {
        const {lightbox = {}} = this.props;
        const {open = false, images = [], currentImage = ''} = lightbox;

        if (!open) return null;
        return (
            <div className={lightboxStyles['lightbox']} onClick={this.props.showNextLightboxImage}>
                {
                    images
                        .filter(image => image.url === currentImage)
                        .map((image, idx) => (
                            <LightboxImage key={idx} src={image.url}/>
                        ))
                }
            </div>
        );
    }

}

const LightboxImage = (props) => {
    const {src = '', alt = LIGHTBOX_IMAGE_ALT} = props;
    const adjustedSrc = src
        .split('/')
        .map(component => component === PHOTOS_SIZES.small || component === PHOTOS_SIZES.medium
            ? PHOTOS_SIZES.large
            : component
        )
        .join('/');

    return (
        <img src={adjustedSrc} className={lightboxStyles['lightbox-image']} alt={alt}/>
    );
};

const mapStateToProps = state => {
    return {
        lightbox: state.lightbox,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showNextLightboxImage: () => {
            dispatch(showNextLightboxImage());
        },
        showPrevLightboxImage: () => {
            dispatch(showPrevLightboxImage());
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lightbox);