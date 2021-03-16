import React, {useEffect} from "react";
import "./LandSwitcher.css"
import {switchLanguage} from "../../actions";
import {compose} from "../../util";
import {withService} from "../HOC";
import {connect} from "react-redux";
import ButtonToolbar from "reactstrap/es/ButtonToolbar";
import Button from "reactstrap/es/Button";
import Col from "reactstrap/es/Col";


const LangSwitcher = (props) => {

    useEffect(() => {
        if (!props.language) {
            props.switchLanguage('rus')
        }
    })

    return (
        <Col sm={{size: 2, order: 1, offset: 10}}>
            <ButtonToolbar className="pb-2 pt-3 ml-auto">
                <Button outline
                        color="secondary"
                        size="sm"
                        onClick={() => props.switchLanguage('eng')}
                        className={`${props.language && (props.language === 'eng') ? 'active' : ''}`}
                >
                    ENG
                </Button>
                <Button outline
                        color="secondary"
                        size="sm"
                        onClick={() => props.switchLanguage('rus')}
                        className={`${props.language && (props.language === 'rus') ? 'active' : ''}`}
                >
                    RUS
                </Button>
            </ButtonToolbar>
        </Col>

    )
};

const mapStateToProps = ({
                             view: {language}
                         }) => {
    return {language}
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchLanguage: (lang) => switchLanguage(dispatch, lang)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LangSwitcher);

