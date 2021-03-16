import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withService} from "../HOC";
import {compose} from "../../util";
import SettingItem from "../SettingsItem";
import {headerConstants, viewConstants} from "../../constants"
import ButtonToolbar from "reactstrap/es/ButtonToolbar";


const ContentViewSettings  = (props) => {

    const [selectedViewType, setSelectedViewType] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        if(props.language) {
            const titleConst = headerConstants.find(item => item.name === "view");
            const currentTitle = titleConst[props.language];
            setTitle(currentTitle);
        }
    }, [props.language])


    useEffect(() => {
        if(props.viewType) {
            setSelectedViewType(props.viewType);
        }
    })

    const selectViewType = (item) => {
        setSelectedViewType(item);
        props.setViewType(item);
    };

    return (
        <div>
            <h5 className="pb-4">{title}</h5>
            <ButtonToolbar>
                {
                    viewConstants.map(item => {
                        return <SettingItem selectItem={(item) => selectViewType(item)}
                                            item={item}
                                            selectedItem={selectedViewType} />
                    })
                }
            </ButtonToolbar>
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
)(ContentViewSettings);

