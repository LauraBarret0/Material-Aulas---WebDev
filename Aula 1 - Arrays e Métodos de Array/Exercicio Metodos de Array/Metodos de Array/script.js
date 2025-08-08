function executarPush() {
  // Adiciona no Final
  const array = ['🍎', '🍌'];
  array.push('🍇');
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  // Remove o último elemento
  const array = ['🍎', '🍌', '🍇'];
  array.pop()
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  // Remove o primeiro elemento
  const array = ['🍎', '🍌', '🍇'];
  array.shift()
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  // Adiciona no início
  const array = ['🍌', '🍇'];
  array.unshift('🍓')
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  // Retorna True or False
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes('🥝');
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  // Inverte a ordem da lista
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  // Ordena as listas
  const array = [3, 1, 4, 2,11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a,b) => a - b ); // crescente
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse(); // decrescente
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array.slice(1,3);
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  array.forEach((pegaItem) => console.log(pegaItem))
  const resultado = 'Resultado da operação forEach';
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  // array.map((pegaItem) => console.log(pegaItem + '✅'))
  const resultado = array.map(pegaItem => `'✅' ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegaItem, index) => {
      return `<h1> Item ${index + 1} em promoção!</h1>
        <p> ${pegaItem} </p>
      `
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem === '🍎');
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem === ' ');
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação findIndex';
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  },0);
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


