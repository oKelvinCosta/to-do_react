import "@/assets/css/App.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import Title from "@/components/Title";

export default function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  // const idTask = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function toHomePage() {
    navigate(`/`);
  }

  return (
    <>
      <div className="relative mb-6">
        <button onClick={toHomePage} className="mb-4 absolute top-0 left-0 p-2">
          <House />
        </button>
        <Title>Task detail</Title>
      </div>

      <div className="mt-4 p-3 border  rounded   bg-slate-200 border-primary/20">
        <p>
          <b>{title}</b>
        </p>
        <p>{description}</p>
      </div>
    </>
  );
}
