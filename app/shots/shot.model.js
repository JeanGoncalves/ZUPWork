"use strict";
class Shot {
    constructor(id, title, description, images, user, tags, likes_count, view_count, buckets_count) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.user = user;
        this.tags = tags;
        this.likes_count = likes_count;
        this.view_count = view_count;
        this.buckets_count = buckets_count;
    }
}
exports.Shot = Shot;
//# sourceMappingURL=shot.model.js.map