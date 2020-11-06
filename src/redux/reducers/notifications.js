/* eslint-disable no-shadow */

const initialState = {
  notifications: [],
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_NOTIFICATIONS": {
      const { notifications } = action.payload;
      return {
        notifications,
      };
    }
    default: {
      return state;
    }
  }
};

export default notifications;
