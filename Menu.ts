import readline = require("readline-sync");

import { colors } from "./src/util/color";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Ios } from "./src/model/IOS";
import { Samsung } from "./src/model/Samsung";
import { Produto } from "./src/model/Produto";


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, ios, samsung: string;
    let tipoProduto = [`IOS`,`Samsung`];

    // Objeto da Classe ProdutoController
    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Ios(produtoController.gerarId(),
        "Iphone 15", 1, 45.00, "Apple"));

    produtoController.cadastrar(new Samsung(produtoController.gerarId(),
        "Galaxy S24", 2, 60.00, "Samsung"));

    while (true) {

        console.log(colors.fg.yellowstrong,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                    TECHPLUZ                         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por Id                ");
        console.log("            4 - Atualizar dados do produto           ");
        console.log("            5 - Apagar produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
                colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readline.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.bluestrong, 
                        "\nTECHPLUZ - Conectando você ao futuro, um dispositivo de cada vez!!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                            "\n\nCriar Produto\n\n", colors.reset);
                        nome = readline.question("Digite o Nome do Produto: ");

                        tipo = readline.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                        preco = readline.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        ios = readline.question("IOS");

                        produtoController.cadastrar(new Ios(produtoController.gerarId(),
                            nome, tipo, preco, ios));
                        break;
                    case 2:
                        samsung = readline.question("SAMSUNG");
                        produtoController.cadastrar(new Samsung(produtoController.gerarId(),
                            nome, tipo, preco, samsung));
                        break;
                }

                keyPress()
                break;
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                            "\n\nListar todos os produtos\n\n", colors.reset);
                            produtoController.listarTodas();
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                            "\n\nBuscar o produto por Id\n\n", colors.reset);
                            id = readline.questionInt("Digite o Id do Produto: ");
                            produtoController.procurarPorId(id);
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                            "\nAtualizar dados do produto", colors.reset);
                    id = readline.questionInt("Digite o Id do Produto: ");
                    let produto = produtoController.buscarNoArray(id)

                            if (produto !== null){
        
                                nome = readline.question("Digite o Nome do Produto: ");
        
                                tipo = produto.tipo;
                
                                preco = readline.questionFloat("Digite o preco: ");
                
                                switch (tipo) {
                                    case 1:
                                        ios = readline.question("Digite o Nome do produto IOS: ");
                                        produtoController.atualizar(new Ios(id,
                                            nome, tipo, preco, ios));
                                        break;
                                    case 2:
                                        samsung = readline.question("Digite o nome do produto da Samsung: ");
                                        produtoController.atualizar(new Samsung(id,
                                            nome, tipo, preco, samsung));
                                        break;
                                }
        
                            }else
                                console.log("Produto não Encontrado!")
                        keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                            "\nApagar produto", colors.reset);
                    id = readline.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);
                break;
            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n", colors.reset);
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main();
