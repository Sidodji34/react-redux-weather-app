const INPUT = {
    CHANGE_INPUT_VALUE : 'CHANGE_INPUT_VALUE',
    CLEAR_INPUT : 'CLEAR_INPUT',
};

export function inputAction(payload) {
    return {
        type: INPUT.CHANGE_INPUT_VALUE,
        payload
    }
}

export function clearInputAction(payload) {
    return {
        type: INPUT.CLEAR_INPUT,
        payload
    }
}
