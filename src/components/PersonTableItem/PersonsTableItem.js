import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {personDataConstants} from "../../constants";
import {compose} from "../../util";
import {withService} from "../HOC";
import {connect} from "react-redux";

const PersonsTableItem = (props) => {

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);
    const [favourite, setFavourite] = useState(null);
    const [ageText, setAgeText] = useState(null);

    useEffect(() => {
        if(props.language) {
            const ageTextConst = personDataConstants.find(item => item.name === "age");
            const currentAgeText = ageTextConst[props.language];
            setAgeText(currentAgeText);
        }
    }, [props.language])

    useEffect(() => {
        if (props.person) {
            const {id, name, age, phone, favourite} = props.person;
            setId(id);
            setName(name);
            setAge(age);
            setPhone(phone);
            setFavourite(favourite);
        }
    });

    return (
        <tr>
            <td>{name}</td>
            <td>{`${age} ${ageText}`}</td>
            <td>{phone}</td>
            <td onClick={() => props.toggleFavourite(id)}>
                    {
                        favourite ?
                            <FontAwesomeIcon icon={faStar}/> :
                            <FontAwesomeIcon icon={faStar} style={{opacity: '0.2'}}/>
                    }
            </td>
        </tr>
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
)(PersonsTableItem);

