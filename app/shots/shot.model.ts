export class Shot {

    constructor (
        public id: number,
        
        public title: string,
        public description: string,

        public images: {},
        public user: {},
        public tags: {},

        public likes_count: number,
        public view_count: number,
        public buckets_count: number
    ) {}
}