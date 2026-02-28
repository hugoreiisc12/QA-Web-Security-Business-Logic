/**
 * Script demonstrativo para análise de lógica de negócio (client-side)
 *
 * ⚠️ Uso exclusivamente educacional.
 * Não altera permissões reais, não concede acesso e não interfere no backend.
 */

(function () {
  const originalFetch = window.fetch;

  window.fetch = async (...args) => {
    const response = await originalFetch(...args);

    if (typeof args[0] === 'string' && args[0].includes('/get-user')) {
      const cloned = response.clone();
      const data = await cloned.json();

      console.log('[INFO] Resposta original do backend:', data);

      const simulatedView = {
        ...data,
        client_side_simulation: {
          plan_label: 'PRO (simulação visual)',
          access_scope: 'frontend-only'
        }
      };

      console.log(
        '[SIMULATION] Estrutura simulada para análise de dependência do frontend:',
        simulatedView
      );
    }

    return response;
  };

  console.log('[READY] Script de análise client-side ativo');
})();