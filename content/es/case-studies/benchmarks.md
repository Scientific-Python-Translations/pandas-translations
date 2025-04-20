# Pruebas de rendimiento

Los Benchmarks son pruebas para medir el desempeño de pandas. Hay dos tipos diferentes de pruebas de referencia relevantes para pandas:

- Las pruebas  de referencia internas se utilizan para medir la velocidad y el uso de memoria a lo largo del tiempo
- Las pruebas de referencia de la comunidad que comparan la velocidad o el uso de memoria de diferentes herramientas al realizar el mismo trabajo

## Pruebas de referencia de pandas

Los pruebas de referencia de pandas se implementan en el directorio [asv_bench] (https://github.com/pandas-dev/pandas/tree/main/asv_bench)
de nuestro repositorio. The benchmarks are implemented for the
[airspeed velocity](https://asv.readthedocs.io/en/latest/) (asv for short) framework.

Cualquier desarrollador de pandas puede ejecutar las pruebas de referencia localmente. Esto se puede hacer ejecutando el comando `asv run`, y puede ser útil para detectar si se han realizado cambios locales que generen un impacto en el rendimiento, al ejecutar las pruebas de referencia antes y después de los cambios.
Puede encontrar más información sobre cómo ejecutar el conjunto de pruebas de rendimiento
[aquí](https://pandas.pydata.org/docs/dev/development/contributing_codebase.html#running-the-performance-test-suite).

Tenga en cuenta que los pruebas de referencia no son deterministas y que al ejecutarse en hardware diferente o ejecutarse en el mismo hardware con diferentes niveles de utilización puede tener un gran impacto en el resultado. Even running the benchmarks with identical hardware and almost identical
conditions can produce significant differences when running the same exact code.

## Automated benchmark runner

The [asv-runner](https://github.com/pandas-dev/asv-runner/) repository automatically runs the pandas asv benchmark suite
for every (or almost every) commit to the `main` branch. It is run on GitHub actions.
See the linked repository for more details. The results are available at:

https://pandas-dev.github.io/asv-runner/

## Pruebas de referencia comunitarias

Las principales pruebas de referencia que comparan herramientas de marcos de datos que incluyen pandas son:

- [Pruebas de referencia de DuckDB (antiguo H2O.ai)](https://duckdblabs.github.io/db-benchmark/)
- [Pruebas de referencia de TPCH](https://pola.rs/posts/benchmarks/)
