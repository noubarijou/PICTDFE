export const jogoReducer = (state, action) => {
    switch (action.type) {
        case "ADICIONAR_NO_CARRINHO":
            return {...state,carrinho:[...state.carrinho,{...action.payload,qty:1}]};
        case "REMOVER_DO_CARRINHO": 
            return {...state,carrinho:state.carrinho.filter(c=>c.id !== action.payload.id)};
        case "MUDAR_QTY_DO_CARRINHO":
            return {...state,carrinho:state.carrinho.filter(c=>c.id === action.payload.id ? c.qty = action.payload.qty : c.qty),};
        default: 
            return state;
    }
}