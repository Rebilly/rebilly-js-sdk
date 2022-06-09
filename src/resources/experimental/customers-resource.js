/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function CustomersResource({apiHandler}) {
  return {
    /**
     * @returns { rebilly.GetCustomerSummaryMetricReportResponsePromise } response
     */
    getCustomerLifetimeSummaryMetrics({customerId}) {
      return apiHandler.get(`customers/${customerId}/summary-metrics`);
    },
  };
}
