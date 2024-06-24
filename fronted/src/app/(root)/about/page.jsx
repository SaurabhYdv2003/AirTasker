"use client";
import React, { useState } from "react";
import Image from "next/image.js";
import { Box, Typography, styled, Grid, CssBaseline } from "@mui/material";
import CustomBreadcrumbs from "../../Components/breadcrumbs.jsx";
import AboutCompany from "../../Components/about_page/about_our_company.jsx";
import HowItWorks from "../../Components/about_page/HowItWorks.jsx";
import CollapseSection from "../../Components/about_page/collapse.jsx";
import ServiceProvider from "../../Components/about_page/ServiceProvider.jsx";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const About = () => {
  return (
    <MainBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="About Us" currentPage="About Us" />
      <AboutCompany />
      <HowItWorks />
      <CollapseSection />
      <ServiceProvider />

      <Box className="clientSaysBlock" container>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            margin: "30px 0",
            width: "100%",
          }}
        >
          <Typography
            style={{ fontWeight: 600, fontSize: "40px", textAlign: "center" }}
            variant="h2"
          >
            What Our Client Says
          </Typography>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "#74788d",
              marginTop: "10px",
              textAlign: "center",
            }}
            variant="h6"
          >
            Lorem ipsum dolor sit amet, consectetur elit
          </Typography>
        </Box>
        <Carousel infinite={true} responsive={responsive}>
          <Box className="clientSaysCard">
            <Box className="cardImg">
              <Image
                src="/assets/image12.png"
                alt="Description of image"
                width={500}
                height={500}
                className="imgSays"
              />
            </Box>
            <Typography className="clientP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </Typography>
            <Typography className="clientName" variant="h6">
              Jennie Smith
            </Typography>
          </Box>

          <Box className="clientSaysCard">
            <Box className="cardImg">
              <Image
                src="/assets/image12.png"
                alt="Description of image"
                width={500}
                height={500}
                className="imgSays"
              />
            </Box>
            <Typography className="clientP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </Typography>
            <Typography className="clientName" variant="h6">
              Jennie Smith
            </Typography>
          </Box>

          <Box className="clientSaysCard">
            <Box className="cardImg">
              <Image
                src="/assets/image12.png"
                alt="Description of image"
                width={500}
                height={500}
                className="imgSays"
              />
            </Box>
            <Typography className="clientP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </Typography>
            <Typography className="clientName" variant="h6">
              Jennie Smith
            </Typography>
          </Box>
        </Carousel>
      </Box>
    </MainBox>
  );
};

export default About;

const MainBox = styled(Box)`
  .clientSaysBlock {
    text-align: center;
    background: url(../assets/testimonial-bg.png),
      url(../assets/testimonial-bg1.png) #f9f9f9;
    background-repeat: no-repeat;
    background-position: left center, right bottom;
    padding: 60px 0 90px 0;
  }

  .clientSaysSlider {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -60px;
    right: -60px;
    width: auto;
  }

  .clientSaysCard {
    background: #fff;
    box-shadow: 0px 10px 20px -5px rgba(76, 64, 237, 0.08);
    padding: 1.5rem;
    text-align: center;
    margin: 30px;
    animation: fadeIn 1s ease-in-out;
  }

  .cardImg {
    display: block;
    width: 110px;
    height: 110px;
    overflow: hidden;
    border-radius: 50%;
    margin: -50px auto 20px;
  }

  .imgSays {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .clientName {
    font-family: "Roboto", sans-serif;
    color: #28283c;
    font-weight: 600;
    margin: 0 0 15px;
    line-height: 1;
    font-size: 20px;
    margin-bottom: 0;
  }

  .clientP {
    display: block;
    margin: 0 0 16px;
    color: #74788d;
  }
`;
