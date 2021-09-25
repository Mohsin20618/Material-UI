import * as React from 'react';
import b1 from '../../Images/b1.jpg'
import p1 from '../../Images/p1.jpg'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Home() {

    return (
    <div className='home'>
     
        <h1>LAPTOPS: </h1>
        <div className='card'>
            <Grid container spacing={2}>
                <Grid item xs={8} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={p1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={p1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={p1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={p1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={p1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} sm={6} md={4} >
                    <Card sx={{ maxWidth: 345 }}>

                        <CardMedia
                            component="img"
                            height="194"
                            image={p1}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </div>
        </div>

    );
}

export default Home;