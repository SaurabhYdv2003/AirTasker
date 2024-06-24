"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { popularServiceBlock } from "@/utils";
import Block from "./pserviceblock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PopularServices() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Service>
      <Box className="container">
        <Box className="main-heading">
          <Typography className="heading">Most Popular Services</Typography>
          <Typography className="subheading">
            Explore the greates our services. You won &apos;t be disappointed
          </Typography>
        </Box>

        <Box className="card">
          {popularServiceBlock.map((service, index) => (
            // <Slider {...settings}>
              <Block
                key={index}
                category={service.category}
                rating={service.rating}
                imageUrl={service.imageUrl}
                title={service.title}
                location={service.location}
                price={service.price}
              />
            // </Slider>
          ))}
        </Box>
      </Box>
    </Service>
  );
}

const Service = styled(Box)`
  padding-bottom: 90px;
  margin: 0 70px;
  .container {
  }
  .main-heading {
    padding-bottom: 50px;
  }
  .heading {
    font-size: 40px;
    font-weight: 600;
  }
  .subheading {
    margin: 0 0 15px;
    font-weight: 520;
    color: #74788d;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
