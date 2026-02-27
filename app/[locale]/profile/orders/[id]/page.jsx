import React from "react";
import SingleOrder from "../../../../_components/Profile/SingleOrder"
const page = async ({ params }) => {
  const { id } = params;
  return (
    <SingleOrder slug={id}/>
  );
};

export default page;
