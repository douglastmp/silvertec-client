import React from 'react'

const OrderCard = (props) => {
    
    return (
        <div className="container">
            {props.registers.map((el, index) => (
                <div key={index} className="card text-left m-5">
                    <div className="card-body">
                        <h5 className="card-title">Número Pedido: {el.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Cliente: {el.client}</h6>
                        <h6 className="card-body p-1">Detalhes do pedido:</h6>
                        <p className="card-body m-0 p-1"><strong>Processador:</strong> {el.processor_name}</p>
                        <p className="card-body m-0 p-1"><strong>Placa Mãe:</strong> {el.motherboard_name}</p>
                        {el.graphic_card_name ? <p className="card-body m-0 p-1"><strong>Placa de Vídeo:</strong> {el.graphic_card_name}</p>: ""}
                        <p className="card-body m-0 p-1"><strong>Memória 1:</strong> {el.memory1_name}</p>
                        {el.memory2_name ? <p className="card-body m-0 p-1"><strong>Memória 2:</strong> {el.memory2_name}</p>: ""}
                        {el.memory3_name ? <p className="card-body m-0 p-1"><strong>Memória 3:</strong> {el.memory3_name}</p>: ""}
                        {el.memory4_name ? <p className="card-body m-0 p-1"><strong>Memória 4:</strong> {el.memory4_name}</p>: ""}
                    </div>
                </div>
            )
            )}
            
        </div>
    )
}

export default OrderCard