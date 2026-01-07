const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
console.log(genes);
let newGenes = [];
newGenes.push(genes[0]);
newGenes.push(genes[1]);
newGenes.push(genes[4]);
newGenes.push(genes[2]);
let removedItem = genes.splice(3)
newGenes.push(removedItem[0], removedItem[0]);
newGenes.unshift('FXT');
console.log(newGenes);