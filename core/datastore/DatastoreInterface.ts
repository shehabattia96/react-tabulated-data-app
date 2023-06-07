import { Filter } from "@app/core/datastore/Filter"
import { Post } from "@app/core/models"

export interface DatastoreInterface {
    getAllPosts(filters: Filter[]): Post[]
    getPostById(postId: string): Post;
    setPost(post: Post)
}