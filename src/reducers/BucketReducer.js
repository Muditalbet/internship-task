export default function(state = null, action){
    var list = []

    switch(action.type){
        case "ADD_TO_BUCKET":
            // console.log("checking state: ", state)
            if(state == null) list = [];
            else list = [...state]
            list.push(action.payload);
            return list
            break;
    }

    return state;
}