import { AppProviderInterface } from "@app/core/AppProviderInterface";
import { DatastoreInterface } from "@app/core/datastore/DatastoreInterface";
import { MockDatastoreProvider } from "@app/mock/datastore/MockDatastoreProvider"

export class MockAppProvider implements AppProviderInterface {
    datastore: DatastoreInterface = new MockDatastoreProvider();
}