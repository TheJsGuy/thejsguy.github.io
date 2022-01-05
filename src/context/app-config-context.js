import React from 'react';

const AppConfigContext = React.createContext({});

export const AppConfigContextProvider = ({ config, children }) => (
    <AppConfigContext.Provider value={config}>
        {children}
    </AppConfigContext.Provider>
);

export const useAppConfig = () => React.useContext(AppConfigContext);
