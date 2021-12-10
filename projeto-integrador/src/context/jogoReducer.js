export const jogoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_JOGO':
          const checaProdutos = state.filter(carrinho => (
            carrinho.id === action.payload.id
          ));
          if (!checaProdutos.length) {
            return [...state, action.payload];
          };
          console.log(action.payload);
          return state;
        case 'RM_JOGO':
          console.log(action.payload);
           return state.filter(e => e.id !== action.payload.id)  
        
          default:
          return state;
      }
      
}