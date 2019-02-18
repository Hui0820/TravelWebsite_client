import { fromJS } from "immutable";
import { constants } from ".";

//set the access Modal state as false, when click the Post menu
const defaultPostState = fromJS({
  accessModalVisible: false
});

export default (state = defaultPostState, action) => {
  switch (action.type) {
    case constants.ACCESS_DENIED_MODAL:
      return state.set("accessModalVisible", true);
    case constants.REGISTER_OK:
      return state.set("accessModalVisible", false);
    case constants.REGISTER_CANCEL:
      return state.set("accessModalVisible", false);
    default:
      return state;
  }
};