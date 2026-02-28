# Análise de Risco e Ameaça - Mapeamento de Impacto

Risco analisado:
- Confiança excessiva no frontend para definição de plano e permissões

Impactos potenciais:
- Acesso indevido a funcionalidades
- Falhas de billing
- Inconsistência de autorização

Relação direta com:
OWASP Top 10 – Broken Access Control

Mitigação recomendada:
- Validação exclusiva no backend
- Revalidação de autorização por endpoint
- Logs e monitoramento