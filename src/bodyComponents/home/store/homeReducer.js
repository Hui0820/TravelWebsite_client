import {fromJS} from "immutable";
import {constants} from ".";

const defaultHomeState = fromJS({
	diaryCardList: [],
	page: 0,
	totalPage: 1
})

export default (state = defaultHomeState, action) => {
	switch (action.type) {
		case constants.RENEW_DIARY_CARD_LIST:
			return state.merge({
				diaryCardList: action.data,
				totalPage: action.totalPage
			})
		case constants.RENEW_PAGE:
			return state.set('page',action.data);
		default:
			return state;
	}
}