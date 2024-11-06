import { IUtente } from '../interfaces/IUtente';
import { IMezzo } from '../interfaces/IMezzo';
import { StatoMezzo } from '../enums/StatoMezzo';

export class Utente implements IUtente{

constructor(public nome:string, public cognome:string, public email:string, public metodoPagamento:string){}

prenotaMezzo(mezzo:IMezzo):void{

    if(mezzo.stato===StatoMezzo.DISPONIBILE){
        mezzo.assegnaUtente
        console.log(`il mezzo ${mezzo.id}" ${mezzo.tipo} è stato assegnato all'utente ${this.nome} ${this.cognome}`)
    } else{
        console.log(`il mezzo ${mezzo.id} ${mezzo.tipo} non è disponibile in quanto è in uso da un altro utente`);
    }

}

}