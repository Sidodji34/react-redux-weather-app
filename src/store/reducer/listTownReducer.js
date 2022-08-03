const defaultState = {
  listTowns: new Set(),
};

export function listTownReducer(state = defaultState, action) {
  const listTowns = new Set(state.listTowns)

  switch (action.type) {
    case 'ADD_TOWN':
      listTowns.add(action.payload)
      return { listTowns: Array.from(listTowns) };

    case 'REMOVE_TOWN':
      return { listTowns: Array.from(listTowns).filter(town => town !== action.payload) }

    default:
      return state;
  }
}