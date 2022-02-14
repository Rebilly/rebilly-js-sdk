import CustomersResource from './customers-resource';
import DataExportsResource from './data-exports-resource';
import HistogramsResource from './histograms-resource';
import ReportsResource from './reports-resource';
import SubscriptionsResource from './subscriptions-resource';
import TimelinesResource from './timelines-resource';
import LocationResource from './location-resource';
import TransactionsResource from './transactions-resource';

const ExperimentalResources = {
  CustomersResource,
  DataExportsResource,
  HistogramsResource,
  ReportsResource,
  SubscriptionsResource,
  TimelinesResource,
  LocationResource,
  TransactionsResource
};

export class ExperimentalApiInstance {
  constructor({ apiHandler }) {
    this.customers = ExperimentalResources.CustomersResource({ apiHandler });
    this.dataExports = ExperimentalResources.DataExportsResource({
      apiHandler,
    });
    this.histograms = ExperimentalResources.HistogramsResource({ apiHandler });
    this.reports = ExperimentalResources.ReportsResource({ apiHandler });
    this.subscriptions = ExperimentalResources.SubscriptionsResource({
      apiHandler,
    });
    this.timelines = ExperimentalResources.TimelinesResource({ apiHandler });
    this.location = ExperimentalResources.LocationResource({ apiHandler });
    this.transactions = ExperimentalResources.TransactionsResource({ apiHandler });
    // expose apiHandler methods to the API instance
    this.addRequestInterceptor = apiHandler.addRequestInterceptor;
    this.removeRequestInterceptor = apiHandler.removeRequestInterceptor;
    this.addResponseInterceptor = apiHandler.addResponseInterceptor;
    this.removeResponseInterceptor = apiHandler.removeResponseInterceptor;
    this.setTimeout = apiHandler.setTimeout;
    this.setProxyAgent = apiHandler.setProxyAgent;
    this.setSessionToken = apiHandler.setSessionToken;
    this.setEndpoints = apiHandler.setEndpoints;
    this.getCancellationToken = apiHandler.getCancellationToken;
  }
}
