// // // // import { StrictMode } from 'react'
// // // // import { createRoot } from 'react-dom/client'
// // // // import './index.css'
// // // // import App from './App.jsx'

// // // // createRoot(document.getElementById('root')).render(
// // // //   <StrictMode>
// // // //     <App />
// // // //   </StrictMode>,
// // // // )

// // // import React from "react";
// // // import ReactDOM from "react-dom/client";
// // // import { BrowserRouter } from "react-router-dom";
// // // import App from "./App";
// // // import "./index.css";

// // // ReactDOM.createRoot(document.getElementById("root")).render(
// // //   <React.StrictMode>
// // //     <BrowserRouter>
// // //       <App />
// // //     </BrowserRouter>
// // //   </React.StrictMode>
// // // );

// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import './index.css';
// // import { BrowserRouter } from "react-router-dom";
// // import { Toaster } from "react-hot-toast";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <App />
// //       <Toaster position="top-right" />
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//       <Toaster position="top-right" reverseOrder={false} />
//     </BrowserRouter>
//   </React.StrictMode>
// );


// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* ✅ Global toast notification system */}
    <Toaster position="top-right" reverseOrder={false} />
  </BrowserRouter>
);
