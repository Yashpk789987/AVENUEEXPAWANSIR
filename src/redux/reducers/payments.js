const initialState = {
  payments: [],
  totalListens: 0,
  totalAmount: 0,
};

const payments = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PAYMENTS": {
      const { data } = action.payload;
      return {
        ...state,
        ...data,
      };
    }
    default: {
      return state;
    }
  }
};

export default payments;
