import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withService} from "../HOC";
import {compose} from "../../util";
import {fetchAllPersons, setViewType, sortByOrder, sortByProperty} from '../../actions'
import ContentViewSettings from "../ContentViewSettings/ContentViewSettings";
import SortingSettings from "../SortingSettings/SortingSettings";
import ContentContainer from "../ContentContainer/ContentContainer";
import history from "../../history";
import {sortingPropertyConstants, sortingOrderConstants, viewConstants} from "../../constants"
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import LangSwitcher from "../LangSwitcher/LangSwitcher";


const App = (props) => {

    const [sortingPropertyName, setSortingPropertyName] = useState("");
    const [sortingOrderName, setSortingOrderName] = useState("");
    const [viewType, setViewTypeName] = useState("");

    useEffect(() => {
        const defaultSortParam = sortingPropertyConstants.find(item => item.name === "id");
        const defaultSortOrder = sortingOrderConstants.find(item => item.name === "asc");
        const defaultViewType = viewConstants.find(item => item.name === "preview");
        setSortingPropertyName(defaultSortParam.name);
        setSortingOrderName(defaultSortOrder.name);
        setViewTypeName(defaultViewType.name);
    }, [])

    useEffect(() => {
        const query = new URLSearchParams();
        query.set("sortParam", sortingPropertyName);
        query.set("sortOrder", sortingOrderName);
        query.set("viewType", viewType);
        history.push(`/?${query}`);
    })

    useEffect(() => {
        const query = new URLSearchParams(document.location.search.substring(1));
        const sortParamName = query.get("sortParam");
        const sortOrderName = query.get("sortOrder");
        const viewTypeName = query.get("viewType");
        const sortParam = sortingPropertyConstants.find(item => item.name === sortParamName);
        const sortOrder = sortingOrderConstants.find(item => item.name === sortOrderName);
        const viewType = viewConstants.find(item => item.name === viewTypeName);
        props.sortByProperty(sortParam);
        props.sortByOrder(sortOrder);
        props.setViewType(viewType);
    })

    useEffect(() => {
        props.fetchAllPersons()
    }, [])

    return (
        <Container className="themed-container" fluid="md">
            <Row>
                <LangSwitcher/>
            </Row>
            <Row>
                <Col className="col-md-6 col-sm-12">
                    <SortingSettings sortByProperty={(property) => setSortingPropertyName(property.name)}
                                     sortByOrder={(order) => setSortingOrderName(order.name)}/>
                </Col>
                <Col className="col-md-6 col-sm-12">
                    <ContentViewSettings setViewType={(type) => setViewTypeName(type.name)}/>
                </Col>
            </Row>
            <ContentContainer/>
        </Container>

    )
};

const mapStateToProps = ({
                             persons: {personsLoading, personsError},
                             view: {sortingProperty, sortingOrder, viewType}
                         }) => {
    return {personsLoading, personsError, sortingProperty, sortingOrder, viewType}
};

const mapDispatchToProps = (dispatch, {service}) => {
    return {
        fetchAllPersons: () => fetchAllPersons(service, dispatch),
        sortByProperty: (property) => sortByProperty(dispatch, property),
        sortByOrder: (order) => sortByOrder(dispatch, order),
        setViewType: (type) => setViewType(dispatch, type)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);

