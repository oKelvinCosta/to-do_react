export default function Bg(props) {
  return (
    <div className="bg-indigo-500 min-h-[100dvh] h-[100%]">
      <div className="container max-w-[580px] mx-auto px-3 py-5 flex flex-col  justify-center">
        {props.children}
      </div>
    </div>
  );
}
