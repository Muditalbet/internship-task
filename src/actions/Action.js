export const selectUser = (user) =>{
    console.log("mudit clicked: ", user.name)
    return {
        type: "ADD_TO_BUCKET",
        payload: user
    }
}