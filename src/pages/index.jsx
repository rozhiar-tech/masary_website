import React from "react";
import Layout from "@/layout/layout";
import Layout2 from "@/layout/layout-2";
import HomeOne from "@/components/home/home/home";
import HomeTwo from "@/components/home/home-2/hometwo";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout2>
        <HomeTwo />
      </Layout2>
    </Wrapper>
  );
};

export default index;
