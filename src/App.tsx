import React from 'react';
import {Home} from './pages/home';
import {Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './utils/router/private-route';
import {AuthRootComponent} from './components/auth';
import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Watchlist} from './pages/watchlist';
import {News} from './pages/news';
import {Settings} from './pages/settings';
import {LayoutComponent} from './components/layout';

function App() {
    const [colorMode, theme] = useMode();
    return (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <div className='app'>
                        <Routes>
                            <Route element={<LayoutComponent/>}>
                                <Route path='/' element={<PrivateRoute/>}>
                                    <Route path='' element={<Home/>}/>
                                    <Route path='/watchlist' element={<Watchlist/>}/>
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/settings' element={<Settings/>}/>
                                </Route>
                                <Route path='login' element={<AuthRootComponent/>}/>
                                <Route path='register' element={<AuthRootComponent/>}/>
                            </Route>
                        </Routes>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
    );
}

export default App;
