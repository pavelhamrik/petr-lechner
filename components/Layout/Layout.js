import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {SITE_SUBTITLE, SITE_TITLE} from '../../constants/constants';
import '../../styles/app.scss'
import {Grid, GridItem} from '../Grid/Grid';
import Footer from '../Footer/Footer';

const Layout = ({ children, title = SITE_TITLE }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <Grid>
            <GridItem>
                <header>
                    <nav>
                        <Grid>
                            <GridItem className='text-align-all-right' width='medium-6'>
                                <Link href='#'><a>{`${SITE_TITLE} • ${SITE_SUBTITLE}`}</a></Link>
                            </GridItem>
                            <GridItem width='medium-6'>
                                <Link href='#'><a>Kontakt</a></Link>
                            </GridItem>
                        </Grid>
                    </nav>
                </header>
            </GridItem>

            <GridItem>
                {children}
            </GridItem>

            <GridItem>
                <Footer/>
            </GridItem>
        </Grid>
    </React.Fragment>
);

export default Layout;