import { Mezzo } from './classes/Mezzo';
import { Utente } from './classes/Utente';
import { Citta } from './classes/Citta';
import { StatoMezzo } from './enums/StatoMezzo';
import { TipoMezzo } from './enums/TipoMezzo';

let monopattino = new Mezzo(1,TipoMezzo.MONOPATTINO, StatoMezzo.DISPONIBILE);
let bici = new Mezzo(2,TipoMezzo.BICI, StatoMezzo.DISPONIBILE);
let scooter = new Mezzo(3,TipoMezzo.SCOOTER, StatoMezzo.INUSO);
let monopattino2 = new Mezzo(4, TipoMezzo.MONOPATTINO, StatoMezzo.DISPONIBILE);

let utente1 = new Utente("marco", "morra", "stefmai@email.it", "carta");
let utente2 = new Utente("stefi", "messina", "ste@", "bancomat");

let roma = new Citta("roma",[monopattino]);

roma.aggiungiMezzo(scooter);
roma.aggiungiMezzo(bici);
utente1.prenotaMezzo(monopattino);
roma.aggiungiMezzo(monopattino2);