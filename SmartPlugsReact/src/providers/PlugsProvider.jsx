import React, { createContext, useState } from "react";
import { PlugsContext } from "../App";
import { useEffect } from "react";

export default function PlugsProvider({ initialState, children }) {
  const [plugsState, setPlugs] = useState(initialState);

  const getPlugs = () => {
    return plugsState;
  };
  const getPlug = (id) => {
    return plugsState[id - 1];
  };
  const modifyPlug = (id, plugData) => {
    console.log("modifyPlug");
    let modifiedPlug = getPlug(id);
    console.log(modifiedPlug);
    modifiedPlug = { ...modifiedPlug, ...plugData };
    console.log(modifiedPlug);
    setPlugs(plugsState.map((plug) => (plug.id === id ? modifiedPlug : plug)));
  };
  useEffect(() => {
    console.log(plugsState);
    console.log("useEffect");
  }, [plugsState]);
  return (
    <PlugsContext.Provider
      value={{ plugsState, getPlugs, getPlug, modifyPlug }}
    >
      {children}
    </PlugsContext.Provider>
  );
}
