import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-image';
import {isEmptyObject} from '../../utils/helpers';
import {registerLightboxImage, deregisterLightboxImage, setLightboxState} from '../../store/simpleActions';
import {Parallax} from 'react-scroll-parallax';
import Button from '../Button/Button';
import imageStyles from './Image.scss';
import {connect} from 'react-redux';

class Image extends Component {
    render() {
        const {className = '', src = '', ...attrs} = this.props;
        const styleClassNames = className
            .split(' ')
            .concat(['image'])
            .map(item => imageStyles[item] ? imageStyles[item] : item)
            .join(' ');

        return (
            <ProgressiveImage src={src} placeholder=''>
                {(progsrc, loading) => {
                    return loading
                        ? <Placeholder spinner={true} {...attrs}/>
                        : <ImageActualConnected className={styleClassNames} src={src} {...attrs}/>
                }}
            </ProgressiveImage>
        );
    }
}

class ImageActual extends Component {
    componentDidMount() {
        if (this.props.lightbox) this.props.registerLightboxImage({url: this.props.src})
    }

    componentWillUnmount() {
        if (this.props.lightbox) this.props.deregisterLightboxImage({url: this.props.src})
    }

    render() {
        const {className = '', src = '', alt = '', parallax, href = '', lightbox = false} = this.props;

        const lightboxHandler = lightbox
            ? () => this.props.setLightboxState({open: true, currentImage: src})
            : null;

        if (typeof parallax === 'object' && !isEmptyObject(parallax)) {
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
                        <ButtonizedImage
                            className={className} src={src} alt={alt} href={href}
                            lightboxHandler={lightboxHandler}
                        />
                    </Parallax>
                </div>
            );
        }

        return (
            <ButtonizedImage
                className={className} src={src} alt={alt} href={href}
                lightboxHandler={lightboxHandler}
            />
        );
    };
}

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

const ImageActualConnected = connect(null, mapDispatchToProps)(ImageActual);


const ButtonizedImage = (props) => {
    const {className, src, alt, href = '', lightboxHandler} = props;

    if (typeof lightboxHandler === 'function') {
        return (
            <Button onClick={lightboxHandler} className='button-image button-lightbox'>
                <img className={className} src={src} alt={alt}/>
            </Button>
        );
    }

    if (href !== '') {
        return (
            <Button href={href} className='button-image'>
                <img className={className} src={src} alt={alt}/>
            </Button>
        )
    }

    return (
        <img className={className} src={src} alt={alt}/>
    )
};

const Placeholder = (props) => {
    const {spinner = false} = props;
    return (
        <div className={imageStyles['placeholder']}>
            {spinner ? <Spinner/> : null}
        </div>
    )
};

const Spinner = () => (
    <div className={imageStyles['spinner']}>
        <div className={imageStyles['spinner-inner-1']}/>
        {/*<div className={imageStyles['spinner-inner-2']}/>*/}
    </div>
);

export default Image;