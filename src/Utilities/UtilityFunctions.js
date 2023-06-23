export const arrayIncludesStrFunc = (ingredientsArr, inputValue) => {
    let filterArray = ingredientsArr.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
    return filterArray.length > 0 ? true : false
}

