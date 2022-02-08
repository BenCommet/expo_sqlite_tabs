import React, {useContext} from 'react';
import {Database, DatabaseType} from './database';

const DatabaseContext = React.createContext(DatabaseType);

export const DatabaseProvider: React.FunctionComponent = function(props) {
    return <DatabaseContext.Provider value={Database} {...props} />
}

export function useDatabase(): DatabaseType {
    const database = useContext(DatabaseContext);
    if (database === undefined){
        throw new Error('useDatabase must not be used within a DatabaseProvider');
    }
    return database;
}