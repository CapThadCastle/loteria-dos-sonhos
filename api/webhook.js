module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ erro: 'Método não permitido' });
    }
  
    const { type, data } = req.body;
  
    if (type !== 'payment') {
      return res.status(200).json({ ok: true });
    }
  
    try {
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${data.id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`
        }
      });
  
      const pagamento = await response.json();
  
      if (pagamento.status !== 'approved') {
        return res.status(200).json({ ok: true });
      }
  
      const { sonho, qtd, faixa } = pagamento.metadata;
  
      await fetch('https://loteria-dos-sonhos.vercel.app/api/interpretar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sonho, qtd: parseInt(qtd), faixa: parseInt(faixa) })
      });
  
      return res.status(200).json({ ok: true });
  
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  }