const initialState = {
  totalSubmissions: 0,
  submissions: [],
  selectedSubmission: undefined,
};

const arinsiders = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND_AR_INSIDERS": {
      // eslint-disable-next-line no-shadow
      const { submissions, totalSubmissions } = action.payload;
      return {
        ...state,
        submissions: [...state.submissions, ...submissions],
        totalSubmissions,
      };
    }

    case "REFRESH_AR_INSIDER": {
      // eslint-disable-next-line no-shadow
      const { submissions, totalSubmissions } = action.payload;
      return {
        ...state,
        submissions: [...submissions],
        totalSubmissions,
      };
    }

    case "SET_SELECTED_AR_SUBMISSION": {
      const { submission } = action.payload;
      return {
        ...state,
        submission,
      };
    }

    case "CLEAR_SELECTED_AR_SUBMISSION": {
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

export default arinsiders;
