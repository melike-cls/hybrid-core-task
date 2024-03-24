"use client";

import React from "react";
import PhotoUploadPage from "./components/photoUpload";
import Layout from "../layout";

const Page = () => {
  return (
    <Layout useLayout={false}>
      <PhotoUploadPage />
    </Layout>
  );
};

export default Page;
