import React from "react";
import { Table } from 'reactstrap';
import PersonsTableItem from "../PersonTableItem";
import {toggleFavourite} from "../../actions";
import {compose} from "../../util";
import {withService} from "../HOC";
import {connect} from "react-redux";


const PersonsTable = (props) => {

    return (
        <Table className="table-striped">
            <tbody>
            {
                (props.persons && props.persons.length) &&
                props.persons.map(person => {
                        return <PersonsTableItem key={person.id}
                                                 person={person}
                                                 toggleFavourite={(id) => props.toggleFavourite(id)}
                        />
                    }
                )
            }
            </tbody>
        </Table>
    )
}


const mapStateToProps = ({}) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFavourite: (id) => toggleFavourite(dispatch, id),
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PersonsTable);

