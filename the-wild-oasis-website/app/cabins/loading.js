import Spinner from "../_component/Spinner";
export default function Loading() {
  return (
    <div className=" grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200">Loading cabin data...</p>
    </div>
  );
}
