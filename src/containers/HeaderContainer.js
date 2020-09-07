import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { getMenuStatus } from "../redux/selectors/getMenuStatus";
import { MENU_OPEN, MENU_CLOSE } from "../redux/constants/menu";

const mapStateToProps = (state) => ({
  menuStatus: getMenuStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  openMenu: () => dispatch({ type: MENU_OPEN }),
  closeMenu: () => dispatch({ type: MENU_CLOSE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
