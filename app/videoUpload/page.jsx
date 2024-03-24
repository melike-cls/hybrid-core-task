"use client";

import React from "react";
import VideoUploadPage from "./components/videoUpload";
import Layout from "../layout";

const Page = () => {
  return (
    <Layout useLayout={false}>
      <VideoUploadPage />
    </Layout>
  );
};

export default Page;
