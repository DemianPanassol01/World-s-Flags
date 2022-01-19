function mapsReducer(state, action) {
    switch (action.type) {
        case 'SET_PESQUISA_DETALHADA':
            return {
                ...state,
                loading: false,
                selected: action.data
            };

        case 'RESET_PESQUISA_DETALHADA':
            return {
                ...state,
                selected: null
            };

        case 'SET_PESQUISA':
            return {
                ...state,
                loading: false,
                resultado: action.data
            }

        case 'RESET_PESQUISA':
            return {
                ...state,
                resultado: null
            };

        case 'SET_LOADING':
            return {
                ...state,
                loading: !state.loading
            };

        case 'SET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.data
            };
            
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            };

        default:
            return state;
    };
};

export default mapsReducer;