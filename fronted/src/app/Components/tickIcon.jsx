import React from 'react';

const TickIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="24"
    viewBox="0 0 24 24"
    {...props}
    sx={{color:'#fff'}}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M9 16.2l-2.5-2.5L5 15l4 4 8-8-1.4-1.4L9 16.2z" />
  </svg>
);

export default TickIcon;
