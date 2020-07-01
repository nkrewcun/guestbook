export class Message {

  id: number;
  titre: string;
  description: string;
  image: string;

  constructor(id: number = null, titre: string = null, description: string = null, image: string = null) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.image = image;
  }
}
