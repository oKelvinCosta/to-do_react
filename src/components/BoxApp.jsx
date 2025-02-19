import PropTypes from "prop-types";
export default function BoxApp(props) {
  return (
    <div className="bg-slate-100 p-6 rounded w-full min-h-[400px] flex flex-col ">
      {props.children}
    </div>
  );
}

BoxApp.propTypes = {
  children: PropTypes.node,
};
