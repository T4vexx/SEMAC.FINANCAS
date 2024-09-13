import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ValuesHiddenProvider } from "./context/useIsValueHidden";
import reportWebVitals from "./reportWebVitals";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ValuesHiddenProvider>
			<App />
		</ValuesHiddenProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
