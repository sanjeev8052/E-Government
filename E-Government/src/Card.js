import React from 'react'
import {Button} from '@material-ui/core'

const Card = () => {
    return (
        <div className="card" style={{width:"10rem"}}>
            <img src="" alt="Card" />
            <div className="card-body">
                    <h5>Card Titel</h5>
                    <p>Lorem ipsum dolor sit amet  officia iusto quos? Atque dolore veniam consectetur rem?</p>
                    <Button variant="text" color="default">
                      Click me!
                    </Button>
            </div>
        </div>
        // <div>
        //     <div  style={{width:"4rem"}>
        //         {/* <img className="card-img-top" src="..." alt="Card image cap" />
        //         <div className="card-body">
        //             <h5 className="card-title">Card title</h5>
        //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a href="#" className="btn btn-primary">Go somewhere</a>
        //         </div> */}
        //     </div>
        // </div>
    )
}

export default Card
