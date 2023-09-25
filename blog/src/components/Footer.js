import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


const footerStyles = {
  borderTop: '1px solid #e0e0e0',
  marginTop: '15px',
  paddingTop: 6,
  paddingBottom: 6,
  '@media (min-width:600px)': {
    paddingTop: 36,
    paddingBottom: 36,
  },
};

const footerTypographyStyles = {
  color: '#000',
};

const linkStyles = {
  color: '#666',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Hansi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
			'Resource name',
			'Another resource',
			'Final resource',
		],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={footerStyles}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" gutterBottom sx={footerTypographyStyles}>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link variant="subtitle1" sx={linkStyles}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;