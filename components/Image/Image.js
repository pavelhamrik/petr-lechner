import React, {Component} from 'react';
import ProgressiveImage from 'react-progressive-image';
import styles from './Image.scss';
import {isEmptyObject} from '../../utils/helpers';
import {Parallax} from 'react-scroll-parallax';
// import {ParallaxController} from 'react-scroll-parallax';

class Image extends Component {
    render() {
        const {className = '', src = '', ...attrs} = this.props;
        const styleClassNames = className
            .split(' ')
            .concat(['image'])
            .map(item => styles[item] ? styles[item] : item)
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
    // static contextTypes = {ParallaxController};

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
                <div
                    className={styles['parallax-container']}
                    style={{
                        backgroundColor: color,
                        // boxShadow: 'inset 0 0 0 3px white'
                    }}
                >
                    <Parallax
                        offsetYMin={`${ymin}px`}
                        offsetYMax={`${ymax}px`}
                        offsetXMin={`${xmin}px`}
                        offsetXMax={`${xmax}px`}
                        slowerScrollRate={reverse}
                    >
                        <img className={className} src={src} alt={alt} {...attrs}/>
                    </Parallax>
                </div>
            );
        }

        return (
            <img className={className} src={src} alt={alt} {...attrs}/>
        );
    };
}
// ImageActual.contextType = ParallaxController;

class Placeholder extends Component {
    componentWillUnmount() {
        if (typeof this.context.parallaxController !== 'undefined') {
            console.log('parallaxController.update()');
            this.context.parallaxController.update();
        }
    }

    render() {
        return (
            <div className={styles.placeholder} {...this.props}/>
        )
    };
}

export default Image;
export {Placeholder};