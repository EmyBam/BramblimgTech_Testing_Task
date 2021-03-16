import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withService} from "../HOC";
import {compose} from "../../util";
import SettingItem from "../SettingsItem";
import {sortingPropertyConstants, sortingOrderConstants, headerConstants} from "../../constants"
import ButtonToolbar from "reactstrap/es/ButtonToolbar";

const SortingSettings  = (props) => {

    const [selectedPropertyItem, setSelectedPropertyItem] = useState(null);
    const [selectedOrderItem, setSelectedOrderItem] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        if(props.language) {
            const titleConst = headerConstants.find(item => item.name === "sorting");
            const currentTitle = titleConst[props.language];
            setTitle(currentTitle);
        }
    }, [props.language])

    useEffect(() => {
        if(props.sortingProperty && props.sortingOrder) {
            setSelectedPropertyItem(props.sortingProperty);
            setSelectedOrderItem(props.sortingOrder);
        }
    })

    const selectPropertyItem = (item) => {
        setSelectedPropertyItem(item);
        props.sortByProperty(item);
    };

    const selectOrderItem = (item) => {
        setSelectedOrderItem(item);
        props.sortByOrder(item);
    };

    return (
        <div>
            <h5 className="pb-4">{title}</h5>
            <ButtonToolbar className="pb-2">
                {
                    sortingPropertyConstants.map(item => {
                        return <SettingItem selectItem={(item) => selectPropertyItem(item)}
                                            item={item}
                                            selectedItem={selectedPropertyItem} />
                    })
                }
            </ButtonToolbar>
            <ButtonToolbar className="pb-4">
                {
                    sortingOrderConstants.map(item => {
                        return <SettingItem selectItem={(item) => selectOrderItem(item)}
                                            item={item}
                                            selectedItem={selectedOrderItem} />
                    })
                }
            </ButtonToolbar>
        </div>
    )
};

const mapStateToProps = ({
                             view: {sortingProperty, sortingOrder, language}
                         }) => {
    return {sortingProperty, sortingOrder, language}
};

export default compose(
    withService(),
    connect(mapStateToProps)
)(SortingSettings);

