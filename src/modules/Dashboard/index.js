import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards";
import { bindActionCreators } from "redux";
import {
  getQuestions,
  getApplication,
  selectedApplicationData,
} from "./actions";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 10%;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 10% 5%;
  }
  @media screen and (max-width: 767px) and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 10% 5%;
  }
  @media screen and (max-width: 1680px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 10% 5%;
  }
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: {},
    };
  }

  componentDidMount() {
    this.props.getApplication();
    this.props.getQuestions();
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, "...props...", state);
    if (props.candidateData.length !== state.data.length)
      return { data: props.candidateData };
    else return state;
  }

  handleClickValue = (value) => {
    this.setState({ selected: value });
    console.log(value, this.props);
    const newValue = this.props.applicationData.find((obj) => {
      return obj.id === value.applicationId;
    });
    console.log(newValue, "....new");

    if (newValue === undefined) return alert("no video found");
    else {
      this.props.selectedApplicationData(newValue);
      this.props.history.push("/information");
      return console.log("founded video");
    }
  };

  render() {
    const { data } = this.state;
    console.log(data.length);
    return (
      <div>
        <Container>
          {data.length > 0
            ? data.map((obj, index) => (
                <Cards
                  key={obj.id}
                  styleCss={{
                    margin: "20px",
                    boxShadow: "0 20px 50px rgba(0,0,0,.1)",
                    borderRadius: "10px",
                    minWidth: "200px",
                  }}
                  cardBody={{
                    fontSize: "medium",
                    fontWeight: 600,
                    margin: "3% 2% !important",
                    justifyContent: "space-between",
                  }}
                  data={data}
                  index={index}
                  obj={obj}
                  buttonClick={this.handleClickValue}
                  buttonName={"Detail's"}
                />
              ))
            : null}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({
  isValidUser,
  dashBoardData: { candidateData, applicationData, questionsData },
}) => {
  return {
    isValidUser,
    candidateData,
    questionsData,
    applicationData,
    selectedApplicationData,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators(
      { getApplication, getQuestions, selectedApplicationData },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
