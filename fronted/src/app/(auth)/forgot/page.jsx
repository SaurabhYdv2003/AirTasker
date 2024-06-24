"use client";
import React, { useState } from 'react';
import {
  Button, CssBaseline, Grid, TextField, Typography, styled
} from '@mui/material';
import CustomBreadcrumbs from '../../Components/breadcrumbs.jsx';
import { validateForm } from '@/utils/Validator';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/auth/forgot-password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email }),
        });
        
        const data = await response.json();
        console.log("response data", data);

        if (response.ok) {
          toast.success('Password reset email sent. Please check your inbox.');
        } else {
          toast.error(data.error?.message || 'Failed to send reset email. Please try again later.');
        }
      } catch (error) {
        console.error('Error occurred while sending reset email:', error);
        toast.error('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <GridBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="Forgot Password" currentPage="Forgot Password" />
      <Grid container justifyContent="center" className='Form'>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className='TypoEmail'>Email</Typography>
              <TextField
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                value={formData.email}
                error={!!validationErrors.email}
                helperText={validationErrors.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Reset Password'}
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
