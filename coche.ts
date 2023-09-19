import { Motor } from "./motor";

export class Coche {
    private _numeroPasajeros: number;
    private _marca: string;
    private _modelo: string;
    private _motor: Motor;

    constructor(numeroPasajeros: number, marca: string, modelo: string, motor: Motor) {
        this._numeroPasajeros = numeroPasajeros;
        this._marca = marca;
        this._modelo = modelo;
        this._motor = motor;
    }

    public get numeroPasajeros(): number {
        return this._numeroPasajeros;
    }
    
    public set numeroPasajeros(value: number) {
        this._numeroPasajeros = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public get motor(): Motor {
        return this._motor;
    }

    public set motor(value: Motor) {
        this._motor = value;
    }

    imprimir(): string {
        return `Coche: ${this._marca}-${this._modelo}, tiene un número de pasajeros de ${this._numeroPasajeros} y el motor que usa es ${this._motor.imprimir()}`;
    }
}