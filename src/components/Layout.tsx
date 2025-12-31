import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';
import {AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Tooltip,} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import {appBarSx, toolbarSx, drawerSx, drawerToolbarSx, listItemButtonSx, listItemIconSx, listItemTextSx, mainContentSx,} from './Layout.style';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { PrivateRoute } from './PrivateRoute';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Основной макет.
 */
export const Layout = () => {
    const { logout } = useAuth();
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { i18n, t } = useTranslation();

    const getPageTitle = (pathname: string) => {
        if (/^\/$/.test(pathname)) return t('layout.home');
        if (/^\/library/.test(pathname)) return t('layout.library');
        if (/^\/add-flashcard-set/.test(pathname)) return t('layout.createSet');
        if (/^\/flashcard-set\/\d+\/edit$/.test(pathname)) return t('layout.editSet');
        if (/^\/flashcard-set\/\d+$/.test(pathname)) return t('layout.viewSet');
        if (/^\/flashcard-set\/\d+\/written$/.test(pathname)) return t('layout.written');
        if (/^\/flashcard-set\/\d+\/multipleChoice$/.test(pathname)) return t('layout.multipleChoice');
        return '';
    };

    const toggleDrawer = () => setOpen(!open);

    const buttons = [
        { key: 'layout.home', to: '/', icon: HomeIcon },
        { key: 'layout.library', to: '/library', icon: LibraryBooksIcon },
    ];

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Header */}
            <AppBar position="fixed" sx={appBarSx(open)}>
                <Toolbar sx={toolbarSx}>
                    <Typography variant="h6" sx={{ ml: 2 }}>
                        {getPageTitle(location.pathname)}
                    </Typography>

                    <Box>
                        {/* Add */}
                        <Tooltip title={t('layout.createSet')}>
                            <IconButton color="inherit" onClick={() => navigate('/add-flashcard-set')}>
                                <AddIcon />
                            </IconButton>
                        </Tooltip>

                        {/* Language */}
                        <Tooltip
                            title={
                                i18n.language === 'en'
                                    ? t('layout.switchToRu')
                                    : t('layout.switchToEn')
                            }
                        >
                            <IconButton color="inherit" onClick={switchLanguage}>
                                <Typography fontWeight="bold">
                                    {i18n.language.toUpperCase()}
                                </Typography>
                            </IconButton>
                        </Tooltip>

                        {/* Logout */}
                        <Tooltip title={t('layout.logout')}>
                            <IconButton color="inherit" onClick={logout}>
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer variant="permanent" open={open} sx={drawerSx(open)}>
                <Toolbar sx={drawerToolbarSx(open)}>
                    <IconButton color="inherit" onClick={toggleDrawer}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>

                <Divider sx={{ bgcolor: '#3a3a3a' }} />

                <List sx={{ mt: 2 }}>
                    {buttons.map(({ key, to, icon: Icon }, index) => (
                        <Link key={to} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemButton
                                sx={{
                                    ...listItemButtonSx(open),
                                    mb: index !== buttons.length - 1 ? 1 : 0,
                                }}
                            >
                                <ListItemIcon sx={listItemIconSx(open)}>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={t(key)} sx={listItemTextSx(open)} />
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Drawer>

            {/* Content */}
            <Box component="main" sx={mainContentSx}>
                <PrivateRoute>
                    <Outlet />
                </PrivateRoute>
            </Box>
        </Box>
    );
};
