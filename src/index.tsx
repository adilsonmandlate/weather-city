import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SWRConfig } from "swr";
import { createToast, destoryAllToasts } from "vercel-toast";
import "vercel-toast/dist/vercel-toast.css";

ReactDOM.render(
  <SWRConfig
    value={{
      onError: (error) => {
        console.log("aha");
        if (error) {
          createToast(`Error: ${error.message}`, {
            type: "error",
          });
        }
      },
      onSuccess: (data) => {
        if (data) {
          destoryAllToasts();
        }
      },
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </SWRConfig>,
  document.getElementById("root")
);
