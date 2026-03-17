import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./index.css";
import "./i18n";

const App = lazy(() => import("./App"));
const AboutPage = lazy(() => import("./pages/about"));
const SettingsPage = lazy(() => import("./pages/settings"));

const pathname = window.location.pathname;

let PageComponent = App;
if (pathname === "/about") {
  PageComponent = AboutPage;
} else if (pathname === "/settings") {
  PageComponent = SettingsPage;
}

function AppWrapper() {
  useEffect(() => {
    // Show window after React is ready
    getCurrentWindow().show();
  }, []);

  return <PageComponent />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <AppWrapper />
    </Suspense>
  </React.StrictMode>
);
