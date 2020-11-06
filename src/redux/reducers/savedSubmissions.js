const initialState = {
  totalCount: 0,
  savedSubmissions: [],
  savedSubmission: undefined,
};

const submissions = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND_SAVED_SUBMISSIONS": {
      // eslint-disable-next-line no-shadow
      const { savedSubmissions, totalCount } = action.payload;
      return {
        ...state,
        savedSubmissions: [...state.savedSubmissions, ...savedSubmissions],
        totalCount,
      };
    }
    case "SET_SELECTED_SAVED_SUBMISSION": {
      const { savedSubmission } = action.payload;
      return {
        ...state,
        savedSubmission,
      };
    }
    case "CLEAR_SELECTED_SAVED_SUBMISSION": {
      return {
        ...state,
        savedSubmission: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export default submissions;
