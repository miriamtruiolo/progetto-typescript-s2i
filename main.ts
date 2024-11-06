import { Mezzo } from './classes/Mezzo';
import { Utente } from './classes/Utente';
import { Citta } from './classes/Citta';
import { StatoMezzo } from './enums/StatoMezzo';
import { TipoMezzo } from './enums/TipoMezzo';

let bici = new Mezzo(2,TipoMezzo.BICI, StatoMezzo.DISPONIBILE);
let scooter = new Mezzo(3,TipoMezzo.SCOOTER, StatoMezzo.INUSO);
let monopattino = new Mezzo(1,TipoMezzo.MONOPATTINO, StatoMezzo.DISPONIBILE);
let bicielEttrica = new Mezzo(4, TipoMezzo.MONOPATTINO, StatoMezzo.DISPONIBILE);

let utente1 = new Utente("Mattia", "Casi", "mattiacasi@email.it", "bancomat");
let utente2 = new Utente("Chiara", "Luci", "chiara@email.it", "card");

let milano = new Citta("milano",[monopattino]);

milano.aggiungiMezzo(scooter);
milano.aggiungiMezzo(bici);
utente1.prenotaMezzo(monopattino);
milano.aggiungiMezzo(bicielEttrica);