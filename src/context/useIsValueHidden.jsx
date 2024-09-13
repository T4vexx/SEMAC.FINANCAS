import React, { createContext, useContext, useState } from 'react';

const ValuesHiddenContext = createContext();

export const useIsValuesHidden = () => useContext(ValuesHiddenContext);

export const ValuesHiddenProvider = ({ children }) => {
  const [isValuesHidden, setIsValuesHidden] = useState(false);

  const toggleValuesHidden = () => {
    setIsValuesHidden((prevValue) => !prevValue);
  };

  return (
    <ValuesHiddenContext.Provider value={{ isValuesHidden, toggleValuesHidden }}>
      {children}
    </ValuesHiddenContext.Provider>
  );
};
