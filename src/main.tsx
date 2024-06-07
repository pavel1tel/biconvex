import ReactDOM from "react-dom/client";

import { appStarted } from "@/shared/init";

import { Application } from "./app";
import "./app/styles/index.css";
import "./shared/fonts/CraftworkGrotesk-Bold.ttf";
import "./shared/fonts/CraftworkGrotesk-Medium.ttf";
import "./shared/fonts/CraftworkGrotesk-Regular.ttf";
import "./shared/fonts/CraftworkGrotesk-SemiBold.ttf";
import "./shared/fonts/ProximaNova-Regular.ttf";

const renderTarget = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(renderTarget);

appStarted();

root.render(<Application />);
