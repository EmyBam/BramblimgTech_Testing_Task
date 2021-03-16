import React, {useState, useEffect} from "react";
import "./PersonsPreviewItem.css"
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {compose} from "../../util";
import {withService} from "../HOC";
import {connect} from "react-redux";
import {personDataConstants} from "../../constants"
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardImg from "reactstrap/es/CardImg";
import Row from "reactstrap/es/Row";


const PersonsPreviewItem = (props) => {

    const [id, setId] = useState(null);
    const [favourite, setFavourite] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);
    const [image, setImage] = useState(null);
    const [phrase, setPhrase] = useState(null);
    const [video, setVideo] = useState(null);
    const [ageText, setAgeText] = useState(null);

    useEffect(() => {
        if (props.language) {
            const ageTextConst = personDataConstants.find(item => item.name === "age");
            const currentAgeText = ageTextConst[props.language];
            setAgeText(currentAgeText);
        }
    }, [props.language])

    useEffect(() => {
        if (props.person) {
            const {id, favourite, name, age, phone, image, phrase, video} = props.person;
            setId(id);
            setFavourite(favourite);
            setName(name);
            setAge(age);
            setPhone(phone);
            setImage(image);
            setPhrase(phrase);
            setVideo(video)
        }
    })

    return (
        <div className={`col-md-${video ? "12" : "6"} col-xs-12`}>
            <Card style={{height: "100%"}}>

                <CardBody>
                    <Row>
                        <div className={`col-md-${video ? "6" : "12"} col-xs-12`}>
                            <div className="d-flex">
                                <div className={`${video && 'pr-4'}`}>
                                    <div className="d-flex align-items-center mb-3">
                                        <CardImg className="avatar" src={`images/${image}.svg`} alt="Avatar"/>
                                        <h5 className="ml-2">{name}</h5>
                                        <div className="ml-auto" onClick={() => props.toggleFavourite(id)}>
                                            {
                                                favourite ?
                                                    <FontAwesomeIcon icon={faStar}/> :
                                                    <FontAwesomeIcon icon={faStar} style={{opacity: '0.2'}}/>
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <p className="card-text">{`${age} ${ageText}`}</p>
                                        <p className="card-text">{phone}</p>
                                        <p className="card-text">{phrase}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                            {
                                video &&
                                <div className="col-md-6 col-xs-12">
                                    <div className="card-image">
                                        <video height="240vh" controls muted>
                                            <source src={`videos/${video}.mp4`} type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>

                            }

                    </Row>



                </CardBody>

            </Card>
        </div>
    )
};


const mapStateToProps = ({
                             view: {viewType, language}
                         }) => {
    return {viewType, language}
};

export default compose(
    withService(),
    connect(mapStateToProps)
)(PersonsPreviewItem);

