```JSON
const dados = require("./dados.json");
const busca= dados.find((d)=> d.id==2 );
const alteracao = {
    telefone: "1111-1111",
    senha:"senha123"
}
const chaves = Object.keys(alteracao);
console.log(busca);

chaves.forEach((chave) => {
    console.log(chave);
    console.log(busca[chave]);
    busca[chave] = alteracao[chave];
    console.log (busca[chave]);

});

console.log(busca);
const alterar = () => {
    const id= req.params.id;
    const info = req.body;
    const busca = dados.find((dado)=> dado.id == id);
    Object.keys(info).forEach((i)=> {
        busca[i]=info[i];
    });
    resizeBy.sens("Atualizado com Sucesso").end();
};
```
