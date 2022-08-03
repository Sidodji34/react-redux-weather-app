const LIST = {
    ADD_TOWN : 'ADD_TOWN',
    REMOVE_TOWN : 'REMOVE_TOWN',
};

export function addTown(payload) {
    return {
        type: LIST.ADD_TOWN,
        payload,
        id: Date.now(),
    }
}

export function removeTown(payload) {
    return {
        type: LIST.REMOVE_TOWN,
        payload
    }
}