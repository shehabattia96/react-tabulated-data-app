export class Post {
    id: String
    title: String
    body: String
    userId: String

    constructor({
        id,
        title,
        body,
        userId
    }) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId;
    }

    static fromJson(json) {
        return new Post(json)
    }
}