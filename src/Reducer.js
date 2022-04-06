import { useReducer } from "react";

function Reducer() {
    const [items, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        }
    }, 0);

    return (
        <div>
            {items}
            <button onClick={() => dispatch('increment')}>Incrementar</button>
            <button onClick={() => dispatch('decrement')}>Decrementar</button>
            <button onClick={() => dispatch('reset')}>Reiniciar</button>
        </div>
    );
}
export default Reducer;