import { IMezzo } from '../interfaces/IMezzo';
import { IUtente } from '../interfaces/IUtente';
import { StatoMezzo } from '../enums/StatoMezzo';
import { TipoMezzo } from '../enums/TipoMezzo';

export class Mezzo implements IMezzo{

    constructor(public id:number, public tipo:TipoMezzo, public stato:StatoMezzo){}

    assegnaUtente(utente: IUtente): void {
        
        if(this.stato === StatoMezzo.DISPONIBILE){
            this.stato = StatoMezzo.INUSO;
            console.log(`il mezzo ${this.id} ${this.tipo} è stato assegnato all'utente ${utente.nome} ${utente.cognome}`);
        }
    }
}