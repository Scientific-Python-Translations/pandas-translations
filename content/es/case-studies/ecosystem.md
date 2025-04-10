# Ecosistema

Cada vez más, se crean paquetes que utilizan pandas para suplir necesidades específicas en la preparación, análisis y visualización de datos. Esto es alentador porque significa que pandas no solo ayuda a los usuarios a trabajar con sus datos, sino que también proporciona un mejor punto de partida para que los desarrolladores creen herramientas de datos más potentes y enfocadas. La creación de bibliotecas que complementan la funcionalidad de pandas también permite que el desarrollo de pandas permanezca enfocado en sus requisitos originales.

Esta es una lista mantenida por la comunidad de proyectos que se basan en pandas para proporcionar herramientas en el espacio de PyData. El equipo principal de desarrollo de Pandas no necesariamente respalda ningún proyecto en particular de esta lista ni tiene conocimiento del estado de mantenimiento de ninguna biblioteca en particular.

Para obtener una lista más completa de proyectos que dependen de pandas, consulte la [página libraries.io para ver el uso de pandas](https://libraries.io/pypi/pandas/usage) o [busque pandas en pypi](https://pypi.org/search/?q=pandas).

Nos gustaría que a los usuarios les resulte más fácil encontrar estos proyectos. Si conoce otros proyectos importantes que cree que deberían estar en esta lista, por favor háganoslo saber.

## Estadística y aprendizaje automático

### [Statsmodels](https://www.statsmodels.org/)

Statsmodels es la "biblioteca de estadísticas y econometría" de Python y tiene una relación especial de larga data con pandas.
Statsmodels proporciona potentes funciones de estadística, econometría, análisis y modelado que están fuera del alcance de pandas. Statsmodels aprovecha los objetos de pandas como contenedor de datos para realizar los cálculo.

### [skrub](https://skrub-data.org)

Skrub facilita machine learning en dataframes. Enlaza pandas a scikit-learn y relacionados. En particular facilita la construcción de atributos de dataframes.

### [Featuretools](https://github.com/alteryx/featuretools/)

Featuretools es una biblioteca de Python para la ingeniería de características automatizada, construida sobre pandas. Destaca en la transformación de conjuntos de datos temporales y relacionales en matrices de características para aprendizaje automático, utilizando "primitivas" reutilizables de ingeniería de características. Los usuarios pueden contribuir con sus propias primitivas en Python y compartirlas con el resto de la comunidad.

### [Compose](https://github.com/alteryx/compose)

Compose es una herramienta de aprendizaje automático para el etiquetado de datos y la ingeniería de predicciones.
Permite estructurar el proceso de etiquetado mediante la parametrización de problemas de predicción y la transformación de datos relacionales basados en el tiempo en valores objetivo con tiempos de corte, que pueden utilizarse para el aprendizaje supervisado.

### [STUMPY](https://github.com/TDAmeritrade/stumpy)

STUMPY es una biblioteca de Python potente y escalable para el análisis moderno de series temporales.
STUMPY calcula de manera eficiente algo llamado [perfil de matriz](https://stumpy.readthedocs.io/en/latest/Tutorial_The_Matrix_Profile.html), que puede utilizarse para una amplia variedad de tareas de minería de datos en series temporales.

## Visualización

### [Altair](https://altair-viz.github.io/)

Altair es una biblioteca de visualización estadística declarativa para Python.
Con Altair, puede dedicar más tiempo a comprender sus datos y su significado. La API de Altair es sencilla, intuitiva y coherente, y está construida sobre la potente especificación JSON de Vega-Lite. Esta elegante simplicidad permite crear visualizaciones hermosas y efectivas con una cantidad mínima de código. Altair funciona con DataFrames de Pandas.

###

Bokeh es una biblioteca de visualización interactiva de Python para grandes conjuntos de datos que utiliza de forma nativa las últimas tecnologías web. Su objetivo es proporcionar una construcción elegante y concisa de gráficos innovadores al estilo de Protovis/D3, mientras que ofrece interactividad de alto rendimiento sobre grandes volúmenes de datos en clientes ligeros.

[Pandas-Bokeh](https://github.com/PatrikHlobil/Pandas-Bokeh) proporciona una API de alto nivel para Bokeh, que puede cargarse como un motor de visualización nativo de Pandas mediante:

```
pd.set_option("plotting.backend", "pandas_bokeh")
```

Es muy similar al motor de visualización de Matplotlib, pero ofrece gráficos y mapas interactivos basados en tecnologías web.

### [pygwalker](https://github.com/Kanaries/pygwalker)

PyGWalker es una herramienta interactiva de visualización de datos y análisis exploratorio, basada en Graphic Walker, con soporte para visualización, limpieza y anotación.

PyGWalker puede guardar los gráficos creados interactivamente en formatos Graphic-Walker y Vega-Lite JSON.

```
import pygwalker as pyg
pyg.walk(df)
```

### [seaborn](https://seaborn.pydata.org)

Seaborn es una biblioteca de visualización en Python basada en [matplotlib](https://matplotlib.org). Ofrece una interfaz de alto nivel, orientada a conjuntos de datos, para crear gráficos estadísticos atractivos.
Las funciones de visualización en Seaborn pueden manipular objetos de Pandas y aprovechan internamente las operaciones de agrupamiento de pandas para permitir una especificación concisa de visualizaciones complejas. Seaborn va más allá de matplotlib y pandas al ofrecer la opción de realizar estimaciones estadísticas mientras se grafican los datos, agregando observaciones y visualizando el ajuste de modelos estadísticos para resaltar patrones en un conjunto de datos.

```
import seaborn as sns
sns.set_theme()
```

### [plotnine](https://github.com/has2k1/plotnine/)

[ggplot2](https://ggplot2.tidyverse.org/) de Hadley Wickham es un paquete fundamental de visualización exploratoria para el lenguaje R. Basado en ["The Grammar of Graphics"](https://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/GOG.html), ofrece una forma poderosa, declarativa y general de generar gráficos personalizados para cualquier tipo de datos.
Existen diversas implementaciones disponibles para otros lenguajes.
Una buena implementación para usuarios de Python es [has2k1/plotnine](https://github.com/has2k1/plotnine/).

### [IPython Vega](https://github.com/vega/ipyvega)

[IPython Vega](https://github.com/vega/ipyvega) aprovecha [Vega](https://github.com/vega/vega) para crear gráficos dentro de un Jupyter Notebook.

### [Plotly](https://plot.ly/python)

La [API de Python](https://plot.ly/python/) de [Plotly](https://plot.ly/) permite crear figuras interactivas y compartirlas en la web. Mapas, gráficos 2D, 3D y de transmisión en vivo se renderizan con WebGL y [D3.js](https://d3js.org/). La biblioteca permite graficar directamente desde un DataFrame de Pandas y facilita la colaboración en la nube. Los usuarios de [Matplotlib, ggplot para Python y Seaborn](https://plot.ly/python/matplotlib-to-plotly-tutorial/) pueden convertir sus figuras en gráficos web interactivos. Los gráficos pueden dibujarse en [IPython Notebooks](https://plot.ly/ipython-notebooks/), editarse con R o MATLAB, modificarse en una interfaz gráfica o integrarse en aplicaciones y dashboards. Plotly
is free for unlimited sharing, and has cloud, offline, or on-premise
accounts for private use.

### [Lux](https://github.com/lux-org/lux)

Lux es una biblioteca de Python que facilita la experimentación rápida y sencilla con datos al automatizar el proceso de exploración visual de datos. Para usar Lux, simplemente agrega una importación adicional junto con Pandas:

```python
import lux
import pandas as pd

df = pd.read_csv("data.csv")
df  # discover interesting insights!
```

Al imprimir un DataFrame, Lux [recomienda automáticamente un conjunto de visualizaciones](https://raw.githubusercontent.com/lux-org/lux-resources/master/readme_img/demohighlight.gif) que resaltan tendencias y patrones interesantes en los datos. Los usuarios pueden aprovechar cualquier comando existente de pandas sin modificar su código, mientras visualizan simultáneamente sus estructuras de datos de pandas (como DataFrame, Series e Index). Lux también ofrece un [lenguaje poderoso e intuitivo](https://lux-api.readthedocs.io/en/latest/source/guide/vis.html) que permite a los usuarios crear visualizaciones en Altair, Matplotlib o Vega-Lite sin necesidad de preocuparse por el código.

### [D-Tale](https://github.com/man-group/dtale)

D-Tale es un cliente web ligero para visualizar estructuras de datos de pandas. Ofrece una cuadrícula de estilo hoja de cálculo que actúa como un contenedor para muchas funciones de pandas (query, sort, describe, corr, etc.). para que los usuarios pueden manipular sus datos de forma rápida y sencilla. También cuenta con un generador de gráficos interactivo basado en Plotly Dash, que permite a los usuarios crear visualizaciones atractivas y portátiles. D-Tale se puede invocar con el siguiente comando:

```python
import dtale

dtale.show(df)
```

D-Tale se integra perfectamente con los Jupyter Notebooks, terminales de Python, Kaggle y Google Colab. Aquí tienes algunas demostraciones de la [cuadrícula](http://alphatechadmin.pythonanywhere.com/dtale/main/1).

### [hvplot](https://hvplot.holoviz.org/index.html)

hvPlot es una API de visualización de alto nivel para el ecosistema PyData, basada en [HoloViews](https://holoviews.org/).
Se puede cargar como un motor de visualización nativo de pandas mediante:

```python
pd.set_option("plotting.backend", "hvplot")
```

## Entornos de Desarrollo Integrado

### [IPython](https://ipython.org/documentation.html)

IPython es un intérprete de comandos interactivo y un entorno de computación distribuida. El autocompletado en IPython funciona con los métodos de pandas y también con atributos como las columnas de un DataFrame.

### [Jupyter Notebook / Jupyter Lab](https://jupyter.org)

El Jupyter Notebook es una aplicación web para crear y gestionar cuadernos de Jupyter. Un cuaderno de Jupyter es un documento JSON que contiene una lista ordenada de celdas de entrada y salida, las cuales pueden incluir código, texto, matemáticas, gráficos y contenido multimedia enriquecido. Los cuadernos de Jupyter pueden convertirse a varios formatos de salida abiertos y estándar (HTML, diapositivas en HTML, LaTeX, PDF, ReStructuredText, Markdown, Python) mediante la opción **'Descargar como'** en la interfaz web o utilizando `jupyter convert` en la terminal.

Los DataFrames de pandas implementan los métodos `_repr_html_` y `_repr_latex_`, que son utilizados por el Jupyter Notebook para mostrar tablas en formato HTML o LaTeX de manera abreviada. La salida en LaTeX se escapa correctamente. (Nota: Las tablas en HTML pueden ser o no compatibles con formatos de salida de Jupyter que no sean HTML).

Consulta [Opciones y Configuraciones](https://pandas.pydata.org/docs/user_guide/options.html) para conocer las opciones de configuración de `display` en pandas.

### [Spyder](https://www.spyder-ide.org/)

Spyder es una interfaz de desarrollo integrado multiplataforma basado en PyQt que combina las funciones de edición, análisis, depuración y perfilado de una herramienta de desarrollo de software con las capacidades de exploración de datos, ejecución interactiva, inspección profunda y visualización avanzada de un entorno científico como MATLAB o RStudio.

Su [Explorador de Variables](https://docs.spyder-ide.org/current/panes/variableexplorer.html) permite a los usuarios ver, manipular y editar objetos `Index`, `Series` y `DataFrame` de pandas como si fueran una "hoja de cálculo". Incluye funciones para copiar y modificar valores, ordenar, mostrar un "mapa de calor", convertir tipos de datos y más. Los objetos de pandas también pueden renombrarse, duplicarse, agregar nuevas columnas, copiarse/pegarse desde o hacia el portapapeles (como TSV) y guardarse/cargarse desde un archivo. Spyder también puede importar datos desde una variedad de archivos de texto plano, archivos binarios o el portapapeles a un nuevo DataFrame de Pandas mediante un asistente de importación avanzado.

La mayoría de las clases, métodos y atributos de datos de pandas pueden autocompletarse en el [Editor](https://docs.spyder-ide.org/current/panes/editor.html) y la [Consola de IPython](https://docs.spyder-ide.org/current/panes/ipythonconsole.html) de Spyder. Además, el [panel de Ayuda](https://docs.spyder-ide.org/current/panes/help.html) puede recuperar y mostrar automáticamente, o bajo demanda, la documentación de Numpydoc sobre objetos de pandas en texto enriquecido mediante el uso de Sphinx.

### [marimo](https://marimo.io)

Marimo es un cuaderno reactivo para Python y SQL que mejora la productividad cuando se trabaja con DataFrames. Ofrece varias características que hacen que la manipulación y visualización de datos sean más interactivas y entretenidas:

1. Visualizaciones interactivas y enriquecidas: marimo puede mostrar DataFrames de pandas en tablas o gráficos interactivos con capacidades de filtrado y ordenamiento.
2. Selección de datos: Los usuarios pueden seleccionar datos en tablas o gráficos basados en pandas, y las selecciones se envían automáticamente a Python como DataFrames de Pandas.
3. Transformaciones sin código: Los usuarios pueden transformar DataFrames de pandas de forma interactiva mediante una interfaz gráfica, sin necesidad de escribir código. El código generado puede copiarse y pegarse en el notebook.
4. Filtros personalizados: marimo permite la creación de filtros basados en pandas mediante elementos de interfaz de usuario como deslizadores y menús desplegables.
5. Explorador de conjuntos de datos: marimo detecta y muestra automáticamente todos los DataFrames en el cuaderno, permitiendo a los usuarios explorar y visualizar datos de forma interactiva.
6. Integración con SQL: marimo permite a los usuarios escribir consultas SQL sobre cualquier DataFrame de Pandas que esté en memoria.

## Interfaz de Programación de Aplicaciones (API)

### [pandas-datareader](https://github.com/pydata/pandas-datareader)

`pandas-datareader` es una biblioteca de acceso remoto a datos para Pandas (PyPI: `pandas-datareader`). Se basa en la funcionalidad que anteriormente se encontraba en `pandas.io.data` y `pandas.io.wb`, pero que fue separada en la versión 0.19. Consulta más información en la [documentación de pandas-datareader](https://pandas-datareader.readthedocs.io/en/latest/).

Los siguientes proveedores de datos están disponibles:

- Finanzas de Google
- Tiingo
- Morningstar
- IEX
- Robinhood
- Enigma
- Quandl
- FRED
- Fama/French
- Banco Mundial
- Organización para la Cooperación y el Desarrollo Económico
- Eurostat
- TSP Fund Data
- Nasdaq Trader Symbol Definitions
- Stooq Index Data
- MOEX Data

### [pandaSDMX](https://pandasdmx.readthedocs.io)

`pandaSDMX` es una biblioteca para recuperar y adquirir datos estadísticos y metadatos difundidos en [SDMX](https://sdmx.org) 2.1, un estándar ISO ampliamente utilizado por instituciones como oficinas de estadística, bancos centrales y organizaciones internacionales. `pandaSDMX` puede exponer conjuntos de datos y metadatos estructurales relacionados, incluyendo flujos de datos, listas de códigos y definiciones de estructuras de datos, como Series de pandas o DataFrames con múltiples índices.

### [fredapi](https://github.com/mortada/fredapi)

fredapi es una interfaz en Python para [Datos económicos de la Reserva Federal (FRED)] (https://fred.stlouisfed.org/) proporcionada por el Banco de la Reserva Federal de St. Louis. Funciona tanto con la base de datos FRED como con la base de datos ALFRED que contiene datos de un momento dado (es decir, revisiones de datos históricos). fredapi proporciona un contenedor en Python para la API HTTP de FRED y también proporciona varios métodos convenientes para analizar datos de un momento dado de ALFRED. fredapi hace uso de pandas y devuelve datos en una Serie o DataFrame de pandas. Este módulo requiere una llave del API de FRED que puede obtener de forma gratuita en el sitio web de FRED.

## Librerías de dominio específico

### [Geopandas](https://github.com/geopandas/geopandas)

Geopandas amplía los objetos de datos de pandas para incluir información geográfica que admite operaciones geométricas. Si tu trabajo implica mapas y coordenadas geográficas, y te encanta pandas, deberías echarle un vistazo a Geopandas.

### [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)

gurobipy-pandas proporciona una conveniente API de acceso para conectar pandas con gurobipy. Permite a los usuarios crear modelos de optimización matemática de manera más fácil y eficiente a partir de datos almacenados en DataFrames y Series, y leer soluciones directamente como objetos pandas.

### [staircase](https://github.com/staircase-dev/staircase)

sgaircase es un paquete de análisis de datos, construido sobre pandas y numpy, para modelar y manipular funciones matemáticas de pasos. Stair es un paquete de análisis de datos, construido sobre pandas y numpy, para modelar y manipular funciones matemáticas escalonadas.

### [xarray](https://github.com/pydata/xarray)

xarray lleva el poder de los datos etiquetados de pandas a las ciencias físicas al proporcionar variantes N-dimensionales de las estructuras de datos centrales de pandas.
Su objetivo es proporcionar un conjunto de herramientas similar a pandas y compatible con pandas para el análisis de matrices multidimensionales, en lugar de los datos tabulares en los que Pandas sobresale.

## Entrada/salida (IO)

### [NTV-pandas](https://github.com/loco-philippe/ntv-pandas)

NTV-pandas proporciona un convertidor de JSON con más tipos de datos que los soportados directamente por pandas.

Soporta los siguientes tipos de datos:

- Tipos de datos de pandas
- tipos de datos definidos en el [formato NTV](https://loco-philippe.github.io/ES/JSON%20semantic%20format%20\(JSON-NTV\).htm)
- tipos de datos definidos en la [especificación del Table Schema] (http://dataprotocols.org/json-table-schema/#field-types-and-formats)

La interfaz es siempre reversible (conversión ida y vuelta) con dos formatos (JSON-NTV y JSON-TableSchema).

Ejemplo:

```python
import ntv_pandas as npd

jsn = df.npd.to_json(table=False)  # save df as a JSON-value (format Table Schema if table is True else format NTV )
df  = npd.read_json(jsn)  # load a JSON-value as a `DataFrame`

df.equals(npd.read_json(df.npd.to_json(df)))  # `True` in any case, whether `table=True` or not
```

### [BCPandas](https://github.com/yehoshuadimarsky/bcpandas)

BCPandas proporciona escrituras de alto rendimiento desde pandas a Microsoft SQL Server,
superando con creces el rendimiento del método nativo `df.to_sql`. Internamente, utiliza la utilidad BCP de Microsoft, pero la complejidad está completamente oculta para el usuario final.
Probado rigurosamente, es un reemplazo completo de `df.to_sql`.

### [Deltalake](https://pypi.org/project/deltalake)

El paquete python Deltalake le permite acceder a tablas almacenadas en [Delta Lake](https://delta.io/) de forma nativa en Python sin  necesidad de utilizar Spark o JVM. Proporciona el método `delta_table.to_pyarrow_table().to_pandas()` para convertir cualquier tabla Delta en un DataFrame de pandas.

### [pandas-gbq](https://github.com/googleapis/python-bigquery-pandas)

pandas-gbq proporciona lecturas y escrituras de alto rendimiento hacia y desde [Google BigQuery](https://cloud.google.com/bigquery/). Anteriormente (antes de la versión 2.2.0), estos métodos se exponían como `pandas.read_gbq` y `DataFrame.to_gbq`.
Utilice `pandas_gbq.read_gbq` y `pandas_gbq.to_gbq` en su lugar.

### [ArcticDB](https://github.com/man-group/ArcticDB)

ArcticDB es un motor de base de datos sin servidor para DataFrames diseñado para el ecosistema Python Científico. ArcticDB le permite almacenar, recuperar y procesar pandas DataFrames a escala. Es un motor de almacenamiento diseñado para el almacenamiento de objetos y también admite el almacenamiento en disco local mediante LMDB. ArcticDB no requiere infraestructura adicional más allá de un entorno Python en ejecución y acceso al almacenamiento de objetos, y se puede instalar en segundos. Encuentre la documentación completa [aquí](https://docs.arcticdb.io/latest/).

#### Terminología de ArcticDB

ArcticDB está estructurada para proporcionar una forma escalable y eficiente de administrar y recuperar DataFrames, organizados en varios componentes clave:

- `Object Store` Colecciones de bibliotecas. Se utiliza para separar entornos lógicos entre sí. Análogo a un servidor de base de datos.
- `Library` Contiene múltiples símbolos que están agrupados de cierta manera (diferentes usuarios, mercados, etc.). Análogo a una base de datos.
- `Symbol` Unidad atómica de almacenamiento de datos. Identificado por un nombre como cadena de texto. Los datos almacenados bajo un `symbol` se parecen mucho a un DataFrame de pandas. Análogo a las tablas.
- `Version` Cada acción de modificación (escribir, agregar, actualizar) realizada en un `Symbol` crea una nueva versión de ese objeto.

#### Instalación

Para instalar, simplemente ejecute:

```console
pip install arcticdb
```

Para comenzar, podemos importar ArcticDB y crear una instancia:

```python
import arcticdb as adb
import numpy as np
import pandas as pd
# this will set up the storage using the local file system
arctic = adb.Arctic("lmdb://arcticdb_test")
```

> **Nota:** ArcticDB admite cualquier almacenamiento compatible con el API S3, incluido AWS. ArcticDB también permite el almacenamiento en Azure Blob.\
> ArcticDB también soporta LMDB para almacenamiento local/basado en archivos; para usar LMDB, utilice una ruta de LMDB como un URI: `adb.Arctic('lmdb://path/to/desired/database')`.

#### Configuración de biblioteca

ArcticDB está orientado a almacenar muchas (potencialmente millones) de tablas. Las tablas individuales (DataFrames) se denominan `Symbols` y se almacenan en colecciones llamadas bibliotecas. Una sola biblioteca puede almacenar muchos `Symbols`. Las bibliotecas primero deben inicializarse antes de su uso:

```python
lib = arctic.get_library('sample', create_if_missing=True)
```

#### Escritura de datos en ArcticDB

Ahora que tenemos una biblioteca configurada, podemos comenzar a leer y escribir datos. ArcticDB tiene un conjunto de funciones simples para el almacenamiento de DataFrame. Escribamos un DataFrame en el almacenamiento.

```python
df = pd.DataFrame(
    {
        "a": list("abc"),
        "b": list(range(1, 4)),
        "c": np.arange(3, 6).astype("u1"),
        "d": np.arange(4.0, 7.0, dtype="float64"),
        "e": [True, False, True],
        "f": pd.date_range("20130101", periods=3)
    }
)

df
df.dtypes
```

Escribe a ArcticDB.

```python
write_record = lib.write("test", df)
```

> **Nota:** Al escribir pandas DataFrames, ArcticDB admite los siguientes tipos de índice:
>
> - `pandas.Index` que contiene int64 (o los tipos dedicados correspondientes Int64Index, UInt64Index)
> - `RangeIndex`
> - `DatetimeIndex`
> - `MultiIndex` compuesto por los tipos admitidos anteriormente
>
> El concepto de "fila" en `head`/`tail` se refiere al número de fila ('iloc'), no al valor en `pandas.Index` ('loc').

#### Lectura de datos de ArcticDB

Lea los datos desde el almacenamiento:

```python
read_record = lib.read("test")
read_record.data
df.dtypes
```

ArcticDB también admite agregar, actualizar y consultar datos desde el almacenamiento a un DataFrame de pandas. Please find more information [here](https://docs.arcticdb.io/latest/api/processing/#arcticdb.QueryBuilder).

### [Hugging Face](https://huggingface.co/datasets)

Los datatsets de Hugging Face Hub proporcionan una gran colección de conjuntos de datos listos para usar para el aprendizaje automático compartidos por la comunidad. La plataforma ofrece una interfaz fácil de usar para explorar, descubrir y visualizar conjuntos de datos, y proporciona herramientas para cargar y trabajar fácilmente con estos conjuntos de datos en Python gracias a la biblioteca [huggingface_hub](https://github.com/huggingface/huggingface_hub).

Puede acceder a conjuntos de datos en Hugging Face utilizando rutas `hf://` en pandas, en el formato `hf://datasets/username/dataset_name/...`.

Por ejemplo, aquí se explica cómo cargar el [conjunto de datos de stanfordnlp/imdb] (https://huggingface.co/datasets/stanfordnlp/imdb):

```python
import pandas as pd

# Load the IMDB dataset
df = pd.read_parquet("hf://datasets/stanfordnlp/imdb/plain_text/train-00000-of-00001.parquet")
```

Consejo: en la página de un conjunto de datos, haga clic en "Usar este conjunto de datos" para obtener el código para cargarlo en pandas.

Para guardar un conjunto de datos en Hugging Face, necesita [crear un conjunto de datos público o privado](https://huggingface.co/new-dataset) e [iniciar sesión](https://huggingface.co/docs/huggingface_hub/quick-start#login-command), y luego puede usar `df.to_csv/to_json/to_parquet`:

```python
# Guarda el conjunto de datos en mi cuenta de Hugging Face
df.to_parquet("hf://datasets/nombre de usuario/dataset_name/train.parquet")
```

Puede encontrar más información sobre los conutos d edatos de Hugging Face Hub en la [documentación](https://huggingface.co/docs/hub/en/datasets).

## Procesamiento fuera de memoria

### [Bodo](https://bodo.ai/)

Bodo es un motor informático en Python de alto rendimiento que paraleliza y
optimiza su código mediante la compilación utilizando técnicas HPC (computación de alto rendimiento).
Diseñado para operar con DataFrames nativos de pandas, Bodo compila su código de pandas para ejecutarlo en múltiples núcleos en una sola máquina o en clústeres distribuidos de múltiples nodos informáticos de manera eficiente.
Bodo también hace que los DataFrames de pandas distribuidos se puedan consultar con SQL.
Bodo también provee un motor SQL que puede consultar dataframes distribuidos de pandas eficientemente.

```python
import pandas as pd
import bodo

@bodo.jit
def process_data():
    df = pd.read_parquet("my_data.pq")
    df2 = pd.DataFrame({"A": df.apply(lambda r: 0 if r.A == 0 else (r.B // r.A), axis=1)})
    df2.to_parquet("out.pq")

process_data()
```

### [Cylon](https://cylondata.org/)

Cylon es un runtime paralelo de memoria distribuida, rápido y escalable con una API Python DataFrame similar a pandas. El "Core Cylon" se implementa con C++ usando el formato Apache Arrow para representar los datos en la memoria. La API Cylon DataFrame implementa
la mayoría de las operadores principales de pandas como fusionar, filtrar, unir, concat,
agrupar por, drop_duplicates, etc. Estos operadores están diseñados para trabajar en millas de núcleos para escalar aplicaciones. Puede interoperar con pandas DataFrame leyendo datos de pandas o convirtiendo datos a pandas para que los usuarios puedan escalar selectivamente partes de sus aplicaciones.

```python
from pycylon import read_csv, DataFrame, CylonEnv
from pycylon.net import MPIConfig

# Initialize Cylon distributed environment
config: MPIConfig = MPIConfig()
env: CylonEnv = CylonEnv(config=config, distributed=True)

df1: DataFrame = read_csv('/tmp/csv1.csv')
df2: DataFrame = read_csv('/tmp/csv2.csv')

# Using 1000s of cores across the cluster to compute the join
df3: Table = df1.join(other=df2, on=[0], algorithm="hash", env=env)

print(df3)
```

### [Dask](https://docs.dask.org)

Dask es una biblioteca para análisis utilizando computación paralela flexible. Dask proporciona una interfaz familiar "DataFrame" para computación distribuida, paralela y fuera de memoria.

### [Dask-ML](https://ml.dask.org)

Dask-ML permite el aprendizaje automático paralelo y distribuido utilizando Dask junto con bibliotecas de aprendizaje automático existentes como Scikit-Learn, XGBoost y TensorFlow.

### [Ibis](https://ibis-project.org/docs/)

Ibis ofrece una forma estándar de escribir código analítico, que se puede ejecutar en varios motores. Ayuda a cerrar la brecha entre los entornos locales de Python (como pandas) y los sistemas de ejecución y almacenamiento remotos como los componentes de Hadoop (como HDFS, Impala, Hive, Spark) y las bases de datos SQL (Postgres, etc.).

### [Koalas](https://koalas.readthedocs.io/en/latest/)

Koalas proporciona una interfaz familiar de los pandas DataFrames además de Apache Spark. Permite a los usuarios aprovechar múltiples núcleos en una máquina o en un grupo de máquinas para acelerar o escalar su código DataFrame.

### [Modin](https://github.com/modin-project/modin)

El DataFrame `modin.pandas` es un reemplazo paralelo y distribuido para pandas. Esto significa que puede usar Modin con el código de pandas existente o escribir código nuevo con la API de pandas existente. Modin puede aprovechar toda su máquina o clúster para acelerar y escalar sus cargas de trabajo de pandas, incluidas tareas que tradicionalmente consumen mucho tiempo, como la lectura de datos (`read_csv`, `read_excel`, `read_parquet`, etc.).

```python
# import pandas as pd
import modin.pandas as pd

df = pd.read_csv("big.csv")  # use all your cores!
```

### [Pandarallel](https://github.com/nalepae/pandarallel)

Pandarallel proporciona una forma sencilla de paralelizar las operaciones de pandas en todas sus CPU cambiando solo una línea de código.
También muestra barras de progreso.

```python
from pandarallel import pandarallel

pandarallel.initialize(progress_bar=True)

# df.apply(func)
df.parallel_apply(func)
```

### [Vaex](https://vaex.io/docs/)

Cada vez más, se crean paquetes que utilizan pandas para suplir necesidades específicas en la preparación, análisis y visualización de datos. Vaex es una biblioteca de Python para DataFrames fuera de memoria (similar a Pandas), para visualizar y explorar grandes conjuntos de datos tabulares. Puede calcular estadísticas como media, suma, recuento, desviación estándar, etc., en una cuadrícula N-dimensional de hasta mil millones (10^9) objetos/filas por segundo. La visualización se realiza mediante histogramas, gráficos de densidad y renderizado de volúmenes 3D, lo que permite la exploración interactiva de big data. Vaex utiliza mapeo de memoria, una política de copia de memoria cero y cálculos diferidos para obtener el mejor rendimiento (sin desperdiciar memoria).

- `vaex.from_pandas`
- `vaex.to_pandas_df`

### [Hail Query](https://hail.is/)

Una biblioteca de DataFrames distribuida, segura y descentralizada, que sirve a la comunidad genética. Hail Query provee  formatos de datos en disco, formatos de datos en memoria, un compilador de expresiones, un planificador de consultas y un algoritmo de clasificación distribuido, todos diseñados para acelerar las consultas en grandes matrices de datos de secuenciación del genoma.

A menudo es más fácil utilizar pandas para manipular las estadísticas resumidas u otros pequeños agregados estadísticos producidos por Hail. Por esta razón, Hail proporciona importación y exportación nativa desde pandas DataFrames:

- [`Table.from_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.from_pandas)
- [`Table.to_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.to_pandas)

## Limpieza y validación de datos.

### [pyjanitor](https://github.com/pyjanitor-devs/pyjanitor)

Pyjanitor proporciona una API limpia para limpiar datos mediante el encadenamiento de métodos.

### [Pandera](https://pandera.readthedocs.io/en/stable/)

Pandera proporciona una API flexible y expresiva para realizar la validación de datos en DataFrames para hacer que los procesos de procesamiento de datos sean más legibles y sólidos.
Los DataFrames contienen información que pandera valida explícitamente en tiempo de ejecución. Esto es útil en procesos críticos de producción de datos o en entornos de investigación reproducibles.

## Tipos de datos de extensión

Pandas proporciona una interfaz para definir [tipos de extensión](https://pandas.pydata.org/docs/development/extending.html#extension-types) para extender el sistema de tipos de NumPy.
Las siguientes bibliotecas implementan esa interfaz para proporcionar tipos que no se encuentran en NumPy o pandas, que funcionan bien con los contenedores de datos de pandas.

### [awkward-pandas](https://github.com/scikit-hep/awkward)

Awkward-pandas proporciona un tipo de extensión para almacenar [Awkward Arrays](https://awkward-array.org/) dentro de la Series y los DataFrames de pandas. También proporciona acceso para usar funciones `awkward`  en Series que son de tipo `ackward`.

### [db-dtypes](https://github.com/googleapis/python-db-dtypes-pandas)

db-dtypes proporciona tipos de extensión para trabajar con tipos como DATE, TIME y JSON de sistemas de bases de datos. pandas-gbq utiliza este paquete para proporcionar tipos de datos naturales para tipos de datos de BigQuery sin un tipo Numpy natural.

### [Pandas-Genomics](https://pandas-genomics.readthedocs.io/en/latest/)

Pandas-Genomics proporciona un tipo de extensión y una matriz de extensión para trabajar con datos genómicos.  También incluye formas de acceso en "genómica" para muchas propiedades y métodos útiles relacionados con el control de calidad y el análisis de datos genómicos.

### [Physipandas](https://github.com/mocquin/physipandas)

Physipandas proporciona una extensión para manipular cantidades físicas (como escalares y numpy.ndarray) en asociación con una unidad física (como metro o julio) y características adicionales para la integración de formas de acceso `physipy` con Series y Dataframes de pandas.

### [Pint-Pandas](https://github.com/hgrecco/pint-pandas)

Pint-Pandas proporciona un tipo de extensión para almacenar matrices numéricas con unidades.
Estas matrices se pueden almacenar dentro de Series y DataFrame de pandas. Las operaciones entre las columnas Series y DataFrame que utilizan la matriz de extensión de pint tienen en cuenta las unidades.

### [Text Extensions](https://ibm.biz/text-extensions-for-pandas)

Text Extensions para pandas proporciona tipos de extensiones para cubrir estructuras de datos comunes para representar datos en lenguaje natural, además de integraciones de bibliotecas que convierten los resultados de bibliotecas populares de procesamiento de lenguaje natural en DataFrames de pandas.

## Métodos de acceso

Un directorio de proyectos que proporciona [accesorios de extensión] (https://pandas.pydata.org/docs/development/extending.html#registering-custom-accessors).
Esto es para que los usuarios descubran nuevos métodos de acceso y para que los autores de la biblioteca se coordinen en el espacio de nombres.

| Librería                                                             | Método de acceso | Clases                |
| -------------------------------------------------------------------- | ---------------- | --------------------- |
| [awkward-pandas](https://awkward-pandas.readthedocs.io/en/latest/)   | `ak`             | `Series`              |
| [pdvega](https://altair-viz.github.io/pdvega/)                       | `vgplot`         | `Series`, `DataFrame` |
| [pandas-genomics](https://pandas-genomics.readthedocs.io/en/latest/) | `genomics`       | `Series`, `DataFrame` |
| [pint-pandas](https://github.com/hgrecco/pint-pandas)                | `pint`           | `Series`, `DataFrame` |
| [physipandas](https://github.com/mocquin/physipandas)                | `physipy`        | `Series`, `DataFrame` |
| [composeml](https://github.com/alteryx/compose)                      | `slice`          | `DataFrame`           |
| [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)         | `gppd`           | `Series`, `DataFrame` |
| [staircase](https://www.staircase.dev/)                              | `sc`             | `Series`, `DataFrame` |
| [woodwork](https://github.com/alteryx/woodwork)                      | `slice`          | `Series`, `DataFrame` |

## Herramientas de desarrollo

### [pandas-stubs](https://github.com/VirtusLab/pandas-stubs)

Si bien el repositorio de pandas está parcialmente tipado, el paquete en sí no expone esta información para uso externo.
Instale pandas-stubs para habilitar la cobertura de tipado básico de la API de pandas.

Obtenga más información leyendo estos reportes [14468](https://github.com/pandas-dev/pandas/issues/14468),
[26766](https://github.com/pandas-dev/pandas/issues/26766), [28142](https://github.com/pandas-dev/pandas/issues/28142).

Consulte las instrucciones de instalación y uso en la [página de GitHub](https://github.com/VirtusLab/pandas-stubs).

### [Hamilton](https://github.com/dagworks-inc/hamilton)

Hamilton provee un flujo de trabajo con datos def forma declarativa que surgió de Stitch Fix. Fue diseñado para ayudar a administrar una base de código de Pandas, específicamente con respecto a la ingeniería de funciones para modelos de aprendizaje automático.

Prescribe un paradigma que garantiza que todo el código sea:

- testeable a nivel de unidad
- compatible con pruebas de integración
- amigable con la documentación
- La lógica de transformación es reutilizable, ya que está desacoplada del contexto en el que se utiliza.
- Integrable con verificaciones de calidad de datos en tiempo de ejecución.

Esto ayuda a escalar tu código basado en Pandas, al mismo tiempo que mantiene bajos los costos de mantenimiento.

Para más información, consulta la [documentación](https://hamilton.readthedocs.io/).
