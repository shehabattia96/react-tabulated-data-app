import { DatastoreInterface } from "@app/core/datastore/DatastoreInterface"

export interface AppProviderInterface {
    datastore: DatastoreInterface
}