// "use client";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

export default function Home() {
  const isAuthenticated = localStorage.getItem("isUserAuthenticated");
  if (isAuthenticated === null || isAuthenticated === false) {
    window.location.href = "/login";
  }
  return (
    <main className="lg:px-72 bg-black">
      <AddTodo />
      <Todos />
    </main>
  );
}
