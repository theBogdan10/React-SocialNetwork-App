/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Dialogs from './Dialogs';
import {updtNewMsgBodyCreator,sendMsgCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';


let mapStateToProps=(state)=>{
	return{
		dialogsPage:state.dialogsPage,
	};
};

let mapDispatchToProps=(dispatch)=>{
	return{
		updtNewMsgBody:(body)=>{
			dispatch(updtNewMsgBodyCreator(body));
		},
		sendMessage:()=>{
			dispatch(sendMsgCreator());

		}
	};
};

const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
