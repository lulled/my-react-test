import {createContext,useReducer} from 'react''
export const ThemeContext =createContext();
const INITIAL_STATE = {darkMode:false};

const themeReducer =(state ,action) = {
    switch(action.type) {
        case  "TOGGLE";
        return {darkMode:!state.darkMode};
        default:
            return state;
        }
};

export const TThemeProvider = (porps)=> {
    const [state,dispatch] = useReducer(themeReducer,INITAL_STATE);
       return(
           <ThemeContext.Provider value ={{state ,dispatch}}>
               {porps.children}
           </ThemeContext.Provider>
       );
};