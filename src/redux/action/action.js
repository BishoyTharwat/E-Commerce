
// To Add item to Cart 
export const addCart = (product) =>{
    return {
        type: "ADDITEM",
        payload: product
    }
}
// To Delete item to Cart 
export const deleteCart = (product) =>{
    return {
        type: "DELETEITEM",
        payload: product
    }
}