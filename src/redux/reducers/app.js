const initialState = {
  fetching: false,
  error: undefined,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      const { fetching } = action.payload;
      return { ...state, fetching };
    }
    case 'SET_ERROR': {
      const { error } = action.payload;
      return { ...state, error };
    }
    case 'CLEAR_ERROR': {
      return { ...state, error: undefined };
    }
    default: {
      return state;
    }
  }
};

export default app;
