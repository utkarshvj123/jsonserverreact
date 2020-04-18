import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../../components/Cards";
// import "node_modules/video-react/dist/video-react.css";
// import '~video-react/dist/video-react.css';
import { Player } from "video-react";
import { callingPutApi } from "../Dashboard/actions";

import "./style.scss";
import styled from "styled-components";
import { bindActionCreators } from "redux";

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

class DetailVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      olderApplicationData: {},
      selectedApplication: {},
      addedComment: [],
    };
  }

  componentDidMount() {
    if (!this.props.isValidUser) {
      this.props.history.push("/login");
    } else {
      this.setState({
        olderApplicationData: this.props.selectedApplicationDetail,
      });
      this.props.selectedApplicationDetail.videos.forEach((obj1) => {
        this.props.questionsData.filter((obj2) => {
          if (obj1.questionId === obj2.id) {
            obj1["question"] = obj2.question;
          }
        });
      });
      this.setState({
        selectedApplication: this.props.selectedApplicationDetail,
      });
    }
  }
  arrayCreation = [];
  containsObject = (list, index) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].index === index) {
        return true;
      }
    }
    return false;
  };
  inputChange = (e, index) => {
    if (this.containsObject(this.arrayCreation, index) === true) {
      this.arrayCreation.find((obj) => {
        if (obj.index === index) {
          obj.comments = e.target.value;
        }
      });
    } else return this.arrayCreation.push({ index, comments: e.target.value });
  };

  handleClickValue = (object, indexValue) => {
    let newValueArr = {};
    if (this.arrayCreation.length) {
      newValueArr = this.arrayCreation.find((obj) => {
        object.comments = obj.comments;
        this.state.olderApplicationData.videos.forEach((objState) => {
          if (objState.questionId === object.questionId) {
            objState.comments = obj.comments;
            delete objState.question;
          }
          delete objState.question;
        });
        return indexValue === obj.index;
      });

      this.props.callingPutApi(this.state.olderApplicationData);
      alert("Successfully saved");
      this.props.history.push("/dash");
    } else {
      console.log("see in else");
    }
  };

  render() {
    return (
      <div>
        <Container>
          {this.state.selectedApplication.videos
            ? this.state.selectedApplication.videos.map((objects, index) => (
                <Cards
                  key={objects.questionId}
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
                  // data={this.state.selectedApplication}
                  buttonClick={this.handleClickValue}
                  buttonName={"Detail's"}
                  body={false}
                  obj={objects}
                  index={index}
                >
                  <Player
                    playsInline
                    //   poster=""
                    src={objects.src}
                  />
                  <div className="question">
                    <h6>Question :</h6>
                    {objects.question}
                  </div>
                  <div className="question">
                    <h6>Comments :</h6>
                    <textarea
                      style={{ width: "60%" }}
                      type="text"
                      value={objects.comments !== "" ? objects.comments : null}
                      onChange={(e) => this.inputChange(e, index)}
                    ></textarea>
                  </div>
                </Cards>
              ))
            : null}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({
  isValidUser,
  dashBoardData: {
    candidateData,
    applicationData,
    questionsData,
    selectedApplicationDetail,
  },
}) => {
  return {
    isValidUser,
    candidateData,
    questionsData,
    applicationData,
    selectedApplicationDetail,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ callingPutApi }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailVideo);
