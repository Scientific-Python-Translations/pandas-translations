# Benchmarks

Os benchmarks são testes para medir a desempenho do pandas. Existem dois tipos diferentes de benchmarks relevantes para o pandas:

- Benchmarks internos ao pandas para medir a velocidade e o uso de memória ao longo do tempo
- Benchmarks da comunidade que comparam a velocidade ou o uso de memória de diferentes ferramentas ao realizar a mesma tarefa

## Benchmarks do pandas

benchmarks do pandas são implementados no diretório [asv_bench](https://github.com/pandas-dev/pandas/tree/main/asv_bench)
do nosso repositório. Os benchmarks são implementados para o framework
[airspeed velocity](https://asv.readthedocs.io/en/v0.6.1/) (abreviado como asv).

Os benchmarks podem ser executados localmente por qualquer desenvolvedor do pandas. Isso pode ser feito com o comando `asv run`, e pode ser útil detectar se as alterações locais têm
um impacto no desempenho, executando os benchmarks antes e depois das alterações.
Mais informações sobre a execução da suíte de testes de desempenho podem ser encontradas
[aqui](https://pandas.pydata.org/docs/dev/development/contributing_codebase.html#running-the-performance-test-suite).

Note que os benchmarks não são determinísticos, e executá-los em hardwares diferentes ou no mesmo hardware com diferentes níveis de estresse tem um grande impacto no resultado. Mesmo executando os benchmarks com hardwares idênticos e em condições quase idênticas, ocorrem diferenças significativas ao rodar o mesmo código.

## Servidores para os benchmarks do pandas

Atualmente temos dois servidores físicos executando os benchmarks do pandas para todos
(ou quase todos) de commit na branch `main`. Os servidores operam de forma independente. O servidor original está em execução há muito tempo, e é fisicamente localizado com um dos mantenedores do pandas. O servidor mais novo está em um datacenter gentilmente patrocinado por [OVHCloud](https://www.ovhcloud.com/). Mais informações sobre os patrocinadores do pandas e como sua empresa pode apoiar o desenvolvimento do pandas está disponível na página [patrocinadores das pandas]({{ base_url }}about/sponsors.html).

Os resultados dos benchmarks estão disponíveis em:

- GitHub Actions results: [asv](https://pandas-dev.github.io/asv-runner/)
- OVH server: [asv](https://pandas.pydata.org/benchmarks/asv/)

### Configuração do servidor original

A máquina pode ser configurada com o Ansible playbook em
[tomaugspurger/asv-runner](https://github.com/tomaugspurger/asv-runner).
Os resultados são publicados em outro repositório do GitHub,
[tomaugspurger/asv-collection](https://github.com/tomaugspurger/asv-collection).

Os benchmarks são agendados pelo [Airflow](https://airflow.apache.org/).
Ele possui um painel para visualizar e depurar os resultados.
Você precisará configurar um túnel SSH para visualizá-los:

```
ssh -L 8080:localhost:8080 pandas@panda.likescandy.com
```

### Configuração do servidor OVH

O servidor usado para executar os benchmarks foi configurado para reduzir o ruído do sistema e maximizar a estabilidade dos benchmarks.

Os detalhes sobre como o servidor é configurado podem ser encontrados no
[repositório pandas-benchmarks](https://github.com/pandas-dev/pandas-benchmarks).
Segue um breve resumo:

- Isolamento da CPU: Evite que tarefas do espaço do usuário sejam executadas na mesma CPU que os benchmarks, possivelmente interrompendo sua execução (inclua todas as CPUs virtuais que utilizam um núcleo físico)
- NoHZ: Pare o tick do kernel que permite alternar o contexto na CPU isolada
- Afinidade IRQ: Banir CPU de benchmarks para evitar muitas (mas nem todas) interrupções no kernel na CPU isolada
- TurboBoost: Desativar escala da CPU com base na alta demanda da CPU
- P-States: Use o governador "performance" para desativar os P-States e impedir mudanças na frequência da CPU com base neles
- C-States: Defina o C-State para 0 e desative as alterações para evitar que a CPU mais lenta após a inatividade do sistema

## Benchmarks da comunidade

Os principais benchmarks comparando ferramentas de dataframe que incluem o pandas são:

- [Benchmarks DuckDB (antigo H2O.ai)](https://duckdblabs.github.io/db-benchmark/)
- [Benchmarks TPCH](https://pola.rs/posts/benchmarks/)
