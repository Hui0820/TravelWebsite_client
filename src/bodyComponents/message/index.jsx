import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Tab, ListGroup, Row, Col } from "react-bootstrap";
import { Icon } from "antd";
import MessageList from "./components/MessageList";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {Map} from "immutable";

class Message extends Component {
  
  render() {
    const {loginUser,msgList} = this.props;

    const unReadCount = Map(msgList).get("unReadCount");
    return (
      <div className="container wrap">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#message">
          <Row>
            <Col sm={4}>
              <ListGroup style={{ fontSize: "17px" }}>
                <ListGroup.Item action href="#message">
                  <Icon
                    type="wechat"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Message
                  <span className="badge badge-primary badge-pill offset-1">{unReadCount?unReadCount:null}</span>
                </ListGroup.Item>
                <ListGroup.Item action href="#likes">
                  <Icon
                    type="heart"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Likes
                </ListGroup.Item>
                <ListGroup.Item >
                  <Link to={"/favorite/" + loginUser._id}>
                    <Icon type="star" style={{ float: "left", margin: "2.5%" }} />
                    My Favorite
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action href="#watch">
                  <Icon
                    type="user-add"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Watch
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#message">
                  <MessageList msgList={this.props.msgList} loginUser={this.props.loginUser}/>
                </Tab.Pane>
                <Tab.Pane eventKey="#likes">Likes</Tab.Pane>
                <Tab.Pane eventKey="#favorite">
                  {/*<Favorite/>*/}
                </Tab.Pane>
                <Tab.Pane eventKey="#watch">Watch</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msgList: state.getIn(["message", "msgList"]),
    loginUser:state.getIn(['login',"loginUser"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetUserList() {
      dispatch(actionCreators.getUserListAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
