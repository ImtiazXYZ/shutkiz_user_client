import React from "react";
import SingleOrder from "../../../../_components/Profile/SingleOrder"
const page = async ({ params }) => {
  const { id } = params;
  console.log(id);
  return (
    <SingleOrder slug={id}/>
  );
};

export default page;
