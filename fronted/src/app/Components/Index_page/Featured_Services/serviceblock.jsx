"use client";

import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

export default function Block({
  category,
  rating,
  imageUrl,
  title,
  location,
  price,
}) {
  return (
    <Service>
      <Box className="container">
        <Box className="container-img">
          <Box className="rating">
            <Typography className="category">{category}</Typography>
            <Typography className="ratingbox">
              <FaStar color="#FFBC35" className="icon" size="1.3rem" />
              {rating}
            </Typography>
          </Box>
          <img src={imageUrl} alt="img" height="100%" width="100%" />
        </Box>

        <Box className="container-text">
          <Link href="#" className="title">
            {title}
          </Link>
          <Typography className="location">
            <IoLocationSharp size="1.5rem" color="#74788D" className="icon"/>
            {location}
          </Typography>

          <Box className="bookingbox">
            <Typography className="price">{price}</Typography>
            <Button className="button" variant="contained">
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Service>
  );
}

const Service = styled(Box)`
  width: 380px;
  .container {
    position: relative;
    background-color: #fff;
    border: 2px solid #f5f5f5;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease 0s;
  }
  .container-img {
    height: 270px;
    overflow: hidden;
  }
  .container-img img {
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    transform: translateZ(0);
    transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  }
  .container-img:hover img {
    transform: scale(1.15);
  }
  .container:hover {
    box-shadow: 0px 10px 20px -5px rgb(76 64 237 / 8%);
  }
  .rating {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 20px 20px 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container-text {
    margin: 10px 20px 20px 20px;
  }
  .category {
    color: #4c40ed;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
  }
  .ratingbox {
    align-content: center;
    display: flex;
    padding: 5px 10px;
    background-color: white;
    border-radius: 5px;
  }
  .title {
    font-size: 20px;
    color: #28283c;
    line-height: 2;
    font-weight: 600;
    text-decoration: none;
  }
  .title:hover {
    color: #4c40ed;
  }
  .location {
    color: #74788d;
    align-content: center;
    margin-bottom: 10px;
    display: flex;
  }
  .price {
    font-size: 22px;
    font-weight: 700;
    color: #28283c;
  }
  .bookingbox {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  .button {
    color: #4c40ed;
    background-color: #f7f7ff;
    font-weight: 600;
    padding: 10px 10px;
  }
  .button:hover {
    background-color: #28283c;
    color: white;
  }
  .icon{
    padding-right: 5px;
    align-items: left;
  }
`;
