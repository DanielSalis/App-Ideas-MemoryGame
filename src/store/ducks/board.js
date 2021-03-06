export const Types = {
    SET_SQUARES:'board/SET_SQUARES',
    INCREASE_MOVIMENTS:'board/INCREASE_MOVIMENTS',
    SET_LAST_ITEM_SELECTED:'board/SET_LAST_ITEM_SELECTED',
    INCREASE_PAIRS:'board/INCREASE_PAIRS'
}

const INITIAL_STATE = {
    squares:[],
    lastItemSelected:{},
    movimentos: 0,
    foundedPairs:0
}

export default function reducer(state=INITIAL_STATE, action){
    switch(action.type){
        case Types.SET_SQUARES:
            return{
                ...state,
                squares: action.squares
            }

        case Types.INCREASE_MOVIMENTS:
            return{
                ...state,
                movimentos: state.movimentos+1
            }
        
        case Types.SET_LAST_ITEM_SELECTED:
            return{
                ...state,
                lastItemSelected: action.item
            }

        case Types.INCREASE_PAIRS:
            return{
                ...state,
                foundedPairs: state.foundedPairs+1
            }

        default: 
            return state
    }
}

export const Actions = {
    setSquares: (listSquares)=>({
        type:Types.SET_SQUARES,
        squares: listSquares
    }),

    increaseMoviments: ()=>({
        type:Types.INCREASE_MOVIMENTS
    }),

    setLastItemSelected:(item)=>({
        type:Types.SET_LAST_ITEM_SELECTED,
        item
    }),

    increasePairs:()=>({
        type:Types.INCREASE_PAIRS
    })
}