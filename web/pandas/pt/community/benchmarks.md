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
(ou quase todos) de commit na branch `main`. Os servidores operam de forma independente.
O servidor original está em execução há muito tempo, e é fisicamente localizado com um dos mantenedores do pandas. O servidor mais novo está em um datacenter gentilmente patrocinado por [OVHCloud](https://www.ovhcloud.com/).

Os resultados dos benchmarks estão disponíveis em:

## Benchmarks da comunidade

Os principais benchmarks comparando ferramentas de dataframe que incluem o pandas são:

- [Benchmarks DuckDB (antigo H2O.ai)](https://duckdblabs.github.io/db-benchmark/)
- [Benchmarks TPCH](https://pola.rs/posts/benchmarks/)
