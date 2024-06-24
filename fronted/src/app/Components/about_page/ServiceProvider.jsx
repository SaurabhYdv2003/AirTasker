"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Grid, styled, Typography } from '@mui/material';
import fetchAboutUsData from '@/utils/fetchingData';

const ServiceProvider = () => {
  const [provider, setProviderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchAboutUsData();
        setProviderData(res.data.attributes.block);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <ProviderContainer container>
      {provider &&
        provider.map((block) =>
          block.__component === "section.service-provider" ? (
            <Grid className="provider" key={block.id} container item xs={12} spacing={2}>
              <Grid item xs={12}>
                <Box>
                  <Typography
                    style={{ fontWeight: 600, fontSize: '40px', color: '#28283c', margin: '0 0 15px', lineHeight: '1' }}
                    variant="h2"
                  >
                    {block.heading}
                  </Typography>
                  <Typography
                    style={{ fontWeight: 600, fontSize: '16px', color: '#74788d', paddingBottom: '25px' }}
                    variant="h6"
                  >
                    {block.description}
                  </Typography>
                </Box>
              </Grid>

              <Grid justifyContent='center' container item xs={12} spacing={2}>
                {block.provider.map((serviceProvider) => (
                  <Grid key={serviceProvider.id} className="profileCard" item xs={12} sm={6} md={4} lg={2.7}>
                    <Image
                      src={`http://localhost:1337${serviceProvider.image.data.attributes.url}`}
                      alt={serviceProvider.image.data.attributes.alternativeText || "Provider"}
                      width={300}
                      height={300}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                    <Typography style={{ color: '#28283c', fontWeight: 'bold' }} variant="h6">
                      {serviceProvider.name}
                    </Typography>
                    <Typography style={{ color: '#74788d', fontSize: '16px' }}>{serviceProvider.email}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : null
        )}
    </ProviderContainer>
  );
};

export default ServiceProvider;

const ProviderContainer = styled(Grid)`
  .profileCard {
    border: 2px solid #f5f5f5;
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 30px;
    margin-right:30px;
    transition: all 0.5s;
    background: #fff;
  }

  .provider {
    padding-top: 70px;
    padding-bottom: 90px;
    margin-left: 40px;
    /* margin-right: 50px; */
    background: url(../assets/provider-bg.png);
    background-repeat: no-repeat;
    background-position: right center;
  }
`;
