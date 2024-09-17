import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Fragment } from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const SimpleIcon = ({ code }) => {
    return (
        <span style={{
            font: 'icon',
            fontSize: '1.2rem',
            fontWeight: 'bold',
        }}>
            {code}
        </span>

    );
}

const Footer = () => {
    return (
        <Fragment>
            <Paper sx={{
                py: 2,
                px: 2,
                width: '100%',
                background: '#0561503B'
            }} square variant="outlined">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: '16px', md: '8px' },
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                    <Typography variant="body2" maxWidth='320px'>
                        Do not hesitate to contact me to discuss possible work or learn more about my work.
                    </Typography>
                    <Typography variant="body2">
                        <SimpleIcon code='&copy;' /> {new Date().getFullYear()} created by Diego Barrales
                    </Typography>
                    <Typography variant="body2">
                        <SimpleIcon code='&#64;' /> dbarrales06@gmail.com
                    </Typography>
                    <Grid container maxWidth='max-content' gap='4px'>
                        <Grid item>
                            <IconButton
                                aria-label="View Github"
                                size="large"
                                href="https://github.com/barrales-d"
                                target="_blank"
                                rel="noopener" >
                                <GitHubIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                aria-label="View LinkedIn"
                                size="large"
                                href="https://www.linkedin.com/in/diego-barrales-514aa61bb/"
                                target="_blank"
                                rel="noopener" >
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                aria-label="View Instagram"
                                size="large"
                                href="https://www.instagram.com/diegobarrales._/"
                                target="_blank"
                                rel="noopener" >
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Fragment>
    );
}

export default Footer;