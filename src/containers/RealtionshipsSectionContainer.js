import { connect } from "react-redux";
import RelationshipsSection from "../components/RelationshipsSection/RelationshipsSection";
import { loadUsers } from "../redux/thunks/usersThunk";
import { getUsersList, getPage, hasMoreUsers } from "../redux/selectors/users";
import { getUsersDetailslStatus } from "../redux/selectors/getUsersDetailsStatus";
import { USERS_OPEN } from "../redux/constants/userDetails";

const mapStateToProps = (state) => ({
  users: getUsersList(state),
  page: getPage(state),
  hasMore: hasMoreUsers(state),
  isUsersOpened: getUsersDetailslStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadUsers: (page, count) => dispatch(loadUsers(page, count)),
  openMore: () => dispatch({ type: USERS_OPEN }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RelationshipsSection);
