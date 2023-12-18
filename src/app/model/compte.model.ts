export class Compte {
    
    nom: string
    prenom: string
    courriel: string
    password: string
    typeDeCompte: string
    dateCreation: string

    constructor(
        nom: string,
        prenom: string,
        courriel: string,
        password: string,
        typeDeCompte: string,
        dateCreation: string  
    ) {
        this.nom = nom
        this.prenom = prenom
        this.courriel = courriel
        this.password = password
        this.typeDeCompte = typeDeCompte
        this.dateCreation = dateCreation
    } 

}
