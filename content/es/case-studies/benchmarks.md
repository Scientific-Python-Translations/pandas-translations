# Benchmarks

Los Benchmarks son pruebas para medir el desempeño pandas. Hay dos diferentes
tipos de pruebas de referencia relevantes para pandas:

- Las pruebas  de referencia internas se utilizan para medir la velocidad y el uso de memoria a lo largo del tiempo
- Las pruebas de referencia de la comunidad que comparan la velocidad o el uso de memoria de diferentes herramientas al realizar el mismo trabajo

## Pruebas de referencia de pandas

Los pruebas de referencia de pandas se implementan en el directorio [asv_bench] (https://github.com/pandas-dev/pandas/tree/main/asv_bench)
de nuestro repositorio. Los pruebas de referencia se implementan utilizando la herramienta [airspeed velocity] (https://asv.readthedocs.io/en/v0.6.1/) (asv, por sus siglas en inglés).

Cualquier desarrollador de pandas puede ejecutar los pruebas de referencia localmente. Esto se puede hacer ejecutando el comando `asv run`, y puede ser útil para detectar si se han realizado cambios locales que generen un impacto en el rendimiento, al ejecutar las pruebas de referencia antes y después de los cambios.
Puede encontrar más información sobre cómo ejecutar el conjunto de pruebas de rendimiento.
[aquí](https://pandas.pydata.org/docs/dev/development/contributing_codebase.html#running-the-performance-test-suite).

Tenga en cuenta que los pruebas de referencia no son deterministas y que al ejecutarse en hardware diferente o ejecutarse en el mismo hardware con diferentes niveles de utilización puede tener un gran impacto en el resultado. Incluso ejecutar las pruebas de referencia con hardware idéntico y condiciones casi idénticas produce diferencias significativas cuando se ejecuta exactamente el mismo código.

## Servidores de pruebas de referencia de pandas

Actualmente tenemos dos servidores físicos ejecutando las pruebas de referencia de pandas para cada (o casi cada) inclusión de código en la rama `main`. Los servidores funcionan independientemente el uno del otro. El servidor original ha estado funcionando durante mucho tiempo y está ubicado físicamente con uno de los mantenedores de pandas. El servidor más nuevo se encuentra en un centro de datos patrocinado amablemente por [OVHCloud](https://www.ovhcloud.com/). Más información sobre los patrocinadores de pandas y cómo su empresa puede apoyar el desarrollo de pandas está disponible en la página [patrocinadores de pandas]({{ base_url }}about/sponsors.html).

Los resultados de las pruebas de referencia están disponibles en:

- Servidor original: [asv](https://asv-runner.github.io/asv-collection/pandas/)
- Servidor OVH: [asv](https://pandas.pydata.org/benchmarks/asv/) (los resultados de las pruebas de referencia también se pueden visualizar en este [Conbench PoC](http://57.128.112.95:5000/)

### Configuración original del servidor

La máquina se puede configurar con las indicaciones para Ansible en [tomaugspurger/asv-runner](https://github.com/tomaugspurger/asv-runner).
Los resultados se publican en otro repositorio de GitHub, [tomaugspurger/asv-collection](https://github.com/tomaugspurger/asv-collection).

Las pruebas de referencia están programados por [Airflow](https://airflow.apache.org/).
Cuenta con un panel para ver y depurar los resultados.
Deberá configurar un túnel SSH para verlas:

```
ssh -L 8080:localhost:8080 pandas@panda.likescandy.com
```

### OVH server configuration

The server used to run the benchmarks has been configured to reduce system
noise and maximize the stability of the benchmarks times.

The details on how the server is configured can be found in the
[pandas-benchmarks repository](https://github.com/pandas-dev/pandas-benchmarks).
There is a quick summary here:

- CPU isolation: Avoid user space tasks to execute in the same CPU as benchmarks, possibly interrupting them during the execution (include all virtual CPUs using a physical core)
- NoHZ: Stop the kernel tick that enables context switching in the isolated CPU
- IRQ affinity: Ban benchmarks CPU to avoid many (but not all) kernel interruption in the isolated CPU
- TurboBoost: Disable CPU scaling based on high CPU demand
- P-States: Use "performance" governor to disable P-States and CPU frequency changes based on them
- C-States: Set C-State to 0 and disable changes to avoid slower CPU after system inactivity

## Community benchmarks

The main benchmarks comparing dataframe tools that include pandas are:

- [DuckDB (former H2O.ai) benchmarks](https://duckdblabs.github.io/db-benchmark/)
- [TPCH benchmarks](https://pola.rs/posts/benchmarks/)
