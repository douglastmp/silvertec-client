import React, {useState} from 'react'
import AsyncSelect from 'react-select/async';
import Axios from '../services/axios'

const CreateOrder = () => {
    const [processorSelected, setProcessorSelected] = useState(0)
    const [client, setClient] = useState('')
    const [error, setError] = useState('')
    const [motherboardSelected, setMotherboardSelected] = useState(0)
    const [graphicCardSelected, setGraphicCardSelected] = useState(0)
    const [memory1Selected, setMemory1Selected] = useState(0)
    const [memory2Selected, setMemory2Selected] = useState(0)
    const [memory3Selected, setMemory3Selected] = useState(0)
    const [memory4Selected, setMemory4Selected] = useState(0)

    const getOptionsProcessor = (input) => {
        return Axios.get("/api/processors").then(response => {
            return response.data.map( processorEl => ({value: processorEl.id, label: processorEl.name })) 
        })
    }

    const getOptionsMotherboard = (input) => {
        return Axios.get("/api/motherboards").then(response => {
            return response.data.map( motherboardEl => ({value: motherboardEl.id, label: motherboardEl.name })) 
        })
    }

    const getOptionsMemories = (input) => {
        return Axios.get("/api/memories").then(response => {
            return response.data.map( memoriesEl => ({value: memoriesEl.id, label: memoriesEl.name })) 
        })
    }    

    const getOptionsGraphicCard = (input) => {
        return Axios.get("/api/graphic-cards").then(response => {
            return response.data.map( graphicCardEl => ({value: graphicCardEl.id, label: graphicCardEl.name })) 
        })
    }

    const clientHandle = (event) => {
        setClient(event.target.value)
    }

    const processorHandle = (processorValue) => {
        setProcessorSelected(processorValue.value)
    }

    const motherboardHandle = (motherboardValue) => {
        setMotherboardSelected(motherboardValue.value)
    }    

    const memory1Handle = (memory1Value) => {
        setMemory1Selected(memory1Value.value)
    }    

    const memory2Handle = (memory2Value) => {
        setMemory2Selected(memory2Value.value)
    }    

    const memory3Handle = (memory3Value) => {
        setMemory3Selected(memory3Value.value)
    }    

    const memory4Handle = (memory4Value) => {
        setMemory4Selected(memory4Value.value)
    }    

    const graphicCardHandle = (graphicCardValue) => {
        setGraphicCardSelected(graphicCardValue.value)
    }    

    const submitHandle = (event) => {
        event.preventDefault();
        let postData = {
            "client": client,
            "processor": processorSelected,
            "motherboard": motherboardSelected,
            "memory1": memory1Selected,
        }
        if (processorSelected === 0) {
            setError('Selecione um processador!')
            return;
        }
        if (motherboardSelected === 0) {
            setError('Selecione uma placa mãe!')
            return;
        }
        if (memory1Selected === 0) {
            setError('Selecione pelo menos uma memória!')
            return;
        }
        if (memory2Selected > 0) {
            postData = {
                ...postData,
                "memory2": memory2Selected,
            }
        }
        if (memory3Selected > 0) {
            postData = {
                ...postData,
                "memory3": memory3Selected,
            }
        }
        if (memory4Selected > 0) {
            postData = {
                ...postData,
                "memory4": memory4Selected,
            }
        }
        if (graphicCardSelected > 0) {
            postData = {
                ...postData,
                "graphic_card": graphicCardSelected,
            }
        }
        Axios.post('/api/orders/', postData).then(
            (response) => {
                console.log(response)
            }
        ).catch(
            (error) => {
                if (error.response.data.error) {
                    setError(error.response.data.error)
                } else {
                    setError(error.response.statusText)
                }
                console.log(error.response)
            }
        )
    }

    return (
        <div className="container mt-5 text-left">
            {error !== '' ? <p><strong>{error}</strong></p>: ""}
            <form onSubmit={submitHandle}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Nome do Cliente:</label>
                    <input type="text" onChange={clientHandle} className="form-control" id="exampleFormControlInput1" placeholder="Francisco" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="processorSelect">Processador:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsProcessor} onChange={processorHandle} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="motherboardSelect">Placa Mãe:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsMotherboard} onChange={motherboardHandle} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="memory1Select">Memória 1:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsMemories} onChange={memory1Handle} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="memory2Select">Memória 2:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsMemories} onChange={memory2Handle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="memory3Select">Memória 3:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsMemories} onChange={memory3Handle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="memory4Select">Memória 4:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsMemories} onChange={memory4Handle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="graphicCardSelect">Placa de vídeo:</label>
                    <AsyncSelect defaultOptions loadOptions={getOptionsGraphicCard} onChange={graphicCardHandle}/>
                </div>
                <div className="col">
                    <input className="btn btn-primary mr-auto" type="submit" value="SendOrder" />
                </div>
                
            </form>            
        </div>
    )
}

export default CreateOrder