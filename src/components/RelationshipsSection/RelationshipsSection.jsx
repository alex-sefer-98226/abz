import React from "react";
import HeaderOfSectionText from "../HeaderOfSectionText";
import SubheaderOfSectionText from "../SubheaderOfSectionText";
import styles from "./RelationshipSection.module.css";
import UserCard from "../UserCard/UserCard";
import { countUserPerPage } from "../../constants/index";

export default class RelationshipsSection extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.loadUsers(1, countUserPerPage);
    }
  }
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      this.props.loadUsers(1, countUserPerPage);
    }
  }

  loadMore() {
    this.props.loadUsers(this.props.page + 1, countUserPerPage);
    this.props.openMore();
  }
  render() {
    return (
      <section
        className=" RelationshipsSection"
        style={{ backgroundColor: "rgb(249,249,243)" }}
      >
        <HeaderOfSectionText>Our cheerful users</HeaderOfSectionText>
        <SubheaderOfSectionText>
          Attention! Sorting users by registration date
        </SubheaderOfSectionText>
        <div className={styles.cardContainer}>
          {this.props.users.length === 0
            ? null
            : this.props.users.map((item) => (
                <UserCard item={item} key={item.id} />
              ))}
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              disabled={!this.props.hasMore}
              onClick={this.loadMore.bind(this)}
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    );
  }
}
