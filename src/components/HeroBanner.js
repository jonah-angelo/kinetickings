import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import muscle from '../assets/images/lift.jpg';


const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p='20px'>
            <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>

            <Typography fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb='23px' mt='30px'
            >
                Awaken the <br />warrior within.
            </Typography>

            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                Check out the most popular exercises
            </Typography>

            <Button variant='contained' color='error' ahref='#exercises'
                sx={{ background: '#ff2625', padding: '10px' }}
            >
                Explore Exercises
            </Button>

            <Typography
                fontWeight={600}
                color='662625'
                sx={{
                    opacity: '0.1',
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize='200px'
            >
                Exercises
            </Typography>

            <img src={muscle} alt="hero-banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner