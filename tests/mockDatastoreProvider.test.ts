import { describe, expect, test } from '@jest/globals';

import { MockDatastoreProvider } from "@app/mock/datastore/MockDatastoreProvider";
import { Post } from '@app/core/models';


let datastoreProvider = new MockDatastoreProvider()

test('Read all posts', () => {
    let posts = datastoreProvider.getAllPosts([]);

    expect(posts.length).toBeGreaterThan(0)
    expect(posts[0] instanceof Post).toBe(true)
});
