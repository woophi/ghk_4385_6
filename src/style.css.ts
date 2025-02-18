import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const row = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  padding: '1rem',
  borderRadius: '1rem',
  border: '2px solid #F3F4F5',
});

const boxRow = style({
  display: 'flex',
  gap: '.5rem',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
  justifyContent: 'space-between',
});
const boxRow2 = style({
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
  flexDirection: 'column',
});
const boxRow2text = style({
  display: 'flex',
  gap: '.5rem',
  justifyContent: 'space-between',
});

const rowText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 0',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  boxRow,
  boxRow2,
  boxRow2text,
  rowText,
};
