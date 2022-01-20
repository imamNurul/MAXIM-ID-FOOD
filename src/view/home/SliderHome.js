import * as React from "react";
import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { imageSlideFood } from "./imageSlideFood";
import Slider from "react-slick";

function SliderHome() {

    const setting = {
        // className: "center",
        dots: false,
        infinite: false,
        // centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,
        slidesToScroll: 1,
        
        afterChange: function(index) {
            console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    }

    return(
        
            <Slider {...setting}>
            {imageSlideFood.map(img => (
            <Grid container spacing={1} className="slick-slide">
                <Grid item>
                <Card style={{
                    borderRadius: '10px'
                }}>
                    <CardMedia
                        component="img"
                        height="130"
                        width="230"
                        image={img.url}
                        alt={img.name}
                    />
                    <CardContent style={{
                        backgroundColor: 'black',
                        padding: '7px'
                    }}>
                        <p style={{
                            color: 'orange',
                            margin: '0px',
                            fontSize: '14px',
                            whiteSpace: 'pre'
                        }}>
                        {img.name}
                        </p>
                        <p style={{
                            color: 'white',
                            margin: '0px',
                            fontSize: '12px'
                        }}>
                        {img.price}
                        </p>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            
            
            ))}

            </Slider>
    )

}

export default SliderHome;