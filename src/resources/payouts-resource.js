export default function PayoutsResource({ apiHandler }) {
    return {
      create({ data }) {
        return apiHandler.post(`payouts`, data);
      },
    };
  }
