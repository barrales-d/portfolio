import { Box, Grid, Paper, Typography } from "@mui/material";
import { Fragment } from "react";


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
                    flexDirection: {xs:'column', md:'row'},
                    gap: {xs:'16px', md:'8px'},
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                    <Typography variant="body2" maxWidth={'320px'}>
                        Do not hesitate to contact me to discuss possible work or learn more about my work.
                    </Typography>
                    <Typography variant="body2">
                        &copy; 2024 created by Diego Barrales
                    </Typography>
                    <Typography variant="body2">
                        dbarrales06@gmail.com
                    </Typography>
                    <Grid container maxWidth={'max-content'} gap={'4px'}>
                        <Grid item>4</Grid>
                        <Grid item>5</Grid>
                        <Grid item>6</Grid>
                    </Grid>
                </Box>
            </Paper>
        </Fragment>
    );
}

export default Footer;