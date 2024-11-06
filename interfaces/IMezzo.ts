import { IUtente } from './IUtente';
import { StatoMezzo } from '../enums/StatoMezzo';
import { TipoMezzo } from '../enums/TipoMezzo';

export interface IMezzo {

    tipo: TipoMezzo;
    id: number;
    stato: StatoMezzo;

    assegnaUtente(utente: IUtente): void;
}