# Ecosystem

Cada vez más, se crean paquetes que utilizan pandas para suplir necesidades específicas en la preparación, análisis y visualización de datos. Esto es alentador porque significa que pandas no solo ayuda a los usuarios a trabajar con sus datos, sino que también proporciona un mejor punto de partida para que los desarrolladores creen herramientas de datos más potentes y enfocadas. La creación de bibliotecas que complementan la funcionalidad de pandas también permite que el desarrollo de pandas permanezca enfocado en sus requisitos originales.

Esta es una lista mantenida por la comunidad de proyectos que se basan en pandas para proporcionar herramientas en el espacio de PyData. El equipo principal de desarrollo de Pandas no necesariamente respalda ningún proyecto en particular de esta lista ni tiene conocimiento del estado de mantenimiento de ninguna biblioteca en particular.

Para obtener una lista más completa de proyectos que dependen de pandas, consulte la [página libraries.io para ver el uso de pandas](https://libraries.io/pypi/pandas/usage) o [busque pandas en pypi](https://pypi.org/search/?q=pandas).

Nos gustaría que a los usuarios les resulte más fácil encontrar estos proyectos. Si conoce otros proyectos importantes que cree que deberían estar en esta lista, por favor háganoslo saber.

## Estadística y aprendizaje automático

### [Statsmodels](https://www.statsmodels.org/)

Statsmodels es la "biblioteca de estadísticas y econometría" de Python y tiene una relación especial de larga data con pandas.
Statsmodels proporciona potentes funciones de estadística, econometría, análisis y modelado que están fuera del alcance de pandas. Statsmodels aprovecha los objetos de pandas como contenedor de datos para realizar los cálculo.

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

La [API de Python](https://plot.ly/python/) de [Plotly](https://plot.ly/) permite crear figuras interactivas y compartirlas en la web. Mapas, gráficos 2D, 3D y de transmisión en vivo se renderizan con WebGL y [D3.js](https://d3js.org/). La biblioteca permite graficar directamente desde un DataFrame de Pandas y facilita la colaboración en la nube. Los usuarios de [Matplotlib, ggplot para Python y Seaborn](https://plot.ly/python/matplotlib-to-plotly-tutorial/) pueden convertir sus figuras en gráficos web interactivos. Los gráficos pueden dibujarse en [IPython Notebooks](https://plot.ly/ipython-notebooks/), editarse con R o MATLAB, modificarse en una interfaz gráfica o integrarse en aplicaciones y dashboards. Plotly es un servicio gratuito para compartir sin restricciones y ofrece cuentas [en la nube](https://plot.ly/product/plans/), [sin conexión](https://plot.ly/python/offline/) o [locales](https://plot.ly/product/enterprise/) para uso privado.

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

ArcticDB está orientado a almacenar muchas (potencialmente millones) de tablas. Individual tables (DataFrames) are called symbols and are stored in collections called libraries. A single library can store many symbols. Libraries must first be initialized prior to use:

```python
lib = arctic.get_library('sample', create_if_missing=True)
```

#### Writing Data to ArcticDB

Now we have a library set up, we can get to reading and writing data. ArcticDB has a set of simple functions for DataFrame storage. Let's write a DataFrame to storage.

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

Write to ArcticDB.

```python
write_record = lib.write("test", df)
```

> **Note:** When writing pandas DataFrames, ArcticDB supports the following index types:
>
> - `pandas.Index` containing int64 (or the corresponding dedicated types Int64Index, UInt64Index)
> - `RangeIndex`
> - `DatetimeIndex`
> - `MultiIndex` composed of above supported types
>
> The "row" concept in `head`/`tail` refers to the row number ('iloc'), not the value in the `pandas.Index` ('loc').

#### Reading Data from ArcticDB

Read the data back from storage:

```python
read_record = lib.read("test")
read_record.data
df.dtypes
```

ArcticDB also supports appending, updating, and querying data from storage to a pandas DataFrame. Please find more information [here](https://docs.arcticdb.io/latest/api/query_builder/).

### [Hugging Face](https://huggingface.co/datasets)

The Hugging Face Dataset Hub provides a large collection of ready-to-use datasets for machine learning shared by the community. The platform offers a user-friendly interface to explore, discover and visualize datasets, and provides tools to easily load and work with these datasets in Python thanks to the [huggingface_hub](https://github.com/huggingface/huggingface_hub) library.

You can access datasets on Hugging Face using `hf://` paths in pandas, in the form `hf://datasets/username/dataset_name/...`.

For example, here is how to load the [stanfordnlp/imdb dataset](https://huggingface.co/datasets/stanfordnlp/imdb):

```python
import pandas as pd

# Load the IMDB dataset
df = pd.read_parquet("hf://datasets/stanfordnlp/imdb/plain_text/train-00000-of-00001.parquet")
```

Tip: on a dataset page, click on "Use this dataset" to get the code to load it in pandas.

To save a dataset on Hugging Face you need to [create a public or private dataset](https://huggingface.co/new-dataset) and [login](https://huggingface.co/docs/huggingface_hub/quick-start#login-command), and then you can use `df.to_csv/to_json/to_parquet`:

```python
# Save the dataset to my Hugging Face account
df.to_parquet("hf://datasets/username/dataset_name/train.parquet")
```

You can find more information about the Hugging Face Dataset Hub in the [documentation](https://huggingface.co/docs/hub/en/datasets).

## Out-of-core

### [Bodo](https://bodo.ai/)

Bodo is a high-performance Python computing engine that automatically parallelizes and
optimizes your code through compilation using HPC (high-performance computing) techniques.
Designed to operate with native pandas dataframes, Bodo compiles your pandas code to execute
across multiple cores on a single machine or distributed clusters of multiple compute nodes efficiently.
Bodo also makes distributed pandas dataframes queryable with SQL.

The community edition of Bodo is free to use on up to 8 cores. Beyond that, Bodo offers a paid
enterprise edition. Free licenses of Bodo (for more than 8 cores) are available
[upon request](https://www.bodo.ai/contact) for academic and non-profit use.

### [Cylon](https://cylondata.org/)

Cylon is a fast, scalable, distributed memory parallel runtime with a pandas
like Python DataFrame API. ”Core Cylon” is implemented with C++ using Apache
Arrow format to represent the data in-memory. Cylon DataFrame API implements
most of the core operators of pandas such as merge, filter, join, concat,
group-by, drop_duplicates, etc. These operators are designed to work across
thousands of cores to scale applications. It can interoperate with pandas
DataFrame by reading data from pandas or converting data to pandas so users
can selectively scale parts of their pandas DataFrame applications.

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

Dask is a flexible parallel computing library for analytics. Dask
provides a familiar `DataFrame` interface for out-of-core, parallel and
distributed computing.

### [Dask-ML](https://ml.dask.org)

Dask-ML enables parallel and distributed machine learning using Dask
alongside existing machine learning libraries like Scikit-Learn,
XGBoost, and TensorFlow.

### [Ibis](https://ibis-project.org/docs/)

Ibis offers a standard way to write analytics code, that can be run in multiple engines. It helps in bridging the gap between local Python environments (like pandas) and remote storage and execution systems like Hadoop components (like HDFS, Impala, Hive, Spark) and SQL databases (Postgres, etc.).

### [Koalas](https://koalas.readthedocs.io/en/latest/)

Koalas provides a familiar pandas DataFrame interface on top of Apache
Spark. It enables users to leverage multi-cores on one machine or a
cluster of machines to speed up or scale their DataFrame code.

### [Modin](https://github.com/modin-project/modin)

The `modin.pandas` DataFrame is a parallel and distributed drop-in replacement
for pandas. This means that you can use Modin with existing pandas code or write
new code with the existing pandas API. Modin can leverage your entire machine or
cluster to speed up and scale your pandas workloads, including traditionally
time-consuming tasks like ingesting data (`read_csv`, `read_excel`,
`read_parquet`, etc.).

```python
# import pandas as pd
import modin.pandas as pd

df = pd.read_csv("big.csv")  # use all your cores!
```

### [Pandarallel](https://github.com/nalepae/pandarallel)

Pandarallel provides a simple way to parallelize your pandas operations on all your CPUs by changing only one line of code.
If also displays progress bars.

```python
from pandarallel import pandarallel

pandarallel.initialize(progress_bar=True)

# df.apply(func)
df.parallel_apply(func)
```

### [Vaex](https://vaex.io/docs/)

Cada vez más, se crean paquetes que utilizan pandas para suplir necesidades específicas en la preparación, análisis y visualización de datos. Vaex is
a python library for Out-of-Core DataFrames (similar to Pandas), to
visualize and explore big tabular datasets. It can calculate statistics
such as mean, sum, count, standard deviation etc, on an N-dimensional
grid up to a billion (10^9) objects/rows per second. Visualization is
done using histograms, density plots and 3d volume rendering, allowing
interactive exploration of big data. Vaex uses memory mapping, zero
memory copy policy and lazy computations for best performance (no memory
wasted).

- `vaex.from_pandas`
- `vaex.to_pandas_df`

### [Hail Query](https://hail.is/)

An out-of-core, preemptible-safe, distributed, dataframe library serving
the genetics community. Hail Query ships with on-disk data formats,
in-memory data formats, an expression compiler, a query planner, and a
distributed sort algorithm all designed to accelerate queries on large
matrices of genome sequencing data.

It is often easiest to use pandas to manipulate the summary statistics or
other small aggregates produced by Hail. For this reason, Hail provides
native import to and export from pandas DataFrames:

- [`Table.from_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.from_pandas)
- [`Table.to_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.to_pandas)

## Data cleaning and validation

### [pyjanitor](https://github.com/pyjanitor-devs/pyjanitor)

Pyjanitor provides a clean API for cleaning data, using method chaining.

### [Pandera](https://pandera.readthedocs.io/en/stable/)

Pandera provides a flexible and expressive API for performing data validation on dataframes
to make data processing pipelines more readable and robust.
Dataframes contain information that pandera explicitly validates at runtime. This is useful in
production-critical data pipelines or reproducible research settings.

## Extension data types

Pandas provides an interface for defining
[extension types](https://pandas.pydata.org/docs/development/extending.html#extension-types) to extend NumPy's type system.
The following libraries implement that interface to provide types not found in NumPy or pandas,
which work well with pandas' data containers.

### [awkward-pandas](https://awkward-pandas.readthedocs.io/)

Awkward-pandas provides an extension type for storing Awkward
Arrays inside pandas' Series and
DataFrame. It also provides an accessor for using awkward functions
on Series that are of awkward type.

### [db-dtypes](https://github.com/googleapis/python-db-dtypes-pandas)

db-dtypes provides an extension types for working with types like
DATE, TIME, and JSON from database systems. This package is used
by pandas-gbq to provide natural dtypes for BigQuery data types without
a natural numpy type.

### [Pandas-Genomics](https://pandas-genomics.readthedocs.io/en/latest/)

Pandas-Genomics provides an extension type and extension array for working
with genomics data.  It also includes `genomics` accessors for many useful properties
and methods related to QC and analysis of genomics data.

### [Physipandas](https://github.com/mocquin/physipandas)

Physipandas provides an extension for manipulating physical quantities
(like scalar and numpy.ndarray) in association with a physical unit
(like meter or joule) and additional features for integration of
`physipy` accessors with pandas Series and Dataframe.

### [Pint-Pandas](https://github.com/hgrecco/pint-pandas)

Pint-Pandas provides an extension type for storing numeric arrays with units.
These arrays can be stored inside pandas' Series and DataFrame. Operations
between Series and DataFrame columns which use pint's extension array are then
units aware.

### [Text Extensions](https://ibm.biz/text-extensions-for-pandas)

Text Extensions for Pandas provides extension types to cover common data structures for representing natural language data, plus library integrations that convert the outputs of popular natural language processing libraries into Pandas DataFrames.

## Accessors

A directory of projects providing
[extension accessors](https://pandas.pydata.org/docs/development/extending.html#registering-custom-accessors).
This is for users to discover new accessors and for library
authors to coordinate on the namespace.

| Library                                                              | Accessor   | Classes               |
| -------------------------------------------------------------------- | ---------- | --------------------- |
| [awkward-pandas](https://awkward-pandas.readthedocs.io/en/latest/)   | `ak`       | `Series`              |
| [pdvega](https://altair-viz.github.io/pdvega/)                       | `vgplot`   | `Series`, `DataFrame` |
| [pandas-genomics](https://pandas-genomics.readthedocs.io/en/latest/) | `genomics` | `Series`, `DataFrame` |
| [pint-pandas](https://github.com/hgrecco/pint-pandas)                | `pint`     | `Series`, `DataFrame` |
| [physipandas](https://github.com/mocquin/physipandas)                | `physipy`  | `Series`, `DataFrame` |
| [composeml](https://github.com/alteryx/compose)                      | `slice`    | `DataFrame`           |
| [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)         | `gppd`     | `Series`, `DataFrame` |
| [staircase](https://www.staircase.dev/)                              | `sc`       | `Series`, `DataFrame` |
| [woodwork](https://github.com/alteryx/woodwork)                      | `slice`    | `Series`, `DataFrame` |

## Development tools

### [pandas-stubs](https://github.com/VirtusLab/pandas-stubs)

While pandas repository is partially typed, the package itself doesn't expose this information for external use.
Install pandas-stubs to enable basic type coverage of pandas API.

Learn more by reading through these issues [14468](https://github.com/pandas-dev/pandas/issues/14468),
[26766](https://github.com/pandas-dev/pandas/issues/26766), [28142](https://github.com/pandas-dev/pandas/issues/28142).

See installation and usage instructions on the [GitHub page](https://github.com/VirtusLab/pandas-stubs).

### [Hamilton](https://github.com/dagworks-inc/hamilton)

Hamilton is a declarative dataflow framework that came out of Stitch Fix. It was designed to help one manage a
Pandas code base, specifically with respect to feature engineering for machine learning models.

It prescribes an opinionated paradigm, that ensures all code is:

- unit testable
- integration testing friendly
- documentation friendly
- transformation logic is reusable, as it is decoupled from the context of where it is used.
- integratable with runtime data quality checks.

This helps one to scale your pandas code base, at the same time, keeping maintenance costs low.

For more information, see [documentation](https://hamilton.readthedocs.io/).
