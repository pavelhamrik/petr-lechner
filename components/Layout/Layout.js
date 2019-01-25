import React, {Component} from 'react';
import * as ReactGA from 'react-ga';
import CookiesNotice from '../CookiesNotice/CookiesNotice';
import Head from 'next/head'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import layoutStyles from './Layout.scss';
import {connect} from 'react-redux';

class Layout extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        const {title, children, footerClasses, menuOpen} = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                </Head>

                <div className={`${layoutStyles['layout']} ${menuOpen ? layoutStyles['layout-unscrollable'] : null}`}>
                    <Header/>
                    {children}
                    <Footer className={footerClasses}/>
                    <CookiesNotice/>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        menuOpen: state.menu.open,
    }
};

export default connect(mapStateToProps)(Layout);