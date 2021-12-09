import {createContext, useContext, useReducer} from 'react';
import {jogoReducer} from './jogoReducer';
const Carrinho = createContext();

const JogoContextProvider = ({children}) => {
    const jogos = [];
    const [state, dispatch] = useReducer(jogoReducer, {
        jogos: jogos,
        cart: []
    });
    return (
        <>
          <Carrinho.Provider value = {state, dispatch}>
            {children}  
            </Carrinho.Provider>  
        </>
    )
}

export default JogoContextProvider;
export const CarrinhoState=() =>{
    return useContext(Carrinho)
};