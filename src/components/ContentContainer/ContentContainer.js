import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {withService} from "../HOC";
import {compose, sortByPropertyAndDirection} from "../../util";
import PersonsPreview from "../PersonsPreview";
import PersonsTable from "../PersonsTable";

const ContentContainer = (props) => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        if(props.persons) {
            setPersons(props.persons)
        }
    }, [props.persons])

    useEffect(() => {
        if(props.sortingProperty && props.sortingOrder) {
            const personsArr = [...persons];
            const sortedPersons = sortByPropertyAndDirection(personsArr, props.sortingProperty.name, props.sortingOrder.name);
            setPersons(sortedPersons)
        }
    }, [props.sortingProperty, props.sortingOrder])

    return (
        <Fragment>
            {
                (props.viewType && props.viewType.name) === "preview" ?
                    <PersonsPreview persons={persons}/> :
                    <PersonsTable persons={persons}/>
            }
        </Fragment>
    )
};

const mapStateToProps = ({
                             persons: {persons},
                             view: {sortingProperty, sortingOrder, viewType}
                         }) => {
    return {persons, sortingProperty, sortingOrder, viewType}
};


export default compose(
    withService(),
    connect(mapStateToProps)
)(ContentContainer);

