export class Shot {

    constructor (
        public title: string,
        public description: string,
        public images: Object,
        public id: number,
        public likes_count: number,
        public likes_url: string,
        public user: Object,
        public view_count: number
    ) {}
}