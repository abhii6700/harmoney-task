import { ACTION_TYPES } from '../actions/messageAction';

export const initialState = {
  messageList: [],
  sortByTime: false,
};

export const reducer = (state = {}, action = {}) => {
  const { type = '', payload = {} } = action;

  switch (type) {
    case ACTION_TYPES.SET_INITIAL_MESSAGES: {
      return {
        ...state,
        messageList: payload.messageList,
      };
    }
    case ACTION_TYPES.POST_MESSAGE: {
      return {
        ...state,
        messageList: [...state.messageList, payload],
      };
    }
    case ACTION_TYPES.DELETE_MESSAGE: {
      const filteredMessageList = state.messageList.filter((item) => {
        return item.id !== payload.id;
      });
      return {
        ...state,
        messageList: filteredMessageList,
      };
    }
    case ACTION_TYPES.DELETE_ALL_MESSAGES: {
      return {
        ...state,
        messageList: [],
      };
    }
    case ACTION_TYPES.TOGGLE_SORT: {
      return {
        ...state,
        sortByTime: !state.sortByTime,
      };
    }
    default:
      throw new Error(`No case for type ${type} found in reducer.`);
  }
};
