import { EuiProvider, EuiThemeColorMode } from '@elastic/eui'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/Header';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/utils';
import { Footer } from '../components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<EuiThemeColorMode>('light');

    useEffect(() => {
        const savedTheme: string = getLocalStorage('theme')
        if (savedTheme != null || savedTheme != undefined) {
            setTheme(savedTheme as EuiThemeColorMode)
        } else {
            setLocalStorage('theme', 'light')
        }
    }, [])

    function changeTheme(theme) {
        setLocalStorage('theme', theme)
        setTheme(theme)
    }

    return (
        <EuiProvider colorMode={theme}>
            <Head>
                <title>Viggo Seerden</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://kit.fontawesome.com/bc3716c16f.js" crossOrigin="anonymous"></script>
            </Head>
            <Header theme={theme} changeTheme={changeTheme}/>
            <Component {...pageProps} />
            <Footer theme={theme}/>
        </EuiProvider>
    )
}