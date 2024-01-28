"use client";
import React from "react";
import Flow from "./DAGGraph";

type Params = {
  graphId: string;
};

export default function Page({ params: { graphId } }: { params: Params }) {
  return (
    <div className="w-full h-screen">
      {/* <div>graph page: {graphId}</div> */}
      <Flow />
    </div>
  );
}
