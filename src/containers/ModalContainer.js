import { connect } from "react-redux";
import Modal from "../components/Modal/Modal";
import { getModalStatus } from "../redux/selectors/getModalStatus";
import { MODAL_CLOSE } from "../redux/constants/modal";
import { getFormStatus } from "../redux/selectors/getFormStatus";
import { getResponse } from "../redux/selectors/getResponse";

const mapStateToProps = (state) => ({
  isShown: getModalStatus(state),
  isFormLoading: getFormStatus(state),
  response: getResponse(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeUp: () => dispatch({ type: MODAL_CLOSE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
