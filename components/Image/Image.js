import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-image';
import {isEmptyObject} from '../../utils/helpers';
import {Parallax} from 'react-scroll-parallax';
import Button from '../Button/Button';
import imageStyles from './Image.scss';

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
                {(src, loading) => (
                    loading
                        ? <Placeholder {...attrs}/>
                        : <ImageActual className={styleClassNames} src={src} {...attrs}/>
                )}
            </ProgressiveImage>
        );
    }
}

class ImageActual extends Component {
    componentDidMount() {
        if (typeof this.context.parallaxController !== 'undefined') {
            console.log('parallaxController.update()');
            this.context.parallaxController.update();
        }
    }

    render() {
        const {className = '', src = '', alt = '', parallax, ...attrs} = this.props;

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
                        <ButtonizedImage className={className} src={src} alt={alt} {...attrs}/>
                    </Parallax>
                </div>
            );
        }

        return (
            <ButtonizedImage className={className} src={src} alt={alt} {...attrs}/>
        );
    };
}

const ButtonizedImage = (props) => {
    const {className, src, alt, href = '', ...attrs} = props;

    if (href !== '') {
        return (
            <Button href={href} className='button-image'>
                <img className={className} src={src} alt={alt} {...attrs}/>
            </Button>
        )
    }

    return (
        <img className={className} src={src} alt={alt} {...attrs}/>
    )
};

class Placeholder extends Component {
    render() {
        return (
            <div className={imageStyles.placeholder} {...this.props}/>
        )
    };
}

export default Image;