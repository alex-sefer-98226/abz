import { connect } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { loadPositions } from "../redux/thunks/positionsThunk";
import { getPositions } from "../redux/selectors/getPositions";
import { getToken } from "../redux/selectors/getToken";
import { loadToken } from "../redux/thunks/tokenThunk";
import { MODAL_OPEN } from "../redux/constants/modal";
import { USERS_CLOSE } from "../redux/constants/userDetails";
import { REFRESH_USERS } from "../redux/constants/fetchUsers";
import { sendForm } from "../redux/thunks/sendForm";

const mapStateToProps = (state) => ({
  positions: getPositions(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadPositions: () => dispatch(loadPositions()),
  loadToken: () => dispatch(loadToken()),
  openModal: () => dispatch({ type: MODAL_OPEN }),
  closeUsers: () => {
    dispatch({ type: USERS_CLOSE });
    dispatch({ type: REFRESH_USERS });
  },
  sendInfo: (formData, token) => {
    console.log("dispatch", formData);
    dispatch(sendForm(formData, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
