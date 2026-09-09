var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

let choix;
let id_generale = 0;
let ticket = [];
let ticket_annuller = [];

function menu() {
    console.log(`
    ================================= 
            RAILWAY MANAGER 
    ================================= 
1. Afficher les trajets 
2. Acheter un ticket 
3. Afficher les tickets 
4. Annuler un ticket 
5. Rechercher un ticket 
6. Filtrer les trajets 
7. Trier les trajets 
8. Statistiques
0. Quitter `
    );
};


while (true) {
    menu();
    choix = Number(prompt("Entrez choix : "));
    if (choix == 0) {
        console.log("Au revoir !");
        break;
    } else if (choix == 1) {

        afficherTrajets();

    } else if (choix == 2) {

        acheter();

    } else if (choix == 3) {

        afficherTickets();

    } else if (choix == 4) {

        AnnulerTicket();

    } else if (choix == 5) {

        rechercher_ticket();

    } else if (choix == 6) {

        filtrer_trajet()

    } else if (choix == 7) {

        trie_ticket()

    } else if (choix == 8) {

        Statistiques()

    } else {
        console.log("Choix invalide !");
    }
}

function afficherTrajets() {
    console.log("======= AFFICHER TRAJETS ======= ");
    for (let i = 0; i < trips.length; i++) {
        console.log("#" + trips[i].id);
        console.log("departure : " + trips[i].departure);
        console.log("destination : " + trips[i].destination);
        console.log("departureTime : " + trips[i].departureTime);
        console.log("arrivalTime : " + trips[i].arrivalTime);
        console.log("price : " + trips[i].price);
        console.log("availableSeats : " + trips[i].availableSeats);
        console.log();
    }
}

function listAnnules(referance) {
    for (let i = 0; i < ticket_annuller.length; i++) {
        if (referance == ticket_annuller[i].trajet_id) {
            return i ;
        }
    }
    return -1;
}

function acheter() {
    let billetAnnulle ;
    let index ;
    console.log("======= ACHETER TICKETS ======= ");

    const billet = {
        nom: prompt("Nom : "),
        trajet_id: Number(prompt("Numero de Trajet : "))
    }

    if (0 < billet.trajet_id && billet.trajet_id <= trips.length) {
        if (listAnnules(billet.trajet_id)!= -1) {

            id_generale++;

            index = listAnnules(billet.trajet_id);

            billetAnnulle = ticket_annuller[index];

            billetAnnulle.nom = billet.nom;
            billetAnnulle.id = billet.id_generale;
            ticket.push(billetAnnulle);
                        console.log("Ticket #" + billetAnnulle.id);
                        console.log("Passager : " + billetAnnulle.nom);
                        console.log("Trajet : " + billetAnnulle.trajet);
                        console.log("Nombre ticket : " + billetAnnulle.nombre);
                        console.log("Place : " + billetAnnulle.Place);
                        console.log("Price : " + billetAnnulle.Prix);
        } else {
            for (let i = 0; i < trips.length; i++) {
                if (billet.trajet_id == trips[i].id) {
                    if (trips[i].availableSeats > 0) {
                        console.log("Ticket achete avec succes !");
                        trips[i].availableSeats -= 1;

                        billet.ticket_id = id_generale + 1;
                        billet.trajet = trips[i].departure + " => " + trips[i].destination;
                        billet.nombre = 1;
                        billet.Place = 50 - trips[i].availableSeats;
                        billet.Prix = trips[i].price;

                        ticket[ticket.length] = billet;
                        id_generale += 1;

                        console.log("Ticket #" + billet.ticket_id);
                        console.log("Passager : " + billet.nom);
                        console.log("Trajet : " + billet.trajet);
                        console.log("Nombre ticket : " + billet.nombre);
                        console.log("Place : " + billet.Place);
                        console.log("Price : " + billet.Prix);


                    } else {
                        console.log("Train complet.");

                    }
                }

            }
        }
    } else {

        console.log("Ticket introuvable");

    }
}

function afficherTickets() {
    console.log("======= AFFICHER TICKETS ======= ");
    if (ticket.length != 0) {
        for (let i = 0; i < ticket.length; i++) {

            console.log("Ticket : " + ticket[i].ticket_id);
            console.log("Passager : " + ticket[i].nom);
            console.log("Trajet : " + ticket[i].trajet);
            console.log("Nombre tiket : " + ticket[i].nombre);
            console.log("Place : " + ticket[i].Place);
            console.log("Prix : " + ticket[i].Prix);
            console.log("===================");
        }
    } else {
        console.log("Aucun ticket enregistré.")
    }

}

function AnnulerTicket() {
    console.log("======= ANNULET TICKETS ======= ");
    let ref = Number(prompt("ID : "));
    let trouve = 0;
    if (0 < ref && ref <= trips.length) {
        for (let i = 0; i < ticket.length; i++) {
            if (ticket[i].ticket_id == ref) {

                ticket_annuller.push(ticket[i]);
                let l = ticket[i].trajet_id
                trips[l].availableSeats++;

                for (let j = i; j < ticket.length - 1; j++) {
                    ticket[j] = ticket[j + 1];
                }
                ticket.length = ticket.length - 1;
                console.log("Ticket annulé avec succès");
                console.log();
                trouve = 1;
                break;

            }
        }
        if (trouve == 0) {
            console.log("Ticket introuvable. ");
        }
    } else {
        console.log("Nombre de id invalid !");
    }
}

