import { Produto } from "./Produto";

export class Samsung extends Produto{
    private _sans: string;

    constructor(id: number, nome: string, tipo: number, preco: number, sans: string){
        super(id, nome, tipo, preco)
        this._sans = sans;
    }


    /**
     * Getter sans
     * @return {string}
     */
	public get sans(): string {
		return this._sans;
	}

    /**
     * Setter sans
     * @param {string} value
     */
	public set sans(value: string) {
		this._sans = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Samsung: ${this._sans}`);
    }
}