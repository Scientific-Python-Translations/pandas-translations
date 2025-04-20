# Benchmarks

Os benchmarks são testes para medir a desempenho do pandas. Existem dois tipos diferentes de benchmarks relevantes para o pandas:

- Benchmarks internos ao pandas para medir a velocidade e o uso de memória ao longo do tempo
- Benchmarks da comunidade que comparam a velocidade ou o uso de memória de diferentes ferramentas ao realizar a mesma tarefa

## Benchmarks do pandas

benchmarks do pandas são implementados no diretório [asv_bench](https://github.com/pandas-dev/pandas/tree/main/asv_bench)
do nosso repositório. The benchmarks are implemented for the
[airspeed velocity](https://asv.readthedocs.io/en/latest/) (asv for short) framework.

Os benchmarks podem ser executados localmente por qualquer desenvolvedor do pandas. Isso pode ser feito com o comando `asv run`, e pode ser útil detectar se as alterações locais têm
um impacto no desempenho, executando os benchmarks antes e depois das alterações.
Mais informações sobre a execução da suíte de testes de desempenho podem ser encontradas
[aqui](https://pandas.pydata.org/docs/dev/development/contributing_codebase.html#running-the-performance-test-suite).

Note que os benchmarks não são determinísticos, e executá-los em hardwares diferentes ou no mesmo hardware com diferentes níveis de estresse tem um grande impacto no resultado. Even running the benchmarks with identical hardware and almost identical
conditions can produce significant differences when running the same exact code.

## Automated benchmark runner

The [asv-runner](https://github.com/pandas-dev/asv-runner/) repository automatically runs the pandas asv benchmark suite
for every (or almost every) commit to the `main` branch. It is run on GitHub actions.
See the linked repository for more details. The results are available at:

https://pandas-dev.github.io/asv-runner/

## Benchmarks da comunidade

Os principais benchmarks comparando ferramentas de dataframe que incluem o pandas são:

- [Benchmarks DuckDB (antigo H2O.ai)](https://duckdblabs.github.io/db-benchmark/)
- [Benchmarks TPCH](https://pola.rs/posts/benchmarks/)
