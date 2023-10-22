export class Serie {
    constructor(index, name, channel, seasons, description, linkWebPage, linkImage) {
        this.id = index;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }
}
