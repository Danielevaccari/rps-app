import axios from 'axios';

const historyEndpoint = '/rps/history';

const reaktorBadApiHistoryService = {
  getHistoryData: async () => {
    const config = {
      headers: { ContentType: 'application/json' }
    };

    const response = await axios.get(historyEndpoint, config);
    console.log(response);
  }
};

export default reaktorBadApiHistoryService;
