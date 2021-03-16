import React from "react";
import PersonsPreviewItem from "../PersonsPreviewItem/PersonsPreviewItem";
import {toggleFavourite} from "../../actions";
import {compose} from "../../util";
import {withService} from "../HOC";
import {connect} from "react-redux";
import Row from "reactstrap/es/Row";


const PersonsPreview = (props) => {

    return (
        <Row>
            {
                (props.persons && props.persons.length) &&
                props.persons.map((person) => {
                    return <PersonsPreviewItem key={person.id}
                                               person={person}
                                               toggleFavourite={(id) => props.toggleFavourite(id)}
                    />
                })
            }
        </Row>
    )
};

const mapStateToProps = ({}) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFavourite: (id) => toggleFavourite(dispatch, id)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PersonsPreview);

