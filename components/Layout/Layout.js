import React from 'react';
import Head from 'next/head'
import {SITE_TITLE} from '../../constants/constants';
import Footer from '../Footer/Footer';
import styles from './Layout.scss';
import CookiesNotice from '../CookiesNotice/CookiesNotice';
import Header from '../Header/Header';

const Layout = ({ children, title = SITE_TITLE }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
        </Head>

        <div className={styles.layout}>
            <Header/>
                {children}
            <Footer/>
            <CookiesNotice/>
        </div>
    </React.Fragment>
);

export default Layout;