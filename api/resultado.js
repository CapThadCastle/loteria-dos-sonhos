module.exports = async function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).json({ erro: 'Método não permitido' });
    }
  
    const { payment_id } = req.query;
  
    if (!payment_id) {
      return res.status(400).json({ erro: 'Payment ID não informado' });
    }
  
    try {
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`
        }
      });
  
      const pagamento = await response.json();
  
      if (pagamento.status !== 'approved') {
        return res.status(402).json({ erro: 'Pagamento não aprovado' });
      }
  
      const { sonho, qtd, faixa } = pagamento.metadata;
  
      const resultado = await fetch('https://loteria-dos-sonhos.vercel.app/api/interpretar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sonho, qtd: parseInt(qtd), faixa: parseInt(faixa) })
      });
  
      const data = await resultado.json();
  
      return res.status(200).json(data);
  
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  }