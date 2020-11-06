const initialState = {
  firstName: "",
  lastName: "",
  website: "",
  typeId: 5,
  type: "",
  zipCode: "",
  genreId: 1,
  image: undefined,
  label: "",
  wasSignUpStarted: false,
  userId: undefined,
  mobileNumber: "",
  isLoggedIn: false,
  email: "",
  password: "",
  step: 1,
  totalEarnings: 0,
  completedListens: 0,
  totalNotifications: 0,
  totalSubmissions: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      const { isLoggedIn } = action.payload;
      return { ...state, isLoggedIn };
    }
    case "UPDATE": {
      const payload = action;
      return { ...state, ...payload };
    }
    case "GO_TO_NEXT": {
      return { ...state, step: state.step + 1 };
    }
    case "CANCEL": {
      return initialState;
    }
    case "STEP_1": {
      const { mobileNumber } = action.payload;
      return { ...state, mobileNumber, wasSignUpStarted: true };
    }
    case "STEP_3": {
      const { userId } = action.payload;
      return { ...state, userId };
    }
    case "STEP_4": {
      const { form } = action.payload;
      return { ...state, ...form };
    }
    case "STEP_5": {
      const { form } = action.payload;
      return { ...state, ...form };
    }
    case "LOGIN": {
      const { userId } = action.payload;
      return { ...state, userId };
    }
    case "LOAD_DATA": {
      const { userInfo } = action.payload;
      return { ...state, ...userInfo };
    }
    default: {
      return state;
    }
  }
};

export default user;
