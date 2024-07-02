import Link from 'next/link';
import React from 'react';
// import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
// import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';

// const FooterContainer = styled(Box)(({ theme }) => ({
//   py: 3,
//   px: 2,
//   mt: 'auto',
//   backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
// }));

// const SectionContainer = styled(Grid)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: 'bold',
//   marginBottom: theme.spacing(1),
// }));

// const SectionLink = styled(Link)(({ theme }) => ({
//   display: 'block',
//   marginBottom: theme.spacing(0.5),
//   '&:hover': {
//     textDecoration: 'underline',
//   },
// }));

// const SocialContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: theme.spacing(1),
// }));

const Footer = () => {
  return (
<section className="footer">
  <div className="footer-row">
    <div className="footer-col">
      <h4>Info</h4>
      <ul className="links">
        <li>
          <link href="#" />About Us</li>
        <li><link href="#" />Compressions</li>
        <li><link href="#" />Customers</li>
        <li><link href="#" />Service</li>
        <li><link href="#" />Collection</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Explore</h4>
      <ul className="links">
        <li><link href="#" />Free Designs</li>
        <li><link href="#" />Latest Designs</li>
        <li><link href="#" />Themes</li>
        <li><link href="#" />Popular Designs</li>
        <li><link href="#" />Art Skills</li>
        <li><link href="#" />New Uploads</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Legal</h4>
      <ul className="links">
        <li><link href="#" />Customer Agreement</li>
        <li><link href="#" />Privacy Policy</li>
        <li><link href="#" />GDPR</li>
        <li><link href="#" />Security</li>
        <li><link href="#" />Testimonials</li>
        <li><link href="#" />Media Kit</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Newsletter</h4>
      <p>
        Subscribe to our newsletter for a weekly dose
        of news, updates, helpful tips, and
        exclusive offers.
      </p>

    </div>
  </div>
</section>

    // <FooterContainer marginTop={5} component="footer">
    //   <Container maxWidth="lg">
    //     <Grid container spacing={4}>
    //       <SectionContainer item xs={12} sm={4}>
    //         <SectionTitle variant="h6" color="textPrimary" gutterBottom>
    //           Company
    //         </SectionTitle>
    //         <SectionLink href="#" variant="body2">
    //           About Us
    //         </SectionLink>
    //         <SectionLink href="#" variant="body2">
    //           Careers
    //         </SectionLink>
    //         <SectionLink href="#" variant="body2">
    //           Contact
    //         </SectionLink>
    //       </SectionContainer>
    //       <SectionContainer item xs={12} sm={4}>
    //         <SectionTitle variant="h6" color="textPrimary" gutterBottom>
    //           Services
    //         </SectionTitle>
    //         <SectionLink href="#" variant="body2">
    //           Product
    //         </SectionLink>
    //         <SectionLink href="#" variant="body2">
    //           Pricing
    //         </SectionLink>
    //         <SectionLink href="#" variant="body2">
    //           FAQ
    //         </SectionLink>
    //       </SectionContainer>
    //       <SectionContainer item xs={12} sm={4}>
    //         <SectionTitle variant="h6" color="textPrimary" gutterBottom>
    //           Social
    //         </SectionTitle>
    //         <SocialContainer>
    //           <IconButton
    //             href="https://www.facebook.com"
    //             target="_blank"
    //             color="primary"
    //             sx={{ mx: 1, '&:hover': { color: '#4267B2' } }}
    //           >
    //             <Facebook />
    //           </IconButton>
    //           <IconButton
    //             href="https://www.twitter.com"
    //             target="_blank"
    //             color="primary"
    //             sx={{ mx: 1, '&:hover': { color: '#1DA1F2' } }}
    //           >
    //             <Twitter />
    //           </IconButton>
    //           <IconButton
    //             href="https://www.instagram.com"
    //             target="_blank"
    //             color="primary"
    //             sx={{ mx: 1, '&:hover': { color: '#C13584' } }}
    //           >
    //             <Instagram />
    //           </IconButton>
    //           <IconButton
    //             href="https://www.youtube.com"
    //             target="_blank"
    //             color="primary"
    //             sx={{ mx: 1, '&:hover': { color: '#FF0000' } }}
    //           >
    //             <YouTube />
    //           </IconButton>
    //         </SocialContainer>
    //       </SectionContainer>
    //     </Grid>
    //     <Box mt={5}>
    //       <Typography variant="body2" color="textSecondary" align="center">
    //         {'© '}
    //         <Link color="inherit" href="https://your-website.com/">
    //           Your Website
    //         </Link>{' '}
    //         {new Date().getFullYear()}
    //         {'.'}
    //       </Typography>
    //     </Box>
    //   </Container>
    // </FooterContainer>
  );
};

export default Footer;
