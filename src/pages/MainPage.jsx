import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import Footer from "../components/Footer/Footer";
import TitleSection from "../components/TitleSection/TitleSections";
import AboutSection from "../components/AboutSection/AboutSection";
import RelationshipsSection from "../containers/RealtionshipsSectionContainer";
import SignUpSection from "../components/SignUpSection/SignUpSection";
import BaseLayout from "../layouts/BaseLayout";

const MainPage = () => {
  return (
    <BaseLayout>
      <HeaderContainer />
      <TitleSection />
      <AboutSection />
      <RelationshipsSection />
      <SignUpSection />
      <Footer />
    </BaseLayout>
  );
};

export default MainPage;
