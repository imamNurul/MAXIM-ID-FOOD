import * as React from "react";
import { Avatar, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { imageSlideFood } from "./imageSlideFood";
import Slider from "react-slick";
import food from './../../../public/food.jpg'
import groceries from './../../../public/groceries.jpg'
import healtBeauty from './../../../public/healtBeauty.jpg'
import pashion from './../../../public/pashion.jpg'

const dataCat = [
    {
        id: 1,
        img: food,
        title: 'Food'
    },
    {
        id: 2,
        img: pashion,
        title: 'Fashion'
    },
    {
        id: 3,
        img: groceries,
        title: 'Groceries'
    },
    {
        id: 4,
        img: healtBeauty,
        title: 'Health & Beauty'
    },
    {
        id: 5,
        img: food,
        title: 'Gadget & Accessories'
    }
]

function SliderCatHome() {

    const setting = {
        // className: "center",
        dots: false,
        infinite: false,
        // centerPadding: "60px",
        slidesToShow: 4,
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
            {dataCat.map(img => (
            <Grid key={img.id} container spacing={1} className="slick-slide">
                <Grid item>
                <Card elevation={0} style={{
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Avatar 
                    alt={img.title}
                    src={img.img}
                    sx={{ width: 70, height: 70 }}
                    />
                    {/* <CardMedia
                        component="img"
                        height="50"
                        width="100"
                        image={img.img}
                        alt={img.title}
                        sx={{backgroundColor: 'transparent'}}
                    /> */}
                    <p style={{
                            color: 'black',
                            margin: '0px',
                            fontSize: '12px',
                            textAlign: 'center',
                            fontWeight: '700',
                            marginTop: '7px'
                            // whiteSpace: 'pre'
                        }}>
                        {img.title}
                        </p>
                </Card>
            </Grid>
            </Grid>
            
            
            ))}

            </Slider>
    )

}

export default SliderCatHome;