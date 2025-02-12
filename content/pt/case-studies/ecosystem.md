# Ecossistema

Cada vez mais, os pacotes estão sendo construídos em cima do pandas para abordar
necessidades específicas na preparação de dados, análise e visualização. Isso é
encorajador porque significa que pandas não só está ajudando os usuários a lidar com
suas tarefas de dados, mas também que fornece um melhor ponto de partida para desenvolvedores
construírem ferramentas de dados poderosas e mais focadas. A criação
de bibliotecas que complementam a funcionalidade do pandas também permite desenvolvimento do pandas
manter foco em torno de suas necessidades originais.

Esta é uma lista com manutenção da comunidade de projetos que constroem em pandas para
fornecer ferramentas no espaço PyData. A equipe principal de desenvolvimento do pandas não apoia necessariamente nenhum projeto específico nesta lista nem tem qualquer conhecimento do status de manutenção de qualquer biblioteca em particular.

Para uma lista mais completa de projetos que dependem dos pandas, veja a página de uso de libraries.io para
pandas ou procure no pypi por
pandas.

Gostaríamos de facilitar para os usuários encontrarem esses projetos.
Se você conhece outros projetos importantes que acha que deveriam
estar nesta lista, informe-nos.

## Estatísticas e aprendizado de máquina

### [Statsmodels](https://www.statsmodels.org/)

Statsmodels é a principal "biblioteca de estatística e econometria"
do Python e tem um relacionamento especial de longa data com o Pandas.
O Statsmodels fornece estatísticas poderosas, econometria, análises e
funcionalidades de modelagem que estão fora do escopo do Pandas. O Statsmodels
utiliza objetos pandas como o contêiner de dados subjacente
para computação.

### [Featuretools](https://github.com/alteryx/featuretools/)

Featuretools é uma biblioteca Python para engenharia de recursos automatizada
construída sobre o Pandas. Ela se destaca na transformação de conjuntos de dados temporais e relacionais em matrizes de recursos para aprendizado de máquina usando "primitivos" de engenharia de recursos reutilizáveis. Os usuários podem contribuir com seus próprios primitivos em Python e compartilhá-los com o resto da comunidade.

### [Compose](https://github.com/alteryx/compose)

Compose é uma ferramenta de aprendizagem de máquina para rotulagem de dados e engenharia de predição.
Ela permite que você estruture o processo de rotulagem parametrizando problemas de predição e transformando dados relacionais orientados por tempo em valores-alvo com tempos de corte que podem ser usados ​​para aprendizado supervisionado.

### [STUMPY](https://github.com/TDAmeritrade/stumpy)

