import React from 'react'
var Slider = require('react-slick');
import { Button } from '@material-ui/core'

const Card = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            {/* <div className="card m-5" style={{ width: "10rem" }}>
                <img src="" alt="Card" />
                <div className="card-body">
                    <h5>Card Titel</h5>
                    <p>Lorem ipsum dolor sit amet  officia iusto quos? Atque dolore veniam consectetur rem?</p>
                    <Button variant="text" color="default">
                        Click me!
                    </Button>
                </div>
            </div> */}
            {/* <Slider {...settings}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider> */}
        </>

    )
}

export default Card
