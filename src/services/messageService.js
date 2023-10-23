import { messageRequest } from '../util/api';

const MessageService = {
  fetchMessages: async () => {
    return messageRequest.get('/api/v1/messages/');
  },
  postMessage: async (requestObject) => {
    return messageRequest.post('/api/v1/messages/', requestObject);
  },
  deletMessage: async (id) => {
    return messageRequest.delete(`/api/v1/messages/${id}`);
  },
};

export default MessageService;
