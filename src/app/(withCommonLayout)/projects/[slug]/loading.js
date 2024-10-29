"use client";
import { Skeleton } from "antd";
import React from "react";

const loading = () => {
  return (
    <div className="py-10 px-4">
      <Skeleton active paragraph={{ rows: 14 }} />
    </div>
  );
};

export default loading;
