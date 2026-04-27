const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Descreva seu sonho: ', async (sonho) => {
  rl.question('Quantidade de números (ex: 6): ', async (qtd) => {
    rl.question('Faixa máxima (ex: 60): ', async (faixa) => {
      rl.close();

      console.log('\nInterpretando seu sonho...\n');

      try {
        require('dotenv').config({ path: '.env.local' });

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-5',
            max_tokens: 1000,
            messages: [{
              role: 'user',
              content: `Você é um intérprete místico de sonhos para loterias brasileiras.
              
SONHO: "${sonho}"
QUANTIDADE DE NÚMEROS: ${qtd}
FAIXA: 1 a ${faixa}

Interprete o sonho e gere exatamente ${qtd} números distintos entre 1 e ${faixa}.
Responda APENAS em JSON válido:
{"numeros": [...], "interpretacao": "..."}`
            }]
          })
        });

        const data = await response.json();
        const text = data.content.map(i => i.text || '').join('');
        const clean = text.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(clean);

        console.log('=== RESULTADO ===');
        console.log('Números:', parsed.numeros.sort((a,b) => a-b).join(' - '));
        console.log('\nInterpretação:', parsed.interpretacao);

      } catch(e) {
        console.log('Erro:', e.message);
      }
    });
  });
});