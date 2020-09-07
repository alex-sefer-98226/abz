import React from "react";
import HeaderOfSectionText from "../HeaderOfSectionText";
import SubheaderOfSectionText from "../SubheaderOfSectionText";
import RegistrationForm from "../../containers/RegistartionForm";
import Modal from "../../containers/ModalContainer";
import style from "./Signup.module.css";

const SignUpSection = () => {
  return (
    <>
      <div className={style.sectionContent} id={"reg"}>
        <HeaderOfSectionText>Register to get a work</HeaderOfSectionText>
        <SubheaderOfSectionText>
          Attention! After successful registration and alert, update the <br />
          list of users in the block from the top
        </SubheaderOfSectionText>
        <RegistrationForm />
      </div>

      <Modal />
    </>
  );
};

export default SignUpSection;
