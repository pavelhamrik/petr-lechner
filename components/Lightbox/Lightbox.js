import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    ARRAY_TRAVERSING_DIRECTIONS,
    IMAGE_LOADING_STATES,
    LIGHTBOX_IMAGE_ALT,
    LIGHTBOX_IMAGE_DIRECTIONS,
} from '../../constants/constants';
import {
    setLightboxState,
    showNextLightboxImage,
    showPrevLightboxImage,
    setLightboxImageLoadState
} from '../../store/simpleActions';
import ProgressiveImage from 'react-progressive-image';
import {composePathBySize, determinePhotoSizeByWindow, Placeholder} from '../Image/Image';
import lightboxStyles from './Lightbox.scss';
import {Picture} from '../Image/Image';
import {preloadImage} from '../../utils/helpers';
import {getIndexInDirection} from '../../utils/helpers';

class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.keyDown = this.keyDown.bind(this);
    }

    keyDown(event){
        switch (event.code) {
            case 'KeyP':
            case 'ArrowLeft':
            case 'ArrowUp':
                this.props.showPrevLightboxImage();
                break;
            case 'KeyN':
            case 'ArrowRight':
            case 'ArrowDown':
            case 'Space':
                this.props.showNextLightboxImage();
                break;
            case 'Escape':
            case 'KeyX':
                this.props.setLightboxState({open: false, currentImgIdx: -1});
                break;
            default:
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.keyDown, false);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.keyDown, false);
    }

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
        this.props.setLightboxState({open: false, currentImgIdx: -1});
    };

    handleImageLoad = (event, idx, state) => {
        this.props.setLightboxImageLoadState({idx: idx, state: state});
        const size = determinePhotoSizeByWindow();

        const preloadDirection = this.props.lightbox.imageDirection === LIGHTBOX_IMAGE_DIRECTIONS.left
            ? ARRAY_TRAVERSING_DIRECTIONS.prev
            : ARRAY_TRAVERSING_DIRECTIONS.next;

        const imageIdx = getIndexInDirection({
            arr: this.props.lightbox.images,
            idx: idx,
            dir: preloadDirection,
        });

        const path = composePathBySize({path: this.props.lightbox.images[imageIdx].url, size: size});

        const setPreloadedImgState = (params) => () => this.props.setLightboxImageLoadState(params);
        const setPreloadedImgStateComp = setPreloadedImgState({idx: imageIdx, state: IMAGE_LOADING_STATES.isLoaded});

        preloadImage(path, setPreloadedImgStateComp);
    };

    render() {
        const {lightbox = {}} = this.props;
        const {open = false, images = [], currentImgIdx = -1, imageDirection} = lightbox;

        if (!open) return null;

        const leftDirectionClass = imageDirection === LIGHTBOX_IMAGE_DIRECTIONS.left
            ? lightboxStyles['appear-from-left']
            : '';

        const rightDirectionClass = imageDirection === LIGHTBOX_IMAGE_DIRECTIONS.right
            ? lightboxStyles['appear-from-right']
            : '';

        const onLoadComposed = (idx, stt) => event => this.handleImageLoad(event, idx, stt);

        return (
            <div className={lightboxStyles['lightbox']}>
                {
                    images.length !== 0
                        ? <LightboxImage
                            key={currentImgIdx}
                            src={images[currentImgIdx].url}
                            className={`${leftDirectionClass} ${rightDirectionClass}`}
                            // onLoadStart={onLoadComposed(currentImgIdx, IMAGE_LOADING_STATES.isLoading)}
                            onLoad={onLoadComposed(currentImgIdx, IMAGE_LOADING_STATES.isLoaded)}
                        />
                        : null
                }

                <div className={lightboxStyles['lightbox-close']} onClick={(event) => this.handleCloseClick(event)}/>
                <div className={lightboxStyles['lightbox-prev']} onClick={(event) => this.handlePrevImageClick(event)}/>
                <div className={lightboxStyles['lightbox-next']} onClick={(event) => this.handleNextImageClick(event)}/>
            </div>
        );
    }
}

const LightboxImage = (props) => {
    const {className = '', src = '', onClick, onLoad, alt = LIGHTBOX_IMAGE_ALT} = props;

    return (
        <ProgressiveImage
            src={src}
            placeholder=''
        >
            {(progsrc, loading) => {
                return loading
                    ? <Placeholder spinner={true} src={src} alt={alt} blurredPreview={false}/>
                    : <Picture
                        src={src}
                        className={className}
                        alt={alt}
                        onClick={onClick}
                        // onLoadStart={onLoadStart}
                        onLoad={onLoad}
                    />
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
        setLightboxImageLoadState: (payload) => {
            dispatch(setLightboxImageLoadState(payload));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lightbox);