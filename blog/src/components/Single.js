import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeroContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
}));

export default function Post() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get(`post/${id}`)

        setData(response.data); 

      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    getData();
  }, [id]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div></div>
      <HeroContent>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {data.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {data.excerpt}
          </Typography>
        </Container>
      </HeroContent>
    </Container>
  );
}
