import React from 'react'
import "../Style/Table.css"
import { useContext } from 'react'
import { TableContext } from '../Context/TableContext'
const TableComponent = () => {
    const { tableHeads,inputValue, setinputValue, sortcolumn, setsortingState} = useContext(TableContext)

    const handleHeader = (item) =>{
        setsortingState((state) => ({key : item, sorting : !state.sorting}))
    }
    return (
        <div>
            <h1>Snacks table</h1>
<input type='text' value={inputValue} onChange={(e)=>setinputValue(e.target.value)} placeholder='search by product or ingredients!' style={{width: "80%", height: "30px" , margin: "50px 50px"}}/>
            <table>
                <thead>
                    <tr style={{cursor:"pointer"}}>
                        {tableHeads.map((item, index) => {
                            return (<th key={index} onClick={()=>handleHeader(item)}>{item}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>

                    {
                        sortcolumn.map((item) => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.product_weight}</td>
                                <td>{item.price}</td>
                                <td>{item.calories}</td>
                                <td>{item.ingredients}</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>

        </div>
    )
}

export default TableComponent