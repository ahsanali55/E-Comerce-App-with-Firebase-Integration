import React from "react";
import Items from "./Items";
import Summary from "./Summary";
import { useLoader } from "../../Toploader/LoaderContext";

const AddToCarts = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-11/12 max-w-[1080px] p-2 md:p-4  mx-auto flex flex-col gap-5">
        <Items />
        <Summary />
      </div>
    </section>
  );
};

export default AddToCarts;
