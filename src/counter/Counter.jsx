import { useState } from "react";
function Counter() {
    // Hooks Area
    const [contador, setContador] = useState(0);
    return (
        <div>
            <p>
                Haz realizado click {contador} veces en este boton
            </p>
            <button onClick={() => { setContador(contador + 1) }}>
                Incrementar
            </button>

        </div>
    );

}
export default Counter;