function rechercher_ticket() {
    console.log("======= RECHERCHE TICKET ======= ");
    nom = prompt("Nom de passager : ");
    let referance = Number(prompt("Numero de ticket : "));
    for (let i = 0; i < ticket.length; i++) {

        if (ticket[i].ticket_id == referance && nom == ticket[i].nom) {
            console.log("Ticket : " + ticket[i].ticket_id);
            console.log("Passager : " + ticket[i].nom);
            console.log("Trajet : " + ticket[i].trajet);
            console.log("Nombre tiket : " + ticket[i].nombre);
            console.log("Place : " + ticket[i].Place);
            console.log("Prix : " + ticket[i].Prix);
            console.log("===================");
        }
    }
}

function filtrer_trajet() {
    console.log("======= RECHERCHE TICKET ======= ");
    let trouve = 0;
    let ville = prompt("Ville : ");
    console.log();
    for (let i = 0; i < trips.length; i++) {
        if (ville === trips[i].departure) {
            console.log("departure : " + trips[i].departure);
            console.log("destination : " + trips[i].destination);
            console.log("departureTime : " + trips[i].departureTime);
            console.log("arrivalTime : " + trips[i].arrivalTime);
            console.log("Nombre de ticket : " + 1);
            console.log("price : " + trips[i].price);
            console.log("availableSeats : " + trips[i].availableSeats);
            console.log();
            trouve = 1;

        }
    }
    if (trouve === 0) {
        console.log("Ville introuvable !");
    }
}

function trie_ticket() {
    console.log("======= TRI TICKET ======= ");
    console.log();
    console.log("1. trier par Prix croissant.");
    console.log("2. trier par Prix decroissant.");
    console.log();
    let nombre = Number(prompt(".Tu préfères le 1 OU 2 : "));
    switch (nombre) {
        case 1:
            croissant(trips);
            break;
        case 2:
            decroissant(trips)
            break;
        default:
            console.log("Nombre de choix invalide !");
    }
    function croissant(trip) {
        let tri;
        for (i = 0; i < trips.length-1; i++) {
            for (let j = 0; j < trips.length - 1 -i; j++) {
                if (trips[j].price > trips[j + 1].price) {
                    tri = trips[j + 1].price;
                    trips[j + 1].price = trips[j].price;
                    trips[j].price = tri;
                }
            }
        }
        for (let i = 0; i < trips.length; i++) {
            console.log("departure : " + trips[i].departure);
            console.log("destination : " + trips[i].destination);
            console.log("departureTime : " + trips[i].departureTime);
            console.log("arrivalTime : " + trips[i].arrivalTime);
            console.log("Nombre de ticket : " + trips[i].nombre);
            console.log("price : " + trips[i].price);
            console.log("availableSeats : " + trips[i].availableSeats);
            console.log();
        }
    }
    function decroissant(trip) {
        let tri;
        for (i = 0; i < trips.length - 1; i++) {
            for (let j = 0; j < trips.length - 1 - i; j++) {
                if (trips[j].price < trips[j + 1].price) {

                    tri = trips[j + 1].price;
                    trips[j + 1].price = trips[j].price;
                    trips[j].price = tri;

                }
            }
        }
        for (let i = 0; i < trips.length; i++) {
            console.log("departure : " + trips[i].departure);
            console.log("destination : " + trips[i].destination);
            console.log("departureTime : " + trips[i].departureTime);
            console.log("arrivalTime : " + trips[i].arrivalTime);
            console.log("Nombre de ticket : " + trips[i].nombre);
            console.log("price : " + trips[i].price);
            console.log("availableSeats : " + trips[i].availableSeats);
            console.log();
        }
    }

}

function Statistiques() {
    console.log("======= STATISTIQUES ======= ");
    console.log();
    console.log(`1. Nombre total de tickets vendus
2. Chiffre d'affaires total 
3. Trajet le plus vendu `);
    console.log();
    let nombre = Number(prompt("Nombre : "));
    switch (nombre) {
        case 1:
            somme(trips);
            break;
        case 2:
            chiffre_total();
            break;
        case 3:
            trajet_Plus_vendu();
            break;
        default:
            console.log("Nombre de choix invalide !");
    };

    function somme(trip) {
        let somme = ticket.length;
        console.log("Nombre total de tickets : " + somme);
    };

    function chiffre_total(trip) {
        let somme = 0;
        for (let i = 0; i < ticket.length; i++) {
            somme += ticket[i].Prix;
        }
        console.log("Chiffre d'affaires total : " + somme);
    };

    function trajet_Plus_vendu() {
        let min = ticket[0].availableSeats;
        let trouve = 0;
        for (let i = 1; i < ticket.length; i++) {
            if (min < ticket[i].availableSeats) {
                min = ticket[i].availableSeats;
                trouve = i;
            }
        }
        console.log("id #" + trips[trouve].trajet_id);
        console.log("departure : " + trips[trouve].departure);
        console.log("destination : " + trips[trouve].destination);
        console.log("departureTime : " + trips[trouve].departureTime);
        console.log("arrivalTime : " + trips[trouve].arrivalTime);
        console.log("price : " + trips[trouve].price);
        console.log("availableSeats : " + trips[trouve].availableSeats);

    }


}