module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { numeros, loteria } = req.body;

  if (!numeros || !loteria) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  try {
    const endpoint = loteria === 'megasena'
      ? 'https://loteriascaixa-api.herokuapp.com/api/megasena'
      : 'https://loteriascaixa-api.herokuapp.com/api/lotofacil';

    const response = await fetch(endpoint);
    const todos = await response.json();

    const numerosUser = numeros.map(Number).sort((a, b) => a - b);
    const ultimo = todos[0];
    const numerosUltimo = (ultimo.dezenas || ultimo.listaDezenas)
      .map(Number).sort((a, b) => a - b);

    let combinacaoExata = false;
    let quinaCount = 0;
    let quadraCount = 0;

    todos.forEach(sorteio => {
      const dezenas = (sorteio.dezenas || sorteio.listaDezenas).map(Number);
      const acertos = numerosUser.filter(n => dezenas.includes(n)).length;

      if (loteria === 'megasena') {
        if (acertos === 6) combinacaoExata = true;
        if (acertos === 5) quinaCount++;
        if (acertos === 4) quadraCount++;
      } else {
        if (acertos === 15) combinacaoExata = true;
      }
    });

    const frequencia = {};
    numerosUser.forEach(n => { frequencia[n] = 0; });
    todos.forEach(sorteio => {
      const dezenas = (sorteio.dezenas || sorteio.listaDezenas).map(Number);
      dezenas.forEach(n => {
        if (frequencia[n] !== undefined) frequencia[n]++;
      });
    });

    const maisFrequente = Object.entries(frequencia)
      .sort((a, b) => b[1] - a[1])[0];

    return res.status(200).json({
      ultimoSorteio: numerosUltimo,
      concurso: ultimo.concurso || ultimo.numero,
      combinacaoExata,
      quina: loteria === 'megasena' ? quinaCount : null,
      quadra: loteria === 'megasena' ? quadraCount : null,
      maisFrequente: maisFrequente
        ? { numero: maisFrequente[0], vezes: maisFrequente[1] }
        : null
    });

  } catch (e) {
    return res.status(500).json({ erro: e.message });
  }
}