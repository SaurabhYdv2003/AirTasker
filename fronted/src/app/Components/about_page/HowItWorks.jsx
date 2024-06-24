"use client"
import React, { useState, useEffect } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';
import fetchAboutUsData from '@/utils/fetchingData';

const HowItWorks = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchAboutUsData();
        setCardData(res.data.attributes.block);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <HowWorks>
      {cardData &&
        cardData.map((block) =>
          block.__component === 'section.card-category' ? (
            <Box key={block.id} className='howItWorksInner headingBlocks'>
              <Box className='text-center padding-bottom-40'>
                <Typography style={{ fontWeight: 600, fontSize: '40px' }} variant='h2'>
                  {block.heading}
                </Typography>
                <Typography className='headingBlock-p' style={{ fontWeight: 500, fontSize: '14px' }} variant='h6'>
                  {block.description}
                </Typography>
              </Box>

              <Grid sx={{ marginLeft: '10px', marginRight: '10px', maxWidth: '95vw', marginTop: '40px' }} container spacing={4}>
                {block.card_category.map((card) => (
                  <Grid key={card.id} item xs={12} md={4}>
                    <Box className='worksCard'>
                      <Typography className='numberTag' variant='h4'>{`0${card.cardIndex}`}</Typography>
                      {console.log(card.image.data.attributes.url)}
                      <Image
                        src={`http://localhost:1337${card.image.data.attributes.url}`}
                        alt={card.CardHeading}
                        width={64}
                        height={64}
                        onError={(e) => console.error('Error loading image:', e)}
                      />
                      <Typography style={{ color: '#28283c', fontWeight: '600' }} variant='h6'>
                        {card.CardHeading}
                      </Typography>
                      <Typography style={{ color: '#74788d', fontSize: '14px' }} variant='body1'>
                        {card.CardDescription}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : null
        )}
    </HowWorks>
  );
};

export default HowItWorks;

const HowWorks = styled(Box)`
  .headingBlocks {
    text-align: center;
    font-size: 20px;
    color: #28283c;
    font-weight: 600;
    margin: 0 0 15px;
    line-height: 1;
    background: url('http://localhost:1337/uploads/work_bg1_d93b8e38e9.png'), url('http://localhost:1337/uploads/work_bg2_c975683755.png'), #f7f7ff;
    background-repeat: no-repeat;
    background-position: left center, right 0 bottom 25%;
  }

  .padding-bottom-40 {
    padding-left: 20px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .headingBlock-p {
    font-weight: 500;
    color: #74788d;
    font-size: 14px;
  }

  .worksCard {
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 10px 20px -5px rgba(76, 64, 237, 0.08);
    border-radius: 20px;
    padding: 60px 60px;
    text-align: center;
    max-width: 420px;
    width: 100%;
    margin-bottom: 120px;
    position: relative;
  }

  .numberTag {
    font-weight: 600;
    font-size: 60px;
    color: #edecf8;
    margin-bottom: 0;
    position: absolute;
    top: -24px;
    left: 0;
  }
`;
