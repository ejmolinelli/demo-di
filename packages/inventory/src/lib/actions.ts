type BASIC_ACTION = {type:string};
type PARAM_ACTION = {type:string, payload:string};


const IncrementAction = ():BASIC_ACTION=>{
    return {type: "increment"}
}
const DecrementAction = ():BASIC_ACTION=>{
    return {type: "decrement"};
}

const SetColorAction = (color:string):PARAM_ACTION => {
    return {type: "set_color", payload:color};
}

export type {
    BASIC_ACTION,
    PARAM_ACTION
}

export {
    IncrementAction,
    DecrementAction,
    SetColorAction
}