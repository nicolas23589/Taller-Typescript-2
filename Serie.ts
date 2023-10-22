export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    linkWebPage: string;
    linkImage: string;
    description: string;

    constructor(index: number, name: string, channel: string,  seasons: number, description: string, linkWebPage: string, linkImage: string) {
        this.id = index;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }
    
   
}