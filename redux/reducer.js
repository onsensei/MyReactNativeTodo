import action from "./action"

const initialState = {
    data: getData()
}

function getData() {
    let newItem = []
    for (let index = 1; index < 9; index++) {
        newItem.push({
            title: 'Item' + index,
            description: 'Description for Item' + index,
            id: index
        })
    }
    return newItem
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case action.ADD:

            return {}

        default:
            return state
    }
}