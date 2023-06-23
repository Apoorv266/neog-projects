export const arrayIncludesStrFunc = (ingredientsArr, inputValue) => {
    let filterArray = ingredientsArr.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
    return filterArray.length > 0 ? true : false
}

export   const ascendingFunc = (sortedTable, sortingState) => {
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

export  const decendingFunc = (sortedTable, sortingState) => {
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