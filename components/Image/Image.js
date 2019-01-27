import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-image';
import {findIndexInArrayOfObjects, isEmptyObject} from '../../utils/helpers';
import {registerLightboxImage, deregisterLightboxImage, setLightboxState} from '../../store/simpleActions';
import {Parallax} from 'react-scroll-parallax';
import Button from '../Button/Button';
import imageStyles from './Image.scss';
import {connect} from 'react-redux';
import {PHOTOS_SIZES, PHOTOS_WIEWPORT_THRESHOLDS} from '../../constants/constants';

class Image extends Component {
    render() {
        const {className = '', parallax = {}, ...attrs} = this.props;
        const styleClassNames = className
            .split(' ')
            .concat(['image'])
            .map(item => imageStyles[item] ? imageStyles[item] : item)
            .join(' ');

        if (!isEmptyObject(parallax)) {
            const {xmin = 0, xmax = 0, ymin = 0, ymax = 0, color = 'transparent', reverse = true} = parallax;

            return (
                <div className={imageStyles['parallax-container']} style={{backgroundColor: color}}>
                    <Parallax
                        offsetYMin={`${ymin}px`}
                        offsetYMax={`${ymax}px`}
                        offsetXMin={`${xmin}px`}
                        offsetXMax={`${xmax}px`}
                        slowerScrollRate={reverse}
                    >
                        <CustomProgressiveImage className={styleClassNames} {...attrs}/>
                    </Parallax>
                </div>
            )
        }

        return (
            <CustomProgressiveImage className={styleClassNames} {...attrs}/>
        );
    }
}

const CustomProgressiveImage = (props) => {
    const {className = '', src = '', ...attrs} = props;

    return (
        <ProgressiveImage src={src} placeholder=''>
            {(progsrc, loading) => {
                return loading
                    ? <Placeholder spinner={true} src={src} {...attrs}/>
                    : <ImageActualConnected className={className} src={src} {...attrs}/>
            }}
        </ProgressiveImage>
    )
};

class ImageActual extends Component {
    componentDidMount() {
        if (this.props.lightbox) this.props.registerLightboxImage({url: this.props.src})
    }

    componentWillUnmount() {
        if (this.props.lightbox) this.props.deregisterLightboxImage({url: this.props.src})
    }

    render() {
        const {className = '', src = '', alt = '', href = '', lightbox = false, lightboxState} = this.props;

        const lightboxHandler = lightbox
            ? () => this.props.setLightboxState({
                open: true,
                currentImgIdx: findIndexInArrayOfObjects(lightboxState.images, src, 'url')
            })
            : null;

        const lightboxClassName = lightbox ? 'with-lightbox-icon' : '';

        return (
            <ButtonizedImage
                className={`${className} ${lightboxClassName}`} src={src} alt={alt} href={href}
                lightboxHandler={lightboxHandler}
            />
        );
    };
}

const mapStateToProps = state => {
    return {
        lightboxState: state.lightbox,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        registerLightboxImage: (payload) => {
            dispatch(registerLightboxImage(payload));
        },
        deregisterLightboxImage: (payload) => {
            dispatch(deregisterLightboxImage(payload));
        },
        setLightboxState: (payload) => {
            dispatch(setLightboxState(payload));
        },
    }
};

const ImageActualConnected = connect(mapStateToProps, mapDispatchToProps)(ImageActual);


const ButtonizedImage = (props) => {
    const {className, src, alt, href = '', lightboxHandler} = props;
    const classNames = `${className} button-image`;

    if (typeof lightboxHandler === 'function') {
        return (
            <Button onClick={lightboxHandler} className={`${classNames} button-lightbox`}>
                <img className={className} src={src} alt={alt}/>
            </Button>
        );
    }

    if (href !== '') {
        return (
            <Button href={href} className={classNames}>
                <img className={className} src={src} alt={alt}/>
            </Button>
        )
    }

    return (
        <img className={className} src={src} alt={alt}/>
    )
};

export const Placeholder = (props) => {
    const {spinner = false, src = '', blurredPreview = true} = props;

    const tinyImageSrc = src !== '' && blurredPreview
        ? composePathBySize({path: src, size: PHOTOS_SIZES.tiny})
        : null;

    return (
        <div className={imageStyles['placeholder']}>
            {
                tinyImageSrc
                    ? <div style={{backgroundImage: `url(${tinyImageSrc})`}}
                           className={imageStyles['blurred-backing']}/>
                    // ? <img src={tinyImageSrc} alt='' className={imageStyles['blurred-backing']}/>
                    : null
            }
            {spinner ? <Spinner/> : null}
        </div>
    )
};

const Spinner = () => (
    <div className={imageStyles['spinner']}>
        <div className={imageStyles['spinner-inner-1']}/>
    </div>
);

export const Picture = (props) => {
    const {src, alt, className, onLoad} = props;
    const srcSet = {
        small: composePathBySize({path: src, size: PHOTOS_SIZES.small}),
        medium: composePathBySize({path: src, size: PHOTOS_SIZES.medium}),
        large: composePathBySize({path: src, size: PHOTOS_SIZES.large}),
    };

    console.log('Picture: ', src);

    return (
        <div className={`${imageStyles['picture-container']} ${className}`}>
            {/*<picture onLoadStart={(event) => onLoadStart(event)} onLoad={(event) => onLoad(event)}>*/}
            <picture onLoad={(event) => onLoad(event)}>
                <source srcSet={srcSet.large} media={`(min-width: ${PHOTOS_WIEWPORT_THRESHOLDS.large}px)`}/>
                <source srcSet={srcSet.medium} media={`(min-width: ${PHOTOS_WIEWPORT_THRESHOLDS.medium}px)`}/>
                <source srcSet={srcSet.small}/>
                <img
                    className={`${imageStyles['image']} ${imageStyles['contained-picture']}`}
                    src={srcSet.large}
                    alt={alt}
                />
            </picture>
        </div>
    );
};

const isSizeComponent = (component) => {
    return component === PHOTOS_SIZES.small || component === PHOTOS_SIZES.medium || component === PHOTOS_SIZES.large
};

export const composePathBySize = (params) => {
    const {path = '', size = PHOTOS_SIZES.large} = params;

    return path
        .split('/')
        .map(component => isSizeComponent(component) ? size : component
        )
        .join('/');
};

export function determinePhotoSizeByWindow() {
    const windowWidth = window.innerWidth;
    return Object.keys(PHOTOS_WIEWPORT_THRESHOLDS)
        .filter(key => PHOTOS_WIEWPORT_THRESHOLDS[key] < windowWidth)
        .reduce((acc, key) => {
            if (acc.size < PHOTOS_WIEWPORT_THRESHOLDS[key]) return {key: key, size: PHOTOS_WIEWPORT_THRESHOLDS[key]};
            return acc;
        }, {key: '', size: -Infinity})
        .key;
}

export default Image;