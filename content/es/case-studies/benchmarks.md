# Pruebas de rendimiento

Los Benchmarks (Pruebas de Referencia) son pruebas para medir el desempeño pandas. Hay dos tipos diferentes
de pruebas de referencia relevantes para pandas:

- Las pruebas  de referencia internas se utilizan para medir la velocidad y el uso de memoria a lo largo del tiempo
- Las pruebas de referencia de la comunidad que comparan la velocidad o el uso de memoria de diferentes herramientas al realizar el mismo trabajo

## Pruebas de referencia de pandas

Los pruebas de referencia de pandas se implementan en el directorio [asv_bench] (https://github.com/pandas-dev/pandas/tree/main/asv_bench)
de nuestro repositorio. Los pruebas de referencia se implementan utilizando el marco de referencia [airspeed velocity] (https://asv.readthedocs.io/en/v0.6.1/) (asv, por sus siglas en inglés).

Cualquier desarrollador de pandas puede ejecutar las pruebas de referencia localmente. Esto se puede hacer ejecutando el comando `asv run`, y puede ser útil para detectar si se han realizado cambios locales que generen un impacto en el rendimiento, al ejecutar las pruebas de referencia antes y después de los cambios.
Puede encontrar más información sobre cómo ejecutar el conjunto de pruebas de rendimiento
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
Cuenta con un panel de control para ver y depurar los resultados.
Usted deberá configurar un túnel SSH para verlas:

```
ssh -L 8080:localhost:8080 pandas@panda.likescandy.com
```

### Configuración del servidor OVH

El servidor utilizado para ejecutar las pruebas de referencia se ha configurado para reducir el ruido del sistema y maximizar la estabilidad de los tiempos de las pruebas.

Los detalles sobre cómo está configurado el servidor se pueden encontrar en el [repositorio  pandas-benchmarks] (https://github.com/pandas-dev/pandas-benchmarks).
Hay un breve resumen aquí:

- Aislamiento de la CPU: evite que las tareas del espacio de usuario se ejecuten en la misma CPU que las pruebas de referencia, posiblemente interrumpiéndolas durante la ejecución (incluya todas las CPU virtuales que utilizan un núcleo físico)
- NoHZ: detenga la opción del kernel permite el cambio de contexto en la CPU aislada
- Afinidad IRQ: prohíba las pruebas comparativas de la CPU para evitar muchas (pero no todas) las interrupciones del kernel en la CPU aislada
- TurboBoost: deshabilite el escalado automático de la CPU basado en alta demanda
- P-States: utilice el regulador de "rendimiento" para deshabilitar los P-States y los cambios de frecuencia de la CPU en función de ellos.
- C-States: establece el C-State en 0 y desactiva los cambios para evitar una ralentización de la CPU después de la inactividad del sistema

## Pruebas de referencia comunitarios

Las principales pruebas de referencia que comparan herramientas de marcos de datos que incluyen pandas son:

- [Pruebas de referencia de DuckDB (antiguo H2O.ai)](https://duckdblabs.github.io/db-benchmark/)
- [Pruebas de referencia de TPCH](https://pola.rs/posts/benchmarks/)
