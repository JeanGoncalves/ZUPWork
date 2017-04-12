export class Shot {

    constructor (
        public id: number,
        
        public title: string,
        public description: string,

        public images: Object,
        public user: Object,
        public tags: Object,

        public likes_count: number,
        public view_count: number,
        public buckets_count: number
    ) {}
}