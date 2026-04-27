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
      ? 'https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena'
      : 'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil';

    const response = await fetch(endpoint, {
      headers: { 'Accept': 'application/json' }
    });

    const ultimo = await response.json();

    const numerosUser = numeros.map(Number).sort((a, b) => a - b);
    const numerosUltimo = ultimo.listaDezenas.map(Number).sort((a, b) => a - b);

    const acertos = numerosUser.filter(n => numerosUltimo.includes(n)).length;

    const combinacaoExata = loteria === 'megasena' ? acertos === 6 : acertos === 15;
    const quina = loteria === 'megasena' ? acertos === 5 : null;
    const quadra = loteria === 'megasena' ? acertos === 4 : null;

    const frequencia = {};
    numerosUser.forEach(n => { frequencia[n] = 0; });

    if (ultimo.listaResultados) {
      ultimo.listaResultados.forEach(sorteio => {
        sorteio.listaDezenas.forEach(d => {
          const n = Number(d);
          if (frequencia[n] !== undefined) frequencia[n]++;
        });
      });
    }

    const maisFrequente = Object.entries(frequencia)
      .sort((a, b) => b[1] - a[1])[0];

    return res.status(200).json({
      ultimoSorteio: numerosUltimo,
      concurso: ultimo.numero,
      combinacaoExata,
      quina,
      quadra,
      acertos,
      maisFrequente: maisFrequente
        ? { numero: maisFrequente[0], vezes: maisFrequente[1] }
        : null
    });

  } catch (e) {
    return res.status(500).json({ erro: e.message });
  }
}