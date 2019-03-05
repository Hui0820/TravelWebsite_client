import {constants} from ".";
import axios from 'axios';

//sync the producer
const errMsg = (msg) => ({
	type: constants.ERROR_MSG,
	data: msg
})

const errLoginMsg = (msg) => ({
	type: constants.ERROR_LOGINMSG,
	data: msg
})

const modifyLoginStatus = () => ({
	type: constants.MODIFY_LOGIN_STATUS,
	data: true
})

const authSuccess = (user) => ({
	type: constants.AUTH_SUCCESS,
	data: user
})

const loginSuccess = (user) => ({
	type: constants.LOGIN_SUCCESS,
	data: user
})

const clearMsg = () => ({
	type: constants.CLEAR_MSG
})

export const handleClearMsgAction = () => {
	return dispatch => {
		dispatch(clearMsg());
	}
}

export const handleRegisterAction = (user) => {
	const {username, password1, password2, email} = user;
	//
	return dispatch => {
		if (!username) {
			dispatch(errMsg('username can not be empty'));
		} else if (password1 !== password2) {
			dispatch(errMsg('passwords do not match'));
		} else {
			axios.post('/register', {
				username: username,
				password: password1,
				email: email
			}).then((res) => {
				const result = res.data;
				if (result.code) {
					dispatch(authSuccess(result.data));
					dispatch(modifyLoginStatus());
				} else {
					dispatch(errMsg(result.registerMsg));
				}
			})
		}
	}
}

export const handleLoginAction = (user) => {
	const {username, password} = user;

	return dispatch => {
		if (!username) {
			dispatch(errLoginMsg('username can not be empty'));
		} else if (!password) {
			dispatch(errLoginMsg('Password can not be empty'));
		} else {
			axios.post('/login', {
				username: username,
				password: password
			}).then((res) => {
				const result = res.data;
				if (result.code) {					
					dispatch(loginSuccess(result.data));
					dispatch(modifyLoginStatus());
				} else {
					dispatch(errLoginMsg(result.loginMsg));
				}
			})
		}
	}

}