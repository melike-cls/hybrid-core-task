"use client";
import React from "react";
import DocumentUploadPage from "./components/documentUpload";
import Layout from "../layout";
const Page = () => {
  return (
    <Layout useLayout={false}>
      <DocumentUploadPage />
    </Layout>
  );
};

export default Page;
