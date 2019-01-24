import React, {Component} from 'react';
import Head from 'next/head'
import Footer from '../Footer/Footer';
import styles from './Layout.scss';
import CookiesNotice from '../CookiesNotice/CookiesNotice';
import Header from '../Header/Header';
import * as ReactGA from 'react-ga';

class Layout extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        const {title, children, footerClasses} = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{title}</title>
                </Head>

                <div className={styles.layout}>
                    <Header/>
                    {children}
                    <Footer className={footerClasses}/>
                    <CookiesNotice/>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;