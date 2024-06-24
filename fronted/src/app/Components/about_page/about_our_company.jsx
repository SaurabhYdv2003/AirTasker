"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import { Box, Grid,styled,Typography } from '@mui/material';
import fetchAboutUsData from '@/utils/fetchingData'

const AboutCompany = () => {

  const [aboutData, setAboutData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchAboutUsData();
        setAboutData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 

  }, []);

  if (!aboutData || !Array.isArray(aboutData.data.attributes.block)) return null;

  const aboutCompany = aboutData.data.attributes.block.filter(
    block => block.__component === 'section.about-company'
  );

  return (
  <AboutCom>
  <Grid justifyContent='center' container className='parentBox' spacing={4}>
    {aboutCompany.map((block, index) => (
    <React.Fragment key={index}>
      <Grid className='aboutCompanyLeft' item xs={12} md={6}>
        <Box className='aboutCompanyExp'>
          <span className='aboutCompanyExp-span'>{block.expText}</span>
        </Box>
        <Box className='aboutCompanyImg'>
        </Box>

      </Grid>

      <Grid className='aboutCompanyInfo' item xs={12} md={6}>
        <Typography className='headingBlock' variant="h6">{block.heading}</Typography>
        <Typography className='heading' variant="h1">{block.subHeading}</Typography>

        <Box className='listItem'>
          <Typography className='aboutCleaning'>
          {block.description1}
          </Typography>
          <Typography className='aboutCleaning'>
          {block.description1}          
          </Typography>
          <Typography className='aboutCleaning'>
          {block.description1}          
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ul className='aboutCompanyInfo-ul'>
                <li>{block.description2}</li>
                <li>{block.description2}</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul className='aboutCompanyInfo-ul'>
                <li>{block.description2}</li>
                <li>{block.description2}</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      </React.Fragment>
  ))}
    </Grid>
</AboutCom>      
  );
}

export default AboutCompany;

const AboutCom= styled(Grid)`

.parentBox {
    maxWidth:100vw;
    padding: 70px 30px; 

  }

  .aboutCompanyLeft {
    position: relative;
    margin-bottom: 30px;
  }

  .aboutCompanyExp {
    position: absolute;
    background: #4c40ed;
    border-radius: 10px;
    width: 370px;
    top: 30px;
    bottom: 90px; 
  }

  .aboutCompanyExp-span {
    font-weight: 600;
    font-size: 25px;
    color: #fff;
    display: inline-block;
    margin: 240px -112px;
    transform: rotate(-90deg);
  }

  .aboutCompanyImg {
    position: relative;
    padding: 30px 0 30px 60px;
    height: 83%;
    z-index: 1;
    display: block;
    width: 100%;
    border-radius: 10px;
  }

  .aboutCompanyImg::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 60px;
    right: 30px;
    bottom: 30px;
    background: url('http://localhost:1337/uploads/about_01_43a1a6fef3.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
  }

  .aboutCompanyInfo {
    padding: 40px;
  }

  .headingBlock {
    color: #4c40ed;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .heading {
    font-size: 40px;
    color: #28283c;
    margin: 0 0 15px;
    padding-bottom: 20px;
    font-weight: 600;
    line-height: 1;
  }

  .aboutCleaning {
    display: block;
    margin: 0 0 10px;
    color: #74788d;
  }

  .aboutCompanyInfo-ul {
    font-size: 12px;
    color: #74788d;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .aboutCompanyInfo-ul li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 10px;
  }
  
  .aboutCompanyInfo-ul li::before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4c40ed;
    position: absolute;
    top: 5px;
    left: 0;
    content: "";
  }

  @media (max-width: 968px) {
    .aboutCompanyExp {
      width: 180px;
      left: -40px;
    }

    .headingBlock {
      font-size: 14px;
    }

    .heading {
      font-size: 24px;
    }
  }

`



