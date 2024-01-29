import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import me from "./assets/images/me.png";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <a
      href="https://jeansamist.vercel.app/"
      className="fixed z-50 bottom-4 right-4"
    >
      <img
        src={me}
        alt="Jeansamist"
        className="w-12 aspect-square object-cover rounded-full border-secondary border-4 shadow-xl opacity-70 hover:opacity-100"
      />
    </a>
  </React.StrictMode>
);
