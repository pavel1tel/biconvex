import ReactDOM from "react-dom/client";
import { allSettled, fork } from "effector";
import { Provider } from "effector-react";

import { appStarted } from "@/shared/init";

import "./shared/fonts/CraftworkGrotesk-Bold.ttf";
import "./shared/fonts/CraftworkGrotesk-Medium.ttf";
import "./shared/fonts/CraftworkGrotesk-Regular.ttf";
import "./shared/fonts/CraftworkGrotesk-SemiBold.ttf";
import "./shared/fonts/ProximaNova-Regular.ttf";

import "./app/styles/index.css";

import { Application } from "./app";

const renderTarget = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(renderTarget);

appStarted();

root.render(
    <Application/>
);