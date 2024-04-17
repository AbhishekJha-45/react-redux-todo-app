"use client";
import { loginSuccess, loginFailure } from "@/features/authSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
export default function login() {
  const [username, setUsername] = useState("abhishek");
  const [password, setPassword] = useState("12345678");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const err = useSelector((state) => state.auth.error);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await fetch("http://localhost:8002/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });
      const res = await data.json();
      if (res.status === 200) {
        dispatch(loginSuccess(res));
        window.localStorage.setItem("isUserAuthenticated", res.status === 200);
      } else {
        dispatch(loginFailure(res));
        setSuccess(false);
      }
      setLoading(false);
    } catch (error) {
      setError("Invalid username or password");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      // window.localStorage.setItem("isUserAuthenticated", user.isAuthenticated);
      setSuccess(true);
      router.push("/");
      console.log("logged in");
    } else {
      console.log("not logged in");
      // window.localStorage.removeItem("isUserAuthenticated");
      setError(err?.message);
      // window.location.href = "/login";
    }
  }, [user]);

  return (
    <main className="bg-purple-950 text-white min-h-[100vh] h-full flex justify-center items-center overflow-hidden">
      <div className="bg-red-400 min-h-[80vh]  pt-3 min-w-72 ">
        <div className="flex flex-col justify-evenly  gap-y-5">
          <h1 className="mt-10 text-xl text-black font-semibold text-center">
            Login / Signup
          </h1>
          <form
            className="flex flex-col text-black items-center justify-center bg-teal-300 gap-y-5 py-8"
            onSubmit={handleSubmit} // Call handleSubmit on form submit
            method="POST"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              autoComplete="on"
              className="px-3  py-2"
              name="username"
              id="username"
              value={username} // Bind value to username state
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="on"
              className="px-3  py-2"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-sm"
              disabled={loading}
            >
              {loading ? "Validating ..." : "Login"}
              {/*Show "Loading..." during loading state*/}
            </button>
            {error && <div className="text-red-600 text-center">{error}</div>}
            {/* Display error message */}
            {success && (
              <div className="text-green-600 text-center">
                Login successful!
              </div>
            )}
            {/* Display success message */}
          </form>
        </div>
      </div>
    </main>
  );
}
