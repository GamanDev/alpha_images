import ImageC from "@/components/ImageC";

const First = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {"qwerty".split("").map((i, k) => (
        <ImageC key={i} i={i} k={k} />
      ))}
    </div>
  );
};

export default First;
