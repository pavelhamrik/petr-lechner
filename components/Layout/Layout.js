import React, {Component} from 'react';
import * as ReactGA from 'react-ga';
import CookiesNotice from '../CookiesNotice/CookiesNotice';
import Head from 'next/head'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import layoutStyles from './Layout.scss';
import {connect} from 'react-redux';
import {setLightboxState, setMenuState} from '../../store/simpleActions';
import Lightbox from '../Lightbox/Lightbox';

class Layout extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        this.props.setMenuState({open: false});
        this.props.setLightboxState({open: false, currentImgIdx: -1});
    }

    render() {
        const {title, children, footerClasses, isMenuOpen, isLightboxOpen} = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                </Head>

                <div className={`${layoutStyles['layout']} ${isMenuOpen || isLightboxOpen ? layoutStyles['layout-unscrollable'] : null}`}>
                    <Header/>
                    {children}
                    <Footer className={footerClasses}/>
                    <Lightbox/>
                    <CookiesNotice/>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMenuState: (payload) => {
            dispatch(setMenuState(payload));
        },
        setLightboxState: (payload) => {
            dispatch(setLightboxState(payload));
        },
    }
};

const mapStateToProps = state => {
    return {
        isMenuOpen: state.menu.open,
        isLightboxOpen: state.lightbox.open,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);