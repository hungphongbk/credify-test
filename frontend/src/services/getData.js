import axios from "axios";
import qs from "qs";

export default async function getData(startDate, endDate, metrics) {
  const {
    data: { success, data, error },
  } = await axios.get(
    `/rest/data${qs.stringify(
      {
        start_date: startDate,
        end_date: endDate,
        metrics,
      },
      { addQueryPrefix: true }
    )}`
  );
  if (!success) throw error;
  return {
    labels: data.responses[0].labels,
    data: data.responses[0].datasets[0].data,
  };
}
