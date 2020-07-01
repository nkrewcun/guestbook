export class Message {

  id: number;
  titre: string;
  description: string;
  dateAjout: Date;
  image: string;

  constructor(id: number = null, titre: string = null, description: string = null, image: string = null) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.image = image;
    this.dateAjout = new Date();
  }
}
