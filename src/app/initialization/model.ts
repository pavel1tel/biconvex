/*
import {redirect} from "atomic-router";
import {createEvent, createStore, sample} from "effector";
import {createHashHistory} from "history";
import {serverConfigModel} from "@/entities/server-config";
import { viewerModel } from "@/entities/viewer";
import {generalAuthModel} from "@/features/auth";
import {routes} from "@/shared/lib/routes.js";
import {InitializingType} from "@/shared/lib/types";
import {router} from "../providers/router.js";

export const initialize = createEvent<any>('initialize application');

export const initializeFailed = createEvent<any>('initialize application failed');
export const initializeSuccess = createEvent<any>('initialize application success');

export const $initialized = createStore<InitializingType>('default', {name: 'application initialized'})
    .on(initializeFailed, () => 'error')
    .on(initializeSuccess, () => 'success');

sample({
    clock: initialize,
    target: serverConfigModel.getServerConfigFx
});

sample({
    clock: serverConfigModel.getServerConfigFx.done,
    target: generalAuthModel.viewerCheckAuthFx
});

sample({
    clock: serverConfigModel.getServerConfigFx.fail,
    target: initializeFailed
});

sample({
    clock: [viewerModel.$viewer, viewerModel.viewerAuthCheckFailure],
    source: $initialized,
    filter: (initialized) => {
        return initialized === 'default';
    },
    target: initializeSuccess
});

sample({
    clock: initializeSuccess,
    fn: () => createHashHistory(),
    target: router.setHistory,
});

redirect({
    clock: initializeFailed,
    route: routes.serverError
});
*/
