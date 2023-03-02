import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Banner from './Banner';
function Slider(props:any)
{
    var items = [
        {
            name: "/images/chicago_skyline.jpg",
            size: "600px",
            text: "Strive for the best."
        },
        {
            name: "/images/fe-stockphoto.png",
            size: '600px',
            text: "Find a supportive community."
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Banner imgsrc={item.name} ht={item.size}>{item.text}</Banner> )
            }
        </Carousel>
    )
}

export default Slider;