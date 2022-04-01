import { createContext, ReactNode, useState } from "react";

// type UserContextProps = {
//   children: ReactNode;
// };

// type UserContextType = {
//   candlesArray: any[];
//   setCandlesArray: React.Dispatch<React.SetStateAction<string>>;
// };

// const defaultValue = {
//   candlesArray: [],
//   setCandlesArray: () => {},
// };
// const CandleContext = createContext<UserContextType>(
//   defaultValue as UserContextType
// );

// export const UserContextProvider = ({ children }: UserContextProps) => {
//   const [candlesArray, setCandlesArray] = useState(defaultValue);

//   const values = {
//     candlesArray,
//     setCandlesArray,
//   };

//   return (
//     <CandleContext.Provider value={values}>{children}</CandleContext.Provider>
//   );
// };

// //export default CandleContext;
