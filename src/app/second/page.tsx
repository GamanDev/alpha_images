import ImageC from "@/components/ImageC";
import React from "react";

const Second = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {"qwerty".split("").map((i, k) => (
        <ImageC key={i} i={i} k={k + 6} />
      ))}
    </div>
  );
};
export default Second;
