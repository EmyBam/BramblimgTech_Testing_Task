import React from "react";
import Button from "reactstrap/es/Button";
import {compose} from "../../util";
import {withService} from "../HOC";
import {connect} from "react-redux";


const SettingItem = (props) => {

    return (
        <Button outline
                color="secondary"
                className={
                    `${(props.selectedItem && props.item) && (props.selectedItem.name === props.item.name) ?
                        'active' : ''}`
                }
                onClick={() => props.selectItem(props.item)}>
            {props.item && (props.item[props.language])}
        </Button>
    )
};

const mapStateToProps = ({
                             view: {language}
                         }) => {
    return {language}
};


export default compose(
    withService(),
    connect(mapStateToProps)
)(SettingItem);
