'use client'
import { useContext, useState, createContext } from "react";

interface DataContextType {
    // define the types for data and its fields
    data: {
        summary: string;
        style: string,
        audience: string
    } | null;
    setData: React.Dispatch<React.SetStateAction<{ summary: string; style: string, audience: string } | null>>;
}


const DataContext = createContext<DataContextType | null>(null);    // create the context


export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // create a provider that will allow children components to have access to the shared data
    const [data, setData] = useState<{ summary: string; style: string, audience: string } | null>(null);

    const contextValue: DataContextType = {
        data,
        setData,
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

// custom hook
export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
};
