import readline = require("readline-sync")

export function main() {

    let opcao, id, tipo, preco: number;
    let nome: string;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                    TECHPLUZ                         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todas os produtos             ");
        console.log("            3 - Buscar produto por Id                ");
        console.log("            4 - Atualizar dados do produto           ");
        console.log("            5 - Apagar produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readline.questionInt("");

        if (opcao == 9) {
            console.log("\nTECHPLUZ - Conectando você ao futuro, um dispositivo de cada vez!!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produto\n\n");
                break;
            case 2:
                console.log("\n\nListar todos os produtos\n\n");
                break;
            case 3:
                console.log("\n\nBuscar o produto por Id\n\n");
                break;
            case 4:
                console.log("\nAtualizar dados do produto");
                break;
            case 5:
                console.log("\nApagar produto");
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }

}

/* Função com os dados do desenvolvedor */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Pedro Almeida");
    console.log("                           ");
    console.log("*****************************************************");
}

main();
