const initialState = {
  totalCount: 0,
  submissions: [],
  selectedSubmission: undefined,
};

const submissions = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND": {
      // eslint-disable-next-line no-shadow
      const { submissions, totalCount } = action.payload;
      return {
        ...state,
        submissions: [...state.submissions, ...submissions],
        totalCount,
      };
    }

    case "REFRESH_SUBMISSIONS": {
      // eslint-disable-next-line no-shadow
      const { submissions, totalCount } = action.payload;
      return {
        ...state,
        submissions: [...submissions],
        totalCount,
      };
    }

    case "SET_SELECTED_SUBMISSION": {
      const { submission } = action.payload;
      return {
        ...state,
        submission,
      };
    }
    case "CLEAR_SELECTED_SUBMISSION": {
      return {
        ...state,
        submission: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export default submissions;
