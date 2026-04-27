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
      ? 'https://loteriascaixa-api.herokuapp.com/api/megasena/latest'
      : 'https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest';

    const response = await fetch(endpoint);
    const ultimo = await response.json();

    const numerosUser = numeros.map(Number).sort((a, b) => a - b);
    const numerosUltimo = (ultimo.dezenas || ultimo.listaDezenas)
      .map(Number).sort((a, b) => a - b);

    const acertos = numerosUser.filter(n => numerosUltimo.includes(n)).length;

    const combinacaoExata = loteria === 'megasena' ? acertos === 6 : acertos === 15;
    const quina = loteria === 'megasena' ? acertos === 5 : null;
    const quadra = loteria === 'megasena' ? acertos === 4 : null;

    return res.status(200).json({
      ultimoSorteio: numerosUltimo,
      concurso: ultimo.concurso || ultimo.numero,
      combinacaoExata,
      quina,
      quadra,
      acertos,
      maisFrequente: null
    });

  } catch (e) {
    return res.status(500).json({ erro: e.message });
  }
}