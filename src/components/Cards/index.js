import React from "react";
import "./style.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import ModalWrapper from "../ModalWrapper";

const CardContainer = styled.div`
  ${(props) => props.styleCss}
`;

const CardBody = styled.div`
  ${(props) => props.styleBody}
`;

const Cards = React.memo(
  ({
    cardBody,
    styleCss,
    data,
    buttonClick,
    buttonClass,
    buttonName,
    body,
    children,
    obj,
    index,
  }) => {
    return (
      <React.Fragment>
        <CardContainer className="card" key={obj.id} styleCss={styleCss}>
          <div className="card-body">
            {body ? (
              <CardBody className="row" styleBody={cardBody}>
                <div>Name :</div>
                <div>{obj.name}</div>
              </CardBody>
            ) : (
              children
            )}
          </div>
          <button
            className={buttonClass}
            onClick={() => buttonClick(obj, index)}
          >
            {buttonName}
          </button>
        </CardContainer>
      </React.Fragment>
    );
  }
);

Cards.defaultProps = {
  styleCss: {
    margin: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,.1)",
    borderRadius: "10px",
    minWidth: "200px",
  },
  obj: {},
  index: 0,
  body: true,
  buttonName: "Default",
  buttonClass: "btn btn-primary",
  buttonClick: () => {},
  data: [{ id: 0, tz: "ind", real_name: "default" }],
  cardBody: {
    fontSize: "medium",
    fontWeight: 600,
    margin: "3% 2% !important",
    justifyContent: "space-around",
  },
};
Cards.propTypes = {
  body: PropTypes.bool,
  buttonName: PropTypes.string,
  buttonClick: PropTypes.func,
  buttonClass: PropTypes.string,
  cardBody: PropTypes.object,
  data: PropTypes.array,
  cardMapping: PropTypes.object,
  styleCss: PropTypes.object,
  obj: PropTypes.object,
  index: PropTypes.number,
};

export default Cards;
