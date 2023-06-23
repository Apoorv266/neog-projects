import React, { createContext, useState } from 'react'
import { snacks } from '../Data/TableData'
import { arrayIncludesStrFunc, ascendingFunc, decendingFunc } from '../Utilities/UtilityFunctions'

export const TableContext = createContext()
const TableContextWrapper = ({ children }) => {
  const [foodData, setfoodData] = useState(snacks)
  const tableHeads = Object.keys(foodData[0])
  const [sortingState, setsortingState] = useState({
    key: "",
    sorting: true
  })
  const [inputValue, setinputValue] = useState("")


  const sortedTable = inputValue ? [...foodData].filter((item) => item.product_name.toLowerCase().includes(inputValue.toLowerCase()) || arrayIncludesStrFunc(item.ingredients, inputValue)) : foodData

  const sortcolumn = sortingState.key === null ? sortedTable : sortingState.sorting === true ? ascendingFunc(sortedTable, sortingState) : decendingFunc(sortedTable, sortingState)


  return (
    <TableContext.Provider value={{ tableHeads, foodData, setinputValue, inputValue, sortcolumn, setsortingState }}>{children}</TableContext.Provider>
  )
}

export default TableContextWrapper