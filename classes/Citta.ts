import { ICitta } from '../interfaces/ICitta';
import { IMezzo } from '../interfaces/IMezzo';

export class Citta implements ICitta{

    constructor(public nome:string, public mezziDisponibili: IMezzo[]){};

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
        console.log(`il mezzo ${mezzo.id} ${mezzo.tipo} è stato aggiunto alla lista di mezzi disponibili della città ${this.nome}`);
    }

}