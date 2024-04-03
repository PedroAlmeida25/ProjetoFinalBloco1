import { Produto } from "./Produto";

export class Ios extends Produto{
    private _apple: string;

    constructor(id: number, nome: string, tipo: number, preco: number, apple: string){
        super(id, nome, tipo, preco)
        this._apple = apple;
    }


    /**
     * Getter apple
     * @return {string}
     */
	public get apple(): string {
		return this._apple;
	}

    /**
     * Setter apple
     * @param {string} value
     */
	public set apple(value: string) {
		this._apple = value;
	}
    public visualizar(): void {
        super.visualizar();
        console.log(`Apple: ${this._apple}`);
    }
}