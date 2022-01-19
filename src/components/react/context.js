import { createContext } from "react";
import useFlagsHooks from "./hooks";

const flagsContext = createContext();
const dispatchContext = createContext();

function FlagsProvider(props) {

    const initalState = {
        loading: false,
        error: null,
        resultado: null,
        selected: null
    };

    const { state, dispatch } = useFlagsHooks(initalState);

    return (
        <flagsContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                {props.children}
            </dispatchContext.Provider>
        </flagsContext.Provider>
    );
};

export { flagsContext, dispatchContext, FlagsProvider };