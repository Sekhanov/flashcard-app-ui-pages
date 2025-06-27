import { style } from '@vanilla-extract/css';

export const layout = style({
    display: 'flex',
    height: '100vh',
});

export const sidebar = style({
    width: '200px',
    backgroundColor: '#1c1c1c',
    color: 'white',
    padding: '1rem',
    fontWeight: 'bold',
});

export const main = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
});

export const header = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e1e5e9',
    padding: '1rem',
});

export const content = style({
    padding: '2rem',
    backgroundColor: '#f3f0f2',
    height: '100%',
    overflowY: 'auto',
});