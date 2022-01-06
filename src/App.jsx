import React, { useEffect } from 'react';
import reaktorBadApiHistoryService from './services/reaktor-bad-api/reaktorBadApiHistory';

function App() {
  const handleFetch = async () => {
    const data = await reaktorBadApiHistoryService.getHistoryData();
    console.log(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div>
      ksehvbsakeuvbslieuvb sehjvb onnitus
    </div>
  );
}

export default App;
