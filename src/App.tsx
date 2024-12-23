import React from 'react';
import {Home} from './components/home';
import {Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './utils/router/private-route';
import {AuthRootComponent} from './components/auth';
import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {LayoutComponent} from './components/layout';
import {Watchlist} from './components/watchlist';
import {News} from './components/news';
import {Settings} from './components/settings';

function App() {
    const [colorMode, theme] = useMode();
    return (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <LayoutComponent>
                        <div className='app'>
                            <Routes>
                                <Route path='/' element={<PrivateRoute/>}>
                                    <Route path='' element={<Home/>}/>
                                    <Route path='/watchlist' element={<Watchlist/>}/>
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/settings' element={<Settings/>}/>
                                </Route>
                                <Route path='login' element={<AuthRootComponent/>}/>
                                <Route path='register' element={<AuthRootComponent/>}/>
                            </Routes>
                        </div>
                    </LayoutComponent>
                </ThemeProvider>
            </ColorModeContext.Provider>
    );
}

export default App;
