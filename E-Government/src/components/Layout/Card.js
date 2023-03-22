import React from 'react'
var Slider = require('react-slick');
import { Button, makeStyles, Typography } from '@material-ui/core'
import complaintImage from '../../Images/complaint.jpg'
import billPayImage from '../../Images/billpay.jpg'
import certificateImage from '../../Images/certificate.png'
import meterImage from '../../Images/meter.png'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    cardBox: {
        display: "flex",
        background: "linear-gradient(to top right ,rgb(48, 94, 234),rgb(214, 245, 214))",
        padding: "2rem",
        margin: "2rem",
        border: " solid 1px",
        borderRadius: "10px",
        backgroundSize: "cover"

    },
    card: {
        margin: "2rem",
        borderRadius: "10px",
        boxShadow: "3px 3px 6px ",
        backgroundColor: "gray",
        width: "20rem",
        padding: "2rem"
    },

    button: {

        width: "100%",
        color: "primary",
        marginTop: "1rem "
    },
    img: {
        height: "17rem",
        width: "16rem",
        borderRadius: "5px",
        boxShadow: "2px 2px 4px",
        marginBottom: "1rem"
    }

})
const Card = () => {

    const css = useStyle();

    return (
        
        <div className={css.cardBox}>
            <div className={css.card}>
                <img className={css.img} src={complaintImage} alt="Card" />
                <div className="card-body">
                    <Typography sx={{ margin: "1rem" }} variant="h6" color="initial">register your complaint and track the complaint status. </Typography>
                    <Button className={css.button} variant="text" color="default">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className={css.button} variant="contained" color='primary' {...bindTrigger(popupState)}>
                                        Complaint
                                    </Button>
                                    <Menu  {...bindMenu(popupState)}>
                                        <MenuItem component={Link} to='/complaint'>Add New Complaint</MenuItem>
                                        <MenuItem >My account</MenuItem>
                                        <MenuItem >Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                    </Button>
                </div>
            </div>
            <div className={css.card}>
                <img className={css.img} src={billPayImage} alt="Card" />
                <div className="card-body">
                    <Typography sx={{ margin: "1rem" }} variant="h6" color="initial">register your complaint and track the complaint status. </Typography>
                    <Button className={css.button} variant="text" color="default">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className={css.button} variant="contained" color='primary' {...bindTrigger(popupState)}>
                                        Bill payment
                                    </Button>
                                    <Menu  {...bindMenu(popupState)}>
                                        <MenuItem component={Link} to='/billPay'>New Payment</MenuItem>
                                        <MenuItem onClick={popupState.close}>Your Transactions</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                    </Button>
                </div>
            </div>
            {/* <div className={css.card}>
                <img className={css.img} src={certificateImage} alt="Card" />
                <div className="card-body">
                    <Typography sx={{ margin: "1rem" }} variant="h6" color="initial">register your complaint and track the complaint status. </Typography>
                    <Button className={css.button} variant="text" color="default">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className={css.button} variant="contained" color='primary' {...bindTrigger(popupState)}>
                                       Certificate
                                    </Button>
                                    <Menu  {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                    </Button>
                </div>
            </div> */}
            <div className={css.card}>
                <img className={css.img} src={meterImage} alt="Card" />
                <div className="card-body">
                    <Typography sx={{ margin: "1rem" }} variant="h6" color="initial">register your complaint and track the complaint status. </Typography>
                    <Button className={css.button} variant="text" color="default">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className={css.button} variant="contained" color='primary' {...bindTrigger(popupState)}>
                                      Apply Meter   
                                    </Button>
                                    <Menu  {...bindMenu(popupState)}>
                                        <MenuItem component={Link} to='meterApply'>Apply Meter</MenuItem>
                                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                    </Button>
                </div>
            </div>
            <div className={css.card}>
                <img className={css.img} src={meterImage} alt="Card" />
                <div className="card-body">
                    <Typography sx={{ margin: "1rem" }} variant="h6" color="initial">Apply For Income Certificae and Download Income Certificate. </Typography>
                    <Button className={css.button} variant="text" color="default">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button className={css.button} variant="contained" color='primary' {...bindTrigger(popupState)}>
                                      Apply Meter   
                                    </Button>
                                    <Menu  {...bindMenu(popupState)}>
                                        <MenuItem component={Link} to='incomeCer'>Apply For  Income Certificate</MenuItem>
                                        <MenuItem onClick={popupState.close}>Download Certificate</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Card
