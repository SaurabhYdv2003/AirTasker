"use client";
import React, { useState } from 'react';
import {
  Box, Button, CssBaseline, Grid, IconButton,InputAdornment, Link,TextField, Typography, styled
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CustomBreadcrumbs from '../../Components/breadcrumbs.jsx';
import { validateForm } from '@/utils/Validator';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    password: '',
    ConfirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', formData);
    }
  };

  return (
    <GridBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="Reset Password" currentPage="Reset Password" />
      <Grid container justifyContent="center" className='Form'>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className='TypoPass'>New Password</Typography>
              <TextField
                placeholder="Enter New Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                name="password"
                value={formData.password}
                error={!!validationErrors.password}
                helperText={validationErrors.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className='formInput'
              />
            </Grid>

            <Grid item xs={12}>
              <Typography className='TypoPassword'>Confirm Password</Typography>
              <TextField
                placeholder="Enter Confirm Password"
                fullWidth
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.ConfirmPassword}
                error={!!validationErrors.ConfirmPassword}
                helperText={validationErrors.ConfirmPassword}
                onChange={(e) => setFormData({ ...formData, ConfirmPassword: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className='formInput'
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className='SubmitButton'
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </GridBox>
  );
};

export default RegisterPage;

const GridBox = styled(Grid)`
  .container {
    background-color: #ffffff;
    color: #74788D;
    font-size: 16px;
    margin: 0 auto;
  }

  .Form {
    max-width: 390px;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .formInput .MuiTextField-root {
    height: 50px;
    font-size: 16px;
    color: #74788d;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #dfdfdf;
    padding: 0px 16px;
    margin-bottom: 25px;
  }

  .formInput .MuiInputBase-input {
    padding: 14px 14px; 
  }

  .formInput .Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline {
    border-color: #dfdfdf; 
  }

  .formInput .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #4c40ed;
  }

  .SubmitButton {
    background-color: #4c40ed;
    border: solid 1px #4c40ed;
    border-radius: 6px;
    height: 46px;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    margin-top: 16px;
    text-transform: none;
  }

  .SubmitButton:hover {
    background-color: #28283C;
  }


`;
