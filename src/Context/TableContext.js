import React, { createContext, useState } from 'react'
import { snacks } from '../Data/TableData'
import { arrayIncludesStrFunc } from '../Utilities/UtilityFunctions'

export const TableContext = createContext()
const TableContextWrapper = ({ children }) => {
  const [foodData, setfoodData] = useState(snacks)
  const tableHeads = Object.keys(foodData[0])
  const [sortingState, setsortingState] = useState({
    key: "",
    sorting: true
  })
  const [inputValue, setinputValue] = useState("")


  const ascendingFunc = () => {
    return (
      [...sortedTable].sort((a, b) => {
        if (sortingState.key === "product_weight") {

          let newPrice1 = Number(a[sortingState.key].slice(0, -1))
          let newPrice2 = Number(b[sortingState.key].slice(0, -1))
          return Number(newPrice1) - Number(newPrice2)
        }
        else if (sortingState.key === "ingredients" || sortingState.key === "product_name") {
          let word1 = a[sortingState.key][0].toLowerCase()
          let word2 = b[sortingState.key][0].toLowerCase()
          if (word1 < word2) {
            return -1
          }
        }
        else {
          return a[sortingState.key] - b[sortingState.key]
        }
        return null
      })
    )
  }

  const decendingFunc = () => {
    return ([...sortedTable].sort((a, b) => {
      if (sortingState.key === "product_weight") {

        let newPrice1 = Number(a[sortingState.key].slice(0, -1))
        let newPrice2 = Number(b[sortingState.key].slice(0, -1))
        return Number(newPrice2) - Number(newPrice1)
      } else if (sortingState.key === "ingredients" || sortingState.key === "product_name") {
        let word1 = a[sortingState.key][0].toLowerCase()
        let word2 = b[sortingState.key][0].toLowerCase()
        if (word2 < word1) {
          return -1
        }
      } else {
        return b[sortingState.key] - a[sortingState.key]
      }
      return null
    })
    )
  }
  const sortedTable = inputValue ? [...foodData].filter((item) => item.product_name.toLowerCase().includes(inputValue.toLowerCase()) || arrayIncludesStrFunc(item.ingredients, inputValue)) : foodData

  const sortcolumn = sortingState.key === null ? sortedTable : sortingState.sorting === true ? ascendingFunc() : decendingFunc()


  return (
    <TableContext.Provider value={{ tableHeads, foodData, setinputValue, inputValue, sortcolumn, setsortingState }}>{children}</TableContext.Provider>
  )
}

export default TableContextWrapper