import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LIGHTBOX_IMAGE_ALT, PHOTOS_SIZES, PHOTOS_WIEWPORT_THRESHOLDS} from '../../constants/constants';
import {setLightboxState, showNextLightboxImage, showPrevLightboxImage} from '../../store/simpleActions';
import ProgressiveImage from 'react-progressive-image';
import {Placeholder} from '../Image/Image';
import lightboxStyles from './Lightbox.scss';
import {Picture} from '../Image/Image';

class Lightbox extends Component {
    handleNextImageClick = (event) => {
        if (typeof event !== 'undefined') event.stopPropagation();
        this.props.showNextLightboxImage();
    };

    handlePrevImageClick = (event) => {
        if (typeof event !== 'undefined') event.stopPropagation();
        this.props.showPrevLightboxImage();
    };

    handleCloseClick = (event) => {
        if (typeof event !== 'undefined') event.stopPropagation();
        this.props.setLightboxState({open: false, currentImage: ''});
    };

    render() {
        const {lightbox = {}} = this.props;
        const {open = false, images = [], currentImage = ''} = lightbox;

        if (!open) return null;
        return (
            <div
                className={lightboxStyles['lightbox']}
                // onClick={() => this.props.setLightboxState({open: false, currentImage: ''})}
            >
                {
                    images
                        .filter(image => image.url === currentImage)
                        .map((image, idx) => (
                            <LightboxImage
                                key={idx}
                                src={image.url}
                            />
                        ))
                }
                <div className={lightboxStyles['lightbox-close']} onClick={(event) => this.handleCloseClick(event)}/>
                <div className={lightboxStyles['lightbox-prev']} onClick={(event) => this.handlePrevImageClick(event)}/>
                <div className={lightboxStyles['lightbox-next']} onClick={(event) => this.handleNextImageClick(event)}/>
            </div>
        );
    }
}

const LightboxImage = (props) => {
    const {src = '', onClick, alt = LIGHTBOX_IMAGE_ALT} = props;

    return (
        <ProgressiveImage
            src={src}
            placeholder=''
        >
            {(progsrc, loading) => {
                return loading
                    ? <Placeholder spinner={true} src={src} alt={alt} blurredPreview={false}/>
                    : <Picture src={src} className={lightboxStyles['lightbox-image']} alt={alt} onClick={onClick}/>
            }}
        </ProgressiveImage>
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
        setLightboxState: (payload) => {
            dispatch(setLightboxState(payload));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lightbox);