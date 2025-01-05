"use client"
import axios from "axios";

export default function Home() {
  return (
    <div>
    <h1>Sign In Page</h1>
    <input type="text" />
    <input type="text" />
    <button onClick={async () => {
      axios.post("http://localhost:3000/api/signin", {
        username: "asdasd",
        password: "safdaf"
      })

      localStorage.setItem("token", res.data.token)

    }}>Sign in</button>
    </div>
  );
}
