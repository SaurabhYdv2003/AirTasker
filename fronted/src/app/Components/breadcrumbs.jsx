import React from 'react';
import { Box, styled, Typography } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const CustomBreadcrumbs = ({ pageTitle, currentPage }) => {
  return (
    <MainBox>
      <Box className='InnerBanner'>
        <Typography className='TypoRegister' variant="h1">{pageTitle}</Typography>
        <ul className="breadcrumb">
          <li>
            <a href="/" onClick={handleClick}>Home</a>
          </li>
          <li>
            <span className="separator"></span>
          </li>
          <li className='current-page'>{currentPage}</li>
        </ul>
      </Box>
    </MainBox>
  );
};

export default CustomBreadcrumbs;

const MainBox = styled(Box)`
  .InnerBanner {
    background: #f7f7ff url('../assets/innerBanner.png') no-repeat center center;
    text-align: center;
    position: relative;
    padding: 50px 0;
    min-height: auto;
  }

  .TypoRegister {
    color: #28283c;
    margin: 0 0 15px;
    line-height: 1;
    font-size: 50px;
    font-weight: 600;
  }

  .breadcrumb {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    justify-content: center;
    margin: 0;
    list-style-type: none;
    display: flex;
  }

  .breadcrumb li {
    font-weight: 400;
    color: #74788D;
    line-height: 1.2;
    font-size: 17px;
    position: relative;
  }

  .breadcrumb li a {
    color: #28283C;
    text-decoration: none;
    margin-right: 15px;
  }

 
  .breadcrumb li:first-child:before {
    display: none;
  }
  
  .current-page {
    margin-left: 15px;
  }
  
  .separator {
    width: 6px;
    height: 6px;
    background: #4c40ed;
    border-radius: 50px;
    margin: -1px 2px 0;
    margin-left: 8px;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    float: none;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
