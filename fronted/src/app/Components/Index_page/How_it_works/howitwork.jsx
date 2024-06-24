"use client";

import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export default function Howitwork() {
  return (
    <Howitworkcontainer>
      <Box className="offerbox">
        <Box className="offerimg">
          <img src="/assets/offer-image.png" alt="offer" />
        </Box>
        <Box className="offerdetails">
          <Typography className="offerheading">
            We Are Offering 14 Days Free Trial
          </Typography>
          <Typography className="offertext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore minim veniam, quis
            nostrud exercitation ullamco magna aliqua.
          </Typography>
          <Button className="offerbutton" variant="contained">
            Try 14 days free trial
          </Button>
        </Box>
      </Box>

      <Box>
        {/* <Box>
            <Typography>How It Works</Typography>
            <Typography>Aliquam lorem ante, dapibus in, viverra quis</Typography>
        </Box> */}
      </Box>
    </Howitworkcontainer>
  );
}

const Howitworkcontainer = styled(Box)`
  padding: 90px 0;
  background: url(/assets/work-bg1.png), url(/assets/work-bg2.png), #f7f7ff;
  background-repeat: no-repeat;
  background-position: left center, right 0 bottom 25%;
  .offerbox {
    margin: 0 70px;
    background-color: #4c40ed;
    border-radius: 50px;
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  .offerbox:after {
    position: absolute;
    content: "";
    background: url(/assets/offer-bg.png) no-repeat 0 0 / 100%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .offerimg {
    flex: 0 0 auto;
  }
  .offerdetails {
    padding-left: 35px;
    padding-right: 35px;
  }
  .offerheading {
    color: #fff;    
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .offertext {
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .offerbutton {
    background-color: #fff;
    color: #28283c;
    font-weight: 600;
    border: 1px solid #fff;
    padding: 12px 20px;
    display: inline-flex;
    align-items: center;
    font-size: 15px;
    border-radius: 8px;
  }
`;
