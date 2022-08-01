/// <reference types="react-scripts" />

declare module '*.scss';

declare global {
    type WebServiceThunk<ReturnType = void, RootState = any, ActionType = any> = ThunkAction<
    ReturnType,
    RootState,
    any,
    Action<ActionType>
>;
}