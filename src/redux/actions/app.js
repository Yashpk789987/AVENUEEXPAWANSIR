export const setLoading = (fetching) => {
  return {
    type: 'SET_LOADING',
    payload: {
      fetching,
    },
  };
};

export const setError = (error) => {
  return {
    type: 'SET_ERROR',
    payload: {
      error,
    },
  };
};

export const clearError = () => {
  return {
    type: 'CLEAR_ERROR',
  };
};
