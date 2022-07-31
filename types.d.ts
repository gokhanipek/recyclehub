import {ReactNode} from "react";
import {Action, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";

import {Features} from "@tipico/express";
import {Label, ProductType} from "@tipico/utils";

export * from "./declarations";

declare global {
    const __VERSION__: string;
    const __ENVIRONMENT__: string;
    const __GTM__: string;
    const __INSTANA__: string;
    const __SYSTEM__: string;
    const __LOQATE_ADDRESS__: string;
    const __UNZER_KEY__: string;
    const __PUSH_GATEWAY_HOST__: string;
    const __WORLDPAY_ID__: string;
    const __WORLDPAY_SCRIPT__: string;
    const __WORLDPAY_ORIGIN__: string;

    const __MOCK__: boolean;
    const __IS_DEVELOPMENT__: boolean;
    const __IS_VERBOSE__: boolean;
    const __IS_PRODUCTION__: boolean;
    const __IS_TEST__: boolean;

    const __PAGE__: Page;

    interface Page {
        readonly title: string;
    }

    interface ShareData {
        title?: string;
        text?: string;
        url?: string;
    }

    interface Navigator extends Navigator {
        share?: (data?: ShareData) => Promise<void>;
    }

    interface PerformanceEntry extends PerformanceEntry {
        serverTiming: PerformanceServerTiming[];
    }

    interface Performance extends Performance {
        mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    }

    interface PerformanceServerTiming {
        readonly description: string;
        readonly duration: DOMHighResTimeStamp;
        readonly name: string;
        toJSON(): any;
    }

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: (...args: any[]) => any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (...args: any[]) => any;
        __PRELOADED_STATE__: any;
        __TRANSLATIONS__: any;
        __TRANSLATIONS_EXTRA__?: any;
        __NAVIGATION__: any;
        __TIME_FILTERS__: any;
        __LANGUAGE__: "en" | "de" | "tr";
        LUX?: any;
        Label: Label;
        ProductType: ProductType;
        nativeBridge?: any;
        loadSportsRadar?: () => void;
        STATSCOREWidgets?: any;
        STATSCOREWidgetsConflictlessWebpack?: any;
        fingerprintLogin?: unknown;
        QSI: any;
        __FEATURES__?: Features;
    }

    type Nullable<T> = {[P in keyof T]: T[P] | null};
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

    interface KeyValueMap<T = any> {
        [key: string]: T;
    }

    type ValueOf<T> = T[keyof T];

    interface Point {
        x: number;
        y: number;
    }

    type WebServiceThunk<ReturnType = void, RootState = any, ActionType = any> = ThunkAction<
        ReturnType,
        RootState,
        any,
        Action<ActionType>
    >;

    interface BaseAction<TType, TPayload = any, TMeta = any, TError = any> extends Action<TType> {
        readonly type: TType;
        readonly payload: TPayload;
        readonly meta?: TMeta;
        readonly error?: TError;
    }

    interface AsyncThunkAction<T> extends Action {
        readonly payload?: {
            readonly data: T;
            readonly requestIdentifier: string;
        };
    }

    // @ts-ignore
    type GetState = <TState = any>() => TState;
    type StatelessComponentProps = Readonly<{children?: ReactNode}>;
    type Primitive = string | boolean | number | null | undefined;

    // extract properties of T that are type of V
    // useful if you want a type to be like "only string keys from Foo"
    type KeysMatching<T, V> = {[K in keyof T]-?: T[K] extends V ? K : never}[keyof T];
}

declare module "react" {
    type TFC<P> = FunctionComponent<
        P & {
            isCritical?: boolean;
        }
    >;

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        elementtiming?: string;
        testid?: string;
        critical?: string;
    }
}
