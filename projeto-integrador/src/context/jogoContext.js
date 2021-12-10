import {createContext, useEffect, useReducer, useContext, useState} from 'react';
import {jogoReducer} from './jogoReducer';
export const CarrinhoContext = createContext();

const JogoContextProvider = ({children}) => {
    const [carrinho, dispatch] = useReducer(jogoReducer,[],() => {
        const localData = localStorage.getItem('carrinho');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }, [carrinho]);
    const addJogo = (carrinho) => {dispatch({type: 'ADD_JOGO', payload: carrinho})

};

    const rmJogo = (carrinho) => dispatch({type: 'RM_JOGO', payload: carrinho});
  

    return (
        <>
          <CarrinhoContext.Provider value = {{carrinho, addJogo, rmJogo}}>
            {children}  
            </CarrinhoContext.Provider>  
        </>
    )
}

export default JogoContextProvider;
export const CarrinhoState=()=>{
    return useContext(CarrinhoContext);
};
