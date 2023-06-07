import { DatastoreInterface } from "@app/core/datastore/DatastoreInterface"
import { Filter } from "@app/core/datastore/Filter";
import { Post } from "@app/core/models";
import jsonPosts from "@app/mock/stubs/mockdata.json"

export class MockDatastoreProvider implements DatastoreInterface {
    posts: Post[] = []

    static _fetchPostsFromStubData(): Post[] {
        return jsonPosts.map((data) => Post.fromJson(data));
    }

    constructor() {
        this.posts = MockDatastoreProvider._fetchPostsFromStubData();
    }

    getAllPosts(filters: Filter[]): Post[] {
        return Filter.applyFilters(filters, this.posts);
    }
    getPostById(postId: string): Post {
        return Filter.applyFilters([Filter.equalTo("id", postId)], this.posts)[0];
    }
    setPost(post: Post) {
        this.posts.push(post);
    }
}