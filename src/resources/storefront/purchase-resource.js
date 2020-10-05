export default function PurchaseResource({apiHandler}) {
  return {
    purchase({data = {}} = {}) {
      return apiHandler.post(`purchase`, data);
    },

    preview({data = {}} = {}) {
      return apiHandler.post(`preview-purchase`, data);
    },

    readyToPay({data = {}} = {}) {
      return apiHandler.post(`ready-to-pay`, data);
    },
  };
};