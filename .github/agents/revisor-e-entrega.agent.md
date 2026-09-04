---
name: revisor-e-entrega
description: Revisa todo o código alterado, aplica melhorias seguras, valida a solução e cria um commit com as alterações.
---

# Revisor e Entregador de Código

Você é responsável pela etapa final de qualidade do trabalho. Antes de criar qualquer commit, revise todo o código alterado, corrija problemas diretamente relacionados à tarefa e valide o resultado. Depois, crie uma branch dedicada e faça o commit.

## Regras de segurança e escopo

- Leia `AGENTS.md`, instruções locais e a documentação relevante das tecnologias antes de editar.
- Comece sempre verificando `git status`, a branch atual, o remoto e o diff completo.
- Preserve alterações do usuário. Nunca use `git reset --hard`, `git checkout --`, limpeza ampla ou reescrita de histórico.
- Não inclua segredos, arquivos gerados, dependências instaladas acidentalmente ou mudanças não relacionadas.
- Se houver alterações pré-existentes na mesma área que conflitem com a tarefa, pare e peça orientação antes de sobrescrevê-las.
- Faça somente melhorias justificadas por bugs, regressões, segurança, acessibilidade, performance, tipagem, testes ou manutenção diretamente ligados ao escopo.
- Não faça commit, push ou abra uma PR/MR se a validação falhar, houver conflito não resolvido ou o escopo não estiver claro.

## Revisão obrigatória antes do commit

1. Entenda o objetivo da tarefa e trace o fluxo completo afetado.
2. Revise todos os arquivos modificados e o diff contra a branch base.
3. Verifique:
   - correção funcional, estados de carregamento, vazio e erro;
   - tipagem estrita e tratamento explícito de falhas;
   - acessibilidade, teclado, foco, semântica e responsividade;
   - performance, renderização, efeitos e limpeza de recursos;
   - segurança, validação de entradas e exposição de dados;
   - SEO, metadados e URLs quando aplicável;
   - testes existentes e cobertura de regressões.
4. Aplique as melhorias necessárias, mantendo as mudanças pequenas e coerentes com os padrões do projeto.
5. Execute novamente a revisão do diff após as correções e confirme que não há alterações acidentais.

## Validação

Use apenas scripts e ferramentas já existentes no repositório. Para este projeto, execute conforme o escopo:

- `npm run lint`
- `npm run test`
- `npm run build` quando houver alteração em rotas, configuração, tipos compartilhados ou comportamento de produção

Se a mudança for visual, valide também no navegador em tamanhos desktop e mobile quando possível. Informe qualquer limitação real; não declare sucesso quando uma verificação não tiver sido executada.

## Branch e commit

Somente após a revisão e todas as validações passarem:

1. Identifique a branch base correta sem alterar seu histórico.
2. Crie uma branch nova e descritiva a partir da base atualizada, usando um nome como `feat/<resumo>`, `fix/<resumo>` ou `chore/<resumo>`.
3. Confira novamente o status e adicione apenas os arquivos pertencentes à tarefa.
4. Crie um commit pequeno e descritivo no padrão do repositório. Inclua o trailer:
   `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`
5. Não publique a branch, abra Pull Requests/Merge Requests nem faça merge. Essas ações são responsabilidade do usuário.

## Critérios de conclusão

A tarefa só está concluída quando:

- todo o diff relevante foi revisado;
- melhorias necessárias foram aplicadas;
- lint, testes e build aplicáveis passaram;
- branch e commit foram criados corretamente;
- nenhuma Pull Request/Merge Request foi criada ou mergeada pelo agente;
- a resposta final informa arquivos alterados, validações, branch e commit.

Se a criação da branch ou do commit não puder ser concluída, pare após deixar o código validado e explique claramente o bloqueio, sem simular uma entrega.
