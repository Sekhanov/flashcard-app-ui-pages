import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
});

export const form = style({
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px',
});

export const input = style({
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
});

export const button = style({
    padding: '0.75rem',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease-in-out',
    ':hover': {
        backgroundColor: '#45a049',
    },
});

export const registerText = style({
    textAlign: 'center',
    fontSize: '0.9rem',
});

export const registerLink = style({
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
});