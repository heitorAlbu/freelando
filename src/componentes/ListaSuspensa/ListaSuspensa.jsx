import { useState } from "react"

export const ListaSuspensa = ({ titulo }) => {
    const [estaAberta, alternarVisibilidade] = useState(false);
    return (<label>
        {titulo}
        <button onClick={() => alternarVisibilidade(!estaAberta)}>
            Selecione<span>{estaAberta ? '▲' : '▼'}</span>
        </button>
    </label>)

}