STUMPY é uma biblioteca Python poderosa e escalável para análise moderna de séries temporais.
Em sua essência, o STUMPY calcula com eficiência algo chamado [perfil de matriz](https://stumpy.readthedocs.io/en/latest/Tutorial_The_Matrix_Profile.html), que pode ser usado para uma ampla variedade de tarefas de mineração de dados de séries temporais.

## Visualização

### [Altair](https://altair-viz.github.io/)

Altair é uma biblioteca de visualização estatística declarativa para Python.
Com Altair, você pode gastar mais tempo entendendo seus dados e seu significado. A API do Altair é simples, amigável e consistente e construída sobre a poderosa especificação Vega-Lite JSON. Essa simplicidade elegante produz visualizações bonitas e eficazes com uma quantidade mínima de código. Altair funciona com Pandas DataFrames.

### [Bokeh](https://docs.bokeh.org)

Bokeh é uma biblioteca de visualização interativa Python para grandes conjuntos de dados que usa nativamente as últimas tecnologias da web. Seu objetivo é fornecer construção elegante e concisa de novos gráficos no estilo do Protovis/D3, ao mesmo tempo em que fornece interatividade de alto desempenho sobre grandes dados para thin clients.

[Pandas-Bokeh](https://github.com/PatrikHlobil/Pandas-Bokeh) fornece uma API de alto nível para Bokeh que pode ser carregada como um backend de plotagem nativa do Pandas via

```
pd.set_option("plotting.backend", "pandas_bokeh")
```

É muito semelhante ao backend de plotagem matplotlib, mas fornece gráficos e mapas interativos baseados na web.

### [pygwalker](https://github.com/Kanaries/pygwalker)

PyGWalker é uma ferramenta interativa de visualização de dados e análise exploratória de dados construída sobre o Graphic Walker com suporte para fluxos de trabalho de visualização, limpeza e anotação.

O pygwalker pode salvar gráficos criados interativamente no Graphic-Walker e Vega-Lite JSON.

```
import pygwalker as pyg
pyg.walk(df)
```

### [seaborn](https://seaborn.pydata.org)

Seaborn é uma biblioteca de visualização Python baseada em [matplotlib](https://matplotlib.org). Ela fornece uma interface de alto nível, orientada a conjuntos de dados para criar gráficos estatísticos atraentes.
As funções de plotagem em seaborn entendem objetos pandas e alavancam operações de agrupamento pandas internamente para dar suporte à especificação concisa de visualizações complexas. Seaborn também vai além de matplotlib e pandas com a opção de executar estimativas estatísticas durante a plotagem, agregando entre observações e visualizando o ajuste de modelos estatísticos para enfatizar padrões em um conjunto de dados.

```
import seaborn as sns
sns.set_theme()
```

### [plotnine](https://github.com/has2k1/plotnine/)

O [ggplot2](https://ggplot2.tidyverse.org/) de Hadley Wickham é um pacote de visualização exploratória fundamental para a linguagem R. Baseado em ["The Grammar of Graphics"](https://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/GOG.html), ele fornece uma maneira poderosa, declarativa e extremamente geral de gerar gráficos personalizados de qualquer tipo de dado. Várias implementações para outras linguagens estão disponíveis. Uma boa implementação para usuários de Python é has2k1/plotnine.
Várias implementações para outras linguagens estão disponíveis.
Uma boa implementação para usuários de Python é [has2k1/plotnine](https://github.com/has2k1/plotnine/).

### [IPython Vega](https://github.com/vega/ipyvega)

[IPython Vega](https://github.com/vega/ipyvega) utiliza [Vega](https://github.com/vega/vega) para criar gráficos no Jupyter Notebook.

### [Plotly](https://plot.ly/python)

A [API Python](https://plot.ly/python/) do [Plotly's](https://plot.ly/) permite figuras interativas e compartilhamento na web. Mapas, gráficos 2D, 3D e streaming ao vivo são renderizados com WebGL e [D3.js](https://d3js.org/). A biblioteca oferece suporte a plotagem diretamente de um DataFrame do pandas e colaboração baseada em nuvem. Usuários do [matplotlib, ggplot para Python e Seaborn](https://plot.ly/python/matplotlib-to-plotly-tutorial/) podem converter figuras em gráficos interativos baseados na web. Os gráficos podem ser desenhados em [IPython Notebooks](https://plot.ly/ipython-notebooks/), editados com R ou MATLAB, modificados em uma GUI ou incorporados em aplicativos e painéis. O Plotly é gratuito para compartilhamento ilimitado e tem contas na [nuvem](https://plot.ly/product/plans/), [offline](https://plot.ly/python/offline/) ou [on-premise](https://plot.ly/product/enterprise/) para uso privado.

### [Lux](https://github.com/lux-org/lux)

Lux é uma biblioteca Python que facilita a experimentação rápida e fácil com dados ao automatizar o processo de exploração visual de dados. Para usar Lux, basta adicionar uma importação extra junto com pandas:

```python
import lux
import pandas as pd

df = pd.read_csv("data.csv")
df  # descubra insights interessantes!
```

Ao imprimir um dataframe, o Lux automaticamente [recomenda um conjunto de visualizações](https://raw.githubusercontent.com/lux-org/lux-resources/master/readme_img/demohighlight.gif) que destaca tendências e padrões interessantes no dataframe. Os usuários podem aproveitar quaisquer comandos pandas existentes sem modificar seu código, enquanto conseguem visualizar suas estruturas de dados pandas (por exemplo, DataFrame, Series, Index) ao mesmo tempo. O Lux também oferece uma [linguagem poderosa e intuitiva](https://lux-api.readthedocs.io/en/latest/source/guide/vis.html>) que permite aos usuários criar visualizações Altair, matplotlib ou Vega-Lite sem ter que pensar no nível do código.

### [D-Tale](https://github.com/man-group/dtale)

O D-Tale é um cliente web leve para visualizar estruturas de dados do pandas. Ele fornece uma grade rica em estilo de planilha que atua como um wrapper para muitas funcionalidades do pandas (consulta, classificação, descrição, corr...) para que os usuários possam manipular seus dados rapidamente. Há também um construtor de gráficos interativo usando o Plotly Dash, permitindo que os usuários criem visualizações portáteis agradáveis. O D-Tale pode ser invocado com o seguinte comando

```python
import dtale

dtale.show(df)
```

O D-Tale integra-se perfeitamente com notebooks Jupyter, terminais Python, Kaggle e Google Colab. Aqui estão algumas demonstrações da [grade](http://alphatechadmin.pythonanywhere.com/dtale/main/1).

### [hvplot](https://hvplot.holoviz.org/index.html)

hvPlot é uma API de plotagem de alto nível para o ecossistema PyData construída em [HoloViews](https://holoviews.org/).
Ele pode ser carregado como um backend de plotagem pandas nativo via

```python
pd.set_option("plotting.backend", "hvplot")
```

## IDE

### [IPython](https://ipython.org/documentation.html)

IPython is an interactive command shell and distributed computing
environment. IPython tab completion works with Pandas methods and also
attributes like DataFrame columns.

### [Jupyter Notebook / Jupyter Lab](https://jupyter.org)

Jupyter Notebook is a web application for creating Jupyter notebooks. A
Jupyter notebook is a JSON document containing an ordered list of
input/output cells which can contain code, text, mathematics, plots and
rich media. Jupyter notebooks can be converted to a number of open
standard output formats (HTML, HTML presentation slides, LaTeX, PDF,
ReStructuredText, Markdown, Python) through 'Download As' in the web
interface and `jupyter convert` in a shell.

Pandas DataFrames implement `_repr_html_`and `_repr_latex` methods which
are utilized by Jupyter Notebook for displaying (abbreviated) HTML or
LaTeX tables. LaTeX output is properly escaped. (Note: HTML tables may
or may not be compatible with non-HTML Jupyter output formats.)

See [Options and Settings](https://pandas.pydata.org/docs/user_guide/options.html)
for pandas `display.` settings.

### [Spyder](https://www.spyder-ide.org/)

Spyder is a cross-platform PyQt-based IDE combining the editing,
analysis, debugging and profiling functionality of a software
development tool with the data exploration, interactive execution, deep
inspection and rich visualization capabilities of a scientific
environment like MATLAB or Rstudio.

Its Variable
Explorer allows
users to view, manipulate and edit pandas `Index`, `Series`, and
`DataFrame` objects like a "spreadsheet", including copying and
modifying values, sorting, displaying a "heatmap", converting data
types and more. Pandas objects can also be renamed, duplicated, new
columns added, copied/pasted to/from the clipboard (as TSV), and
saved/loaded to/from a file. Spyder can also import data from a variety
of plain text and binary files or the clipboard into a new pandas
DataFrame via a sophisticated import wizard.

Most pandas classes, methods and data attributes can be autocompleted in
Spyder's [Editor](https://docs.spyder-ide.org/current/panes/editor.html) and IPython
Console, and Spyder's
[Help pane](https://docs.spyder-ide.org/current/panes/help.html) can retrieve and
render Numpydoc documentation on pandas objects in rich text with Sphinx
both automatically and on-demand.

### [marimo](https://marimo.io)

marimo is a reactive notebook for Python and SQL that enhances productivity when working with dataframes. It provides several features to make data manipulation and visualization more interactive and fun:

1. Rich, interactive displays: marimo can display pandas dataframes in interactive tables or charts with filtering and sorting capabilities.
2. Data selection: Users can select data in tables or pandas-backed plots, and the selections are automatically sent to Python as pandas dataframes.
3. No-code transformations: Users can interactively transform pandas dataframes using a GUI, without writing code. The generated code can be copied and pasted into the notebook.
4. Custom filters: marimo allows the creation of pandas-backed filters using UI elements like sliders and dropdowns.
5. Dataset explorer: marimo automatically discovers and displays all dataframes in the notebook, allowing users to explore and visualize data interactively.
6. SQL integration: marimo allows users to write SQL queries against any pandas dataframes existing in memory.

## API

### [pandas-datareader](https://github.com/pydata/pandas-datareader)

`pandas-datareader` is a remote data access library for pandas
(PyPI:`pandas-datareader`). It is based on functionality that was
located in `pandas.io.data` and `pandas.io.wb` but was split off in
v0.19. See more in the pandas-datareader
docs:

The following data feeds are available:

- Google Finance
- Tiingo
- Morningstar
- IEX
- Robinhood
- Enigma
- Quandl
- FRED
- Fama/French
- World Bank
- OECD
- Eurostat
- TSP Fund Data
- Nasdaq Trader Symbol Definitions
- Stooq Index Data
- MOEX Data

### [pandaSDMX](https://pandasdmx.readthedocs.io)

pandaSDMX is a library to retrieve and acquire statistical data and
metadata disseminated in [SDMX](https://sdmx.org) 2.1, an
ISO-standard widely used by institutions such as statistics offices,
central banks, and international organisations. pandaSDMX can expose
datasets and related structural metadata including data flows,
code-lists, and data structure definitions as pandas Series or
MultiIndexed DataFrames.

### [fredapi](https://github.com/mortada/fredapi)

fredapi is a Python interface to the Federal Reserve Economic Data
(FRED) provided by the Federal Reserve
Bank of St. Louis. It works with both the FRED database and ALFRED
database that contains point-in-time data (i.e. historic data
revisions). fredapi provides a wrapper in Python to the FRED HTTP API,
and also provides several convenient methods for parsing and analyzing
point-in-time data from ALFRED. fredapi makes use of pandas and returns
data in a Series or DataFrame. This module requires a FRED API key that
you can obtain for free on the FRED website.

## Domain specific

### [Geopandas](https://github.com/geopandas/geopandas)

Geopandas extends pandas data objects to include geographic information
which support geometric operations. If your work entails maps and
geographical coordinates, and you love pandas, you should take a close
look at Geopandas.

### [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)

gurobipy-pandas provides a convenient accessor API to connect pandas with
gurobipy. It enables users to more easily and efficiently build mathematical
optimization models from data stored in DataFrames and Series, and to read
solutions back directly as pandas objects.

### [staircase](https://github.com/staircase-dev/staircase)

staircase is a data analysis package, built upon pandas and numpy, for modelling and
manipulation of mathematical step functions. It provides a rich variety of arithmetic
operations, relational operations, logical operations, statistical operations and
aggregations for step functions defined over real numbers, datetime and timedelta domains.

### [xarray](https://github.com/pydata/xarray)

xarray brings the labeled data power of pandas to the physical sciences
by providing N-dimensional variants of the core pandas data structures.
It aims to provide a pandas-like and pandas-compatible toolkit for
analytics on multi-dimensional arrays, rather than the tabular data for
which pandas excels.

## IO

### [NTV-pandas](https://github.com/loco-philippe/ntv-pandas)

NTV-pandas provides a JSON converter with more data types than the ones supported by pandas directly.

It supports the following data types:

- pandas data types
- data types defined in the [NTV format](https://loco-philippe.github.io/ES/JSON%20semantic%20format%20\(JSON-NTV\).htm)
- data types defined in [Table Schema specification](http://dataprotocols.org/json-table-schema/#field-types-and-formats)

The interface is always reversible (conversion round trip) with two formats (JSON-NTV and JSON-TableSchema).

Example:

```python
import ntv_pandas as npd

jsn = df.npd.to_json(table=False)  # save df as a JSON-value (format Table Schema if table is True else format NTV )
df  = npd.read_json(jsn)  # load a JSON-value as a `DataFrame`

df.equals(npd.read_json(df.npd.to_json(df)))  # `True` in any case, whether `table=True` or not
```

### [BCPandas](https://github.com/yehoshuadimarsky/bcpandas)

BCPandas provides high performance writes from pandas to Microsoft SQL Server,
far exceeding the performance of the native `df.to_sql` method. Internally, it uses
Microsoft's BCP utility, but the complexity is fully abstracted away from the end user.
Rigorously tested, it is a complete replacement for `df.to_sql`.

### [Deltalake](https://pypi.org/project/deltalake)

Deltalake python package lets you access tables stored in
[Delta Lake](https://delta.io/) natively in Python without the need to use Spark or
JVM. It provides the `delta_table.to_pyarrow_table().to_pandas()` method to convert
any Delta table into Pandas dataframe.

### [pandas-gbq](https://github.com/googleapis/python-bigquery-pandas)

pandas-gbq provides high performance reads and writes to and from
[Google BigQuery](https://cloud.google.com/bigquery/). Previously (before version 2.2.0),
these methods were exposed as `pandas.read_gbq` and `DataFrame.to_gbq`.
Use `pandas_gbq.read_gbq` and `pandas_gbq.to_gbq`, instead.

### [ArcticDB](https://github.com/man-group/ArcticDB)

ArcticDB is a serverless DataFrame database engine designed for the Python Data Science ecosystem. ArcticDB enables you to store, retrieve, and process pandas DataFrames at scale. It is a storage engine designed for object storage and also supports local-disk storage using LMDB. ArcticDB requires zero additional infrastructure beyond a running Python environment and access to object storage and can be installed in seconds. Please find full documentation [here](https://docs.arcticdb.io/latest/).

#### ArcticDB Terminology

ArcticDB is structured to provide a scalable and efficient way to manage and retrieve DataFrames, organized into several key components:

- `Object Store` Collections of libraries. Used to separate logical environments from each other. Analogous to a database server.
- `Library` Contains multiple symbols which are grouped in a certain way (different users, markets, etc). Analogous to a database.
- `Symbol` Atomic unit of data storage. Identified by a string name. Data stored under a symbol strongly resembles a pandas DataFrame. Analogous to tables.
- `Version` Every modifying action (write, append, update) performed on a symbol creates a new version of that object.

#### Installation

To install, simply run:

```console
pip install arcticdb
```

To get started, we can import ArcticDB and instantiate it:

```python
import arcticdb as adb
import numpy as np
import pandas as pd
# this will set up the storage using the local file system
arctic = adb.Arctic("lmdb://arcticdb_test")
```

> **Note:** ArcticDB supports any S3 API compatible storage, including AWS. ArcticDB also supports Azure Blob storage.\
> ArcticDB also supports LMDB for local/file based storage - to use LMDB, pass an LMDB path as the URI: `adb.Arctic('lmdb://path/to/desired/database')`.

#### Library Setup

ArcticDB is geared towards storing many (potentially millions) of tables. Individual tables (DataFrames) are called symbols and are stored in collections called libraries. A single library can store many symbols. Libraries must first be initialized prior to use:

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

Cada vez mais, os pacotes estão sendo construídos em cima do pandas para abordar
necessidades específicas na preparação de dados, análise e visualização. Vaex is
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
