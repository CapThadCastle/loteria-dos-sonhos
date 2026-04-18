module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ erro: 'Método não permitido' });
    }
  
    const { sonho, qtd, faixa } = req.body;
  
    if (!sonho || !qtd || !faixa) {
      return res.status(400).json({ erro: 'Dados incompletos' });
    }
  
    const idempotencyKey = `${Date.now()}-${Math.random()}`;
  
    try {
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          'X-Idempotency-Key': idempotencyKey
        },
        body: JSON.stringify({
          items: [{
            title: 'Loteria do Sonho — Consulta de números',
            quantity: 1,
            unit_price: 5.00,
            currency_id: 'BRL'
          }],
          back_urls: {
            success: 'https://loteria-dos-sonhos.vercel.app/sucesso',
            failure: 'https://loteria-dos-sonhos.vercel.app',
            pending: 'https://loteria-dos-sonhos.vercel.app'
          },
          auto_return: 'approved',
          metadata: { sonho, qtd, faixa },
          notification_url: 'https://loteria-dos-sonhos.vercel.app/api/webhook'
        })
      });
  
      const data = await response.json();
  
      if (!data.id) throw new Error(JSON.stringify(data));
  
      return res.status(200).json({
        preferenceId: data.id,
        initPoint: data.init_point,
        sandboxInitPoint: data.sandbox_init_point
      });
  
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  }