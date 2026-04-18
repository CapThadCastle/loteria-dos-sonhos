const dicionario = {
    1: ["início","começo","unidade","liderança","campeão","primeiro","único","solo"],
    2: ["parceria","conflito","dupla","par","dois","casal","divide"],
    3: ["trindade","exagero","equilíbrio","três","trio","triângulo"],
    4: ["estabilidade","mesa","móvel","cadeira","quadrado","quatro","chão","firme"],
    5: ["sentidos","estrela","movimento","cinco","cheiro","toque","visão","audição","paladar"],
    6: ["família","responsabilidade","lar","casa","seis","parentes","mãe","pai","filho","filha"],
    7: ["sorte","misticismo","sete","deus","magia","sagrado"],
    8: ["infinito","poder","repetição","oito","força","dinheiro","prosperidade"],
    9: ["fim","ciclo","balão","desapego","nove","encerramento","conclusão","terminar"],
    10: ["camisa","pelé","futebol","campo","dez","gol","time","bola","estádio"],
    11: ["portal","intuição","repetição","onze","visão","psíquico","espiritual"],
    12: ["dúzia","apóstolos","cavaleiros","ovos","doze","meses","anos"],
    13: ["azar","morte","treze","cemitério","medo","terror","assombração"],
    14: ["adolescência","transição","ambiguidade","quatorze","jovem","puberdade"],
    15: ["quinzena","mês","intervalo","quinze","salário","pagamento"],
    16: ["grávida","gestação","gravidez","limiar","dezesseis","barriga","bebê","nascimento"],
    17: ["azar","superstição","dezessete","itália","italiano"],
    18: ["maioridade","motorista","dezoito","carro","habilitação","adulto","votar"],
    19: ["transição","dezenove","quase","pré","véspera"],
    20: ["visão","clareza","plenitude","vinte","completo","cheio","pleno"],
    21: ["telefone","celular","comunicação","vinte e um","contato","ligação","mensagem"],
    22: ["doido","maluco","louco","pato","ave","vinte e dois","pássaro","voar"],
    23: ["conspiração","estranheza","caos","vinte e três","mistério","segredo"],
    24: ["dia","horas","ciclo","vigilância","vinte e quatro","tempo","relógio","noite"],
    25: ["vermelho","natal","celebração","vinte e cinco","festa","alegria","presente"],
    26: ["alfabeto","letra","linguagem","vinte e seis","escrever","ler","livro","texto"],
    27: ["destruição","auge","tragédia","vinte e sete","músico","artista"],
    28: ["lua","menstruação","feminilidade","vinte e oito","ciclo lunar","mulher","lunar"],
    29: ["crise","preparação","vinte e nove","mudança","iminente"],
    30: ["maturidade","adulto","trinta","chamado","responsável"],
    31: ["fim de mês","exagero","trinta e um","conta","fatura","dívida"],
    32: ["dentes","mordida","comunicação","trinta e dois","boca","sorriso","dentista"],
    33: ["cristo","deus","jesus","maçonaria","sacrifício","trinta e três","sagrado","religião","fé"],
    34: ["corredor","indecisão","trinta e quatro","caminho","meio","passagem"],
    35: ["trabalho","carreira","responsabilidade","trinta e cinco","meta","profissão","emprego"],
    36: ["rotina","labirinto","trinta e seis","repetição","preso","enredado"],
    37: ["primo","fora da curva","trinta e sete","diferente","especial","marginal"],
    38: ["tiro","briga","arma","confronto","trinta e oito","violência","luta","guerra","conflito"],
    39: ["acumulação","peso","mãe","trinta e nove","excesso","carga","gordura"],
    40: ["provação","deserto","quarentena","quarenta","isolamento","penitência","sacrifício"],
    41: ["introspecção","reavaliação","quarenta e um","reflexão","pensar","solidão"],
    42: ["resposta","absurdo","humor","quarenta e dois","piada","sentido","universo"],
    43: ["ruído","complicação","quarenta e três","bagunça","confusão","barulho"],
    44: ["estrutura","burocracia","tijolo","quarenta e quatro","organização","papel","lei"],
    45: ["balanço","virada","quarenta e cinco","equilíbrio","mudança","reviravolta"],
    46: ["cromossomo","genética","biologia","quarenta e seis","corpo","DNA","ciência"],
    47: ["detalhe","obsessão","quarenta e sete","minucioso","nerd","análise"],
    48: ["manipulação","estratégia","quarenta e oito","poder","controle","político"],
    49: ["tabela","plenitude","pai","quarenta e nove","completo","chefe"],
    50: ["metade","meio","jubileu","cinquenta","meados","meio do caminho"],
    51: ["cachaça","bebida","álcool","malandragem","cinquenta e um","bar","boteco","drink"],
    52: ["baralho","probabilidade","jogo","cinquenta e dois","carta","jogar","azar"],
    53: ["instabilidade","experimento","cinquenta e três","teste","tentativa"],
    54: ["tensão","combinação","cinquenta e quatro","atrito","estranheza"],
    55: ["liberdade","reviravolta","cinquenta e cinco","solto","livre","independente"],
    56: ["saturação","acúmulo","excesso","cinquenta e seis","cheio","transbordando"],
    57: ["improviso","gambiarra","cinquenta e sete","jeito","remendo","criativo"],
    58: ["planejamento","transição","cinquenta e oito","preparar","organizar"],
    59: ["urgência","prazo","contagem regressiva","cinquenta e nove","apressado","rápido"],
    60: ["relógio","tempo","hora","idoso","sessenta","minutos","velho","passado"],
    61: ["experiência","desaceleração","sessenta e um","sênior","sábio","lento"],
    62: ["loop","fim","reinício","sessenta e dois","repetir","de novo","recomeço"],
    63: ["aposentadoria","social","sessenta e três","descanso","parar","férias"],
    64: ["videogame","binário","potência","sessenta e quatro","jogo","computador"],
    65: ["colheita","aposentadoria","sessenta e cinco","fruto","resultado","merecer"],
    66: ["diabo","capeta","estrada","viagem","sessenta e seis","rota","caminho","mau"],
    67: ["bastidores","política","sessenta e sete","corredor","poder","governo","secreto"],
    68: ["protesto","rebelião","sessenta e oito","revolução","manifestação","resistência"],
    69: ["yin yang","sexo","erotismo","sessenta e nove","pelado","nudez","prazer"],
    70: ["espiritual","sabedoria","setenta","plenitude","guru","iluminado"],
    71: ["memória","balanço","setenta e um","recordar","passado","nostalgia"],
    72: ["anjo","filosofia","setenta e dois","nome","celestial","proteção"],
    73: ["melhor número","autoironia","setenta e três","piada","meme","especial"],
    74: ["místico","disciplina","setenta e quatro","oculto","segredo","escondido"],
    75: ["herança","legado","setenta e cinco","deixar","lembrar","ancestral"],
    76: ["independência","ruptura","setenta e seis","liberdade","revolução","quebrar"],
    77: ["vício","obsessão","setenta e sete","sorte dupla","apego","repetição"],
    78: ["tarô","destino","setenta e oito","carta","leitura","oráculo","futuro"],
    79: ["limiar","balanço","setenta e nove","beira","margem","quase lá"],
    80: ["patriarca","memória","oitenta","ancião","matriarca","história"]
  };
  
  module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ erro: 'Método não permitido' });
    }
  
    const { sonho, qtd, faixa } = req.body;
  
    if (!sonho || !qtd || !faixa) {
      return res.status(400).json({ erro: 'Dados incompletos' });
    }
  
    const dicionarioStr = Object.entries(dicionario)
      .map(([n, p]) => `${n}: ${p.slice(0, 5).join(', ')}`)
      .join('\n');
  
    const prompt = `Você é um intérprete místico especializado em sonhos e numerologia para loterias brasileiras.
  
  DICIONÁRIO DE PALAVRAS x NÚMEROS:
  ${dicionarioStr}
  
  SONHO DO JOGADOR:
  "${sonho}"
  
  CONFIGURAÇÃO DA LOTERIA:
  - Quantidade de números: ${qtd}
  - Faixa: 1 a ${faixa}
  
  SUA TAREFA:
  1. Interprete o sonho profundamente — identifique símbolos, emoções, elementos, personagens, ações
  2. Cruze com o dicionário fornecido
  3. Use numerologia e simbolismo para complementar onde o dicionário não cobre
  4. Selecione exatamente ${qtd} números distintos entre 1 e ${faixa}
  5. Explique brevemente o raciocínio
  
  RESPONDA APENAS em JSON válido, sem markdown, neste formato:
  {
    "numeros": [lista de ${qtd} números inteiros distintos entre 1 e ${faixa}],
    "interpretacao": "texto explicando os símbolos do sonho e como chegou nos números (máx 4 linhas)"
  }`;
  
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      });
  
      const data = await response.json();
      const text = data.content.map(i => i.text || '').join('');
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
  
      return res.status(200).json(parsed);
  
    } catch (e) {
      return res.status(500).json({ erro: 'Erro ao processar o sonho' });
    }
  }