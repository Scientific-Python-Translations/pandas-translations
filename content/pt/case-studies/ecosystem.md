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

IPython é um shell de comando interativo e ambiente de computação distribuída. O preenchimento de tabulação do IPython funciona com métodos Pandas e também com atributos como colunas DataFrame.

### [Jupyter Notebook / Jupyter Lab](https://jupyter.org)

O Jupyter Notebook é uma aplicação web para criar notebooks do Jupyter. Um notebook Jupyter é um documento JSON contendo uma lista ordenada de células de entrada/saída que podem conter código, texto, matemática, gráficos e rich media. Os Jupyter notebooks podem ser convertidos para vários formatos de saída de padrão aberto (HTML, slides de apresentação HTML, LaTeX, PDF, ReStructuredText, Markdown, Python) por meio de 'Download As' na interface da web e `jupyter convert` em um shell.

DataFrames do Pandas implementam métodos `_repr_html_`e `_repr_latex` que são utilizados pelo Jupyter Notebook para exibir tabelas HTML ou LaTeX (abreviadas). A saída LaTeX é escapada corretamente. (Observação: tabelas HTML podem ou não ser compatíveis com formatos de saída não HTML do Jupyter.)

Veja [Options and Settings](https://pandas.pydata.org/docs/user_guide/options.html) para as configurações de `display.` do pandas.

### [Spyder](https://www.spyder-ide.org/)

Spyder é um IDE multiplataforma baseado em PyQt que combina a funcionalidade de edição, análise, depuração e criação de perfil de uma ferramenta de desenvolvimento de software com a exploração de dados, execução interativa, inspeção profunda e recursos de visualização avançada de um ambiente científico como MATLAB ou Rstudio.

Seu [Variable Explorer](https://docs.spyder-ide.org/current/panes/variableexplorer.html) permite que os usuários visualizem, manipulem e editem objetos `Index`, `Series` e `DataFrame` do pandas como uma "planilha", incluindo copiar e modificar valores, classificar, exibir um "mapa de calor", converter tipos de dados e muito mais. Objetos do pandas também podem ser renomeados, duplicados, novas colunas adicionadas, copiados/colados para/da área de transferência (como TSV) e salvos/carregados para/de um arquivo. Spyder também pode importar dados de uma variedade de arquivos de texto simples e binários ou da área de transferência para um novo DataFrame do pandas por meio de um sofisticado assistente de importação.

A maioria das classes, métodos e atributos de dados do pandas podem ser preenchidos automaticamente no [Editor](https://docs.spyder-ide.org/current/panes/editor.html) do Spyder e no [Console do IPython](https://docs.spyder-ide.org/current/panes/ipythonconsole.html), e o [painel de Ajuda](https://docs.spyder-ide.org/current/panes/help.html) do Spyder pode recuperar e renderizar a documentação do Numpydoc sobre objetos do Pandas em rich text com o Sphinx, tanto automaticamente quanto sob demanda.

### [marimo](https://marimo.io)

marimo é um notebook reativo para Python e SQL que aumenta a produtividade ao trabalhar com dataframes. Ele fornece vários recursos para tornar a manipulação e visualização de dados mais interativas e divertidas:

1. Exibições ricas e interativas: o marimo pode exibir dataframes do pandas em tabelas ou gráficos interativos com recursos de filtragem e classificação.
2. Seleção de dados: os usuários podem selecionar dados em tabelas ou gráficos baseados em pandas, e as seleções são enviadas automaticamente para o Python como dataframes do pandas.
3. Transformações sem código: os usuários podem transformar dataframes do pandas interativamente usando uma GUI, sem escrever código. O código gerado pode ser copiado e colado no notebook.
4. Filtros personalizados: o marimo permite a criação de filtros baseados em pandas usando elementos de IU como controles deslizantes e menus suspensos.
5. Explorador de conjunto de dados: o marimo descobre e exibe automaticamente todos os dataframes no notebook, permitindo que os usuários explorem e visualizem dados interativamente.
6. Integração com SQL: o marimo permite que os usuários escrevam consultas SQL em quaisquer dataframes do pandas existentes na memória.

## API

### [pandas-datareader](https://github.com/pydata/pandas-datareader)

`pandas-datareader` é uma biblioteca de acesso remoto a dados para o pandas (PyPI:`pandas-datareader`). Ela é baseada em uma funcionalidade que estava localizada em pandas.io.data e pandas.io.wb, mas foi separada na v0.19. Veja mais na [documentação do pandas-datareader](https://pandas-datareader.readthedocs.io/en/latest/):

Os seguintes feeds de dados estão disponíveis:

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

pandaSDMX é uma biblioteca para recuperar e adquirir dados estatísticos e metadados disseminados no [SDMX](https://sdmx.org) 2.1, um padrão ISO amplamente utilizado por instituições como escritórios de estatística, bancos centrais e organizações internacionais. O pandaSDMX pode expor conjuntos de dados e metadados estruturais relacionados, incluindo fluxos de dados, listas de códigos e definições de estrutura de dados como pandas Series ou MultiIndexed DataFrames.

### [fredapi](https://github.com/mortada/fredapi)

fredapi é uma interface Python para o [Federal Reserve Economic Data (FRED)](https://fred.stlouisfed.org/) fornecido pelo Federal Reserve Bank of St. Louis. Ele funciona tanto com o banco de dados do FRED quanto com o banco de dados do ALFRED que contém dados de ponto no tempo (ou seja, revisões de dados históricos). fredapi fornece um wrapper em Python para a API HTTP do FRED e também fornece vários métodos convenientes para analisar e analisar dados de ponto no tempo do ALFRED. fredapi faz uso do pandas e retorna dados em uma Series ou DataFrame. Este módulo requer uma chave de API do FRED que você pode obter gratuitamente no site do FRED.

## Específico por domínio

### [Geopandas](https://github.com/geopandas/geopandas)

Geopandas estende objetos de dados do pandas para incluir informações geográficas que suportam operações geométricas. Se seu trabalho envolve mapas e coordenadas geográficas, e você ama o pandas, você deveria dar uma olhada no Geopandas.

### [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)

gurobipy-pandas fornece uma API de acesso conveniente para conectar pandas com gurobipy. Ele permite que os usuários construam modelos de otimização matemática de forma mais fácil e eficiente a partir de dados armazenados em DataFrames e Series, e leiam soluções de volta diretamente como objetos do pandas.

### [staircase](https://github.com/staircase-dev/staircase)

staircase é um pacote de análise de dados, construído sobre pandas e numpy, para modelagem e manipulação de funções de passo matemáticas. Ele fornece uma rica variedade de operações aritméticas, operações relacionais, operações lógicas, operações estatísticas e agregações para funções de passo definidas sobre domínios de números reais, datetime e timedelta.

### [xarray](https://github.com/pydata/xarray)

xarray traz o poder de dados rotulados do pandas para as ciências físicas ao fornecer variantes N-dimensionais das principais estruturas de dados do pandas.
Ele visa fornecer um kit de ferramentas semelhante e compatível com o pandas para análises em matrizes multidimensionais, em vez dos dados tabulares para os quais o pandas se destaca.

## E/S

### [NTV-pandas](https://github.com/loco-philippe/ntv-pandas)

O NTV-pandas fornece um conversor JSON com mais tipos de dados do que os suportados diretamente pelo pandas.

Ele suporta os seguintes tipos de dados:

- tipos de dados do pandas
- tipos de dados definidos no [formato NTV](https://loco-philippe.github.io/ES/JSON%20semantic%20format%20\(JSON-NTV\).htm)
- tipos de dados definidos na [especificação Table Schema](http://dataprotocols.org/json-table-schema/#field-types-and-formats)

A interface é sempre reversível (conversão de ida e volta) com dois formatos (JSON-NTV e JSON-TableSchema).

Exemplo:

```python
import ntv_pandas as npd

jsn = df.npd.to_json(table=False)  # salva df como um valor JSON (formata Table Schema se a tabela for True, do contrário format NTV)
df  = npd.read_json(jsn)  # carrega um valor JSON como um `DataFrame`

df.equals(npd.read_json(df.npd.to_json(df)))  # `True` em qualquer caso, independente de `table=True` ou não
```

### [BCPandas](https://github.com/yehoshuadimarsky/bcpandas)

O BCPandas fornece escritas de alto desempenho do pandas para o Microsoft SQL Server, excedendo em muito o desempenho do método nativo df.to_sql. Internamente, ele usa o utilitário BCP da Microsoft, mas a complexidade é totalmente abstraída do usuário final.
Rigorosamente testado, é um substituto completo para df.to_sql.

### [Deltalake](https://pypi.org/project/deltalake)

O pacote python Deltalake permite que você acesse tabelas armazenadas no [Delta Lake](https://delta.io/) nativamente em Python sem a necessidade de usar Spark ou JVM. Ele fornece o método `delta_table.to_pyarrow_table().to_pandas()` para converter qualquer tabela Delta em Pandas dataframe.

### [pandas-gbq](https://github.com/googleapis/python-bigquery-pandas)

pandas-gbq fornece leituras e escritas de alto desempenho de e para o [Google BigQuery](https://cloud.google.com/bigquery/). Anteriormente (antes da versão 2.2.0), estes métodos eram expostos como `pandas.read_gbq` e `DataFrame.to_gbq`.
Use `pandas_gbq.read_gbq` e `pandas_gbq.to_gbq`.

### [ArcticDB](https://github.com/man-group/ArcticDB)

O ArcticDB é um mecanismo de banco de dados DataFrame sem servidor projetado para o ecossistema Python Data Science. O ArcticDB permite que você armazene, recupere e processe DataFrames do pandas em escala. É um mecanismo de armazenamento projetado para armazenamento de objetos e também oferece suporte ao armazenamento em disco local usando LMDB. O ArcticDB não requer infraestrutura adicional além de um ambiente Python em execução e acesso ao armazenamento de objetos e pode ser instalado em segundos. Encontre a documentação completa [aqui](https://docs.arcticdb.io/latest/).

#### Terminologia do ArcticDB

O ArcticDB é estruturado para fornecer uma maneira escalável e eficiente de gerenciar e recuperar DataFrames, organizados em vários componentes principais:

- Coleções de bibliotecas de `Object Store`. Usadas para separar ambientes lógicos uns dos outros. Análogo a um servidor de banco de dados.
- `Library` contém vários símbolos que são agrupados de uma certa maneira (diferentes usuários, mercados, etc.). Análogo a um banco de dados. Análogo a um banco de dados.
- `Symbol` Unidade atômica de armazenamento de dados. Identificado por um nome string. Dados armazenados sob um símbolo se assemelham muito a um DataFrame do pandas. Análogo a tabelas.
- `Version` Cada ação de modificação (escrever, anexar, atualizar) realizada em um símbolo cria uma nova versão desse objeto.

#### Instalação

Para instalar, simplesmente execute:

```console
pip install arcticdb
```

Para começar, podemos importar o ArcticDB e instanciá-lo:

```python
import arcticdb as adb
import numpy as np
import pandas as pd
# isso vai configurar o armazenamento usando o sistema de arquivos local
arctic = adb.Arctic("lmdb://arcticdb_test")
```

> **Observação:** o ArcticDB oferece suporte a qualquer armazenamento compatível com a API S3, incluindo AWS. O ArcticDB também oferece suporte ao armazenamento Azure Blob.\
> O ArcticDB também oferece suporte ao LMDB para armazenamento local/baseado em arquivo - para usar o LMDB, passe um caminho do LMDB como URI: adb.Arctic('lmdb://caminho/para/banco-de-dados/desejado').

#### Configuração da biblioteca

O ArcticDB é voltado para armazenar muitas (potencialmente milhões) tabelas. Tabelas individuais (DataFrames) são chamadas de símbolos e são armazenadas em coleções chamadas bibliotecas. Uma única biblioteca pode armazenar muitos símbolos. As bibliotecas devem ser inicializadas antes do uso:

```python
lib = arctic.get_library('sample', create_if_missing=True)
```

#### Escrevendo dados para ArcticDB

Agora que temos uma biblioteca configurada, podemos começar a ler e escrever dados. O ArcticDB tem um conjunto de funções simples para armazenamento de DataFrame. Vamos escrever um DataFrame para armazenamento.

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

Escreva para ArcticDB.

```python
write_record = lib.write("test", df)
```

> **Note:** Ao escrever DataFrames do pandas, o ArcticDB suporta os seguintes tipos de índice:
>
> - `pandas.Index` contendo int64 (ou os tipos dedicados correspondentes Int64Index, UInt64Index)
> - `RangeIndex`
> - `DatetimeIndex`
> - `MultiIndex` composto dos tipos suportados acima
>
> O conceito de "linha" em `head`/`tail` se refere ao número da linha ('iloc'), não ao valor no `pandas.Index` ('loc').

#### Lendo dados de ArcticDB

Leia os dados novamente do armazenamento:

```python
read_record = lib.read("test")
read_record.data
df.dtypes
```

O ArcticDB também suporta anexar, atualizar e consultar dados do armazenamento para um DataFrame do pandas. Encontre mais informações [aqui](https://docs.arcticdb.io/latest/api/query_builder/).

### [Hugging Face](https://huggingface.co/datasets)

O Hugging Face Dataset Hub fornece uma grande coleção de conjuntos de dados prontos para uso para aprendizado de máquina compartilhados pela comunidade. A plataforma oferece uma interface amigável para explorar, descobrir e visualizar conjuntos de dados, e fornece ferramentas para carregar e trabalhar facilmente com esses conjuntos de dados em Python graças à biblioteca [huggingface_hub](https://github.com/huggingface/huggingface_hub).

Você pode acessar conjuntos de dados no Hugging Face usando caminhos `hf://` em pandas, no formato `hf://datasets/username/nome_dataset/...`.

Por exemplo, aqui está como carregar o [conjunto de dados stanfordnlp/imdb](https://huggingface.co/datasets/stanfordnlp/imdb):

```python
import pandas as pd

# Carrega o conjunto de dados do IMDB
df = pd.read_parquet("hf://datasets/stanfordnlp/imdb/plain_text/train-00000-of-00001.parquet")
```

Dica: em uma página de conjunto de dados, clique em "Use this dataset" para obter o código para carregá-lo no pandas.

Para salvar um conjunto de dados no Hugging Face, você precisa [criar um conjunto de dados público ou privado](https://huggingface.co/new-dataset) e [fazer login](https://huggingface.co/docs/huggingface_hub/quick-start#login-command), e então você pode usar `df.to_csv/to_json/to_parquet`:

```python
# Salva o conjunto de dados para minha conta Hugging Face
df.to_parquet("hf://datasets/username/dataset_name/train.parquet")
```

Você pode encontrar mais informações sobre o Hugging Face Dataset Hub na [documentação](https://huggingface.co/docs/hub/en/datasets).

## Fora do núcleo

### [Bodo](https://bodo.ai/)

Bodo é um mecanismo de computação Python de alto desempenho que paraleliza e otimiza automaticamente seu código por meio de compilação usando técnicas de HPC (computação de alto desempenho).
Projetado para operar com dataframes nativos do Pandas, o Bodo compila seu código Pandas para executar em vários núcleos em uma única máquina ou clusters distribuídos de vários nós de computação de forma eficiente.
O Bodo também torna dataframes distribuídos do Pandas consultáveis ​​com SQL.

A edição comunitária do Bodo é gratuita para uso em até 8 núcleos. Além disso, o Bodo oferece uma edição empresarial paga. Licenças gratuitas do Bodo (para mais de 8 núcleos) estão disponíveis [mediante solicitação](https://www.bodo.ai/contact) para uso acadêmico e sem fins lucrativos.

### [Cylon](https://cylondata.org/)

Cylon é um tempo de execução paralelo de memória distribuído, rápido e escalável com uma API Python DataFrame semelhante à do pandas. O "Core Cylon" é implementado com C++ usando o formato Apache Arrow para representar os dados na memória. A API Cylon DataFrame implementa a maioria dos operadores principais do pandas, como merge, filter, join, concat, group-by, drop_duplicates, etc. Esses operadores são projetados para funcionar em milhares de núcleos para escalar aplicações. Ele pode interoperar com o DataFrame do pandas lendo dados do pandas ou convertendo dados para pandas para que os usuários possam escalar seletivamente partes de suas aplicações DataFrame do pandas.

```python
from pycylon import read_csv, DataFrame, CylonEnv
from pycylon.net import MPIConfig

# Inicializa um ambiente de desenvolvimento distribuído Cylon
config: MPIConfig = MPIConfig()
env: CylonEnv = CylonEnv(config=config, distributed=True)

df1: DataFrame = read_csv('/tmp/csv1.csv')
df2: DataFrame = read_csv('/tmp/csv2.csv')

# Usando milhares de núcleos ao longo do cluster para computar o seguinte join
df3: Table = df1.join(other=df2, on=[0], algorithm="hash", env=env)

print(df3)
```

### [Dask](https://docs.dask.org)

Dask é uma biblioteca de computação paralela flexível para análise. Dask fornece uma interface familiar de `DataFrame` para computação distribuída, fora de núcleo e paralel.

### [Dask-ML](https://ml.dask.org)

O Dask-ML permite o aprendizado de máquina paralelo e distribuído usando o Dask juntamente com bibliotecas de aprendizado de máquina existentes, como Scikit-Learn, XGBoost e TensorFlow.

### [Ibis](https://ibis-project.org/docs/)

O Ibis oferece uma maneira padrão de escrever código analítico, que pode ser executado em vários mecanismos. Ele ajuda a preencher a lacuna entre ambientes Python locais (como pandas) e sistemas de armazenamento e execução remotos, como componentes Hadoop (como HDFS, Impala, Hive, Spark) e bancos de dados SQL (Postgres, etc.).

### [Koalas](https://koalas.readthedocs.io/en/latest/)

Koalas fornece uma interface familiar de DataFrame pandas sobre o Apache Spark. Ela permite aos usuários alavancar múltiplos núcleos em uma máquina ou um cluster de máquinas para acelerar ou escalonar seu código com Dataframes.

### [Modin](https://github.com/modin-project/modin)

O DataFrame `modin.pandas` é um substituto paralelo e distribuído para o pandas. Isso significa que você pode usar o Modin com código pandas existente ou escrever novo código com a API do pandas. O Modin pode aproveitar toda a sua máquina ou cluster para acelerar e dimensionar suas cargas de trabalho pandas, incluindo tarefas tradicionalmente demoradas, como ingestão de dados (`read_csv`, `read_excel`, `read_parquet`, etc.).

```python
# import pandas as pd
import modin.pandas as pd

df = pd.read_csv("big.csv")  # utilize todos os seus núcleos!
```

### [Pandarallel](https://github.com/nalepae/pandarallel)

Pandarallel oferece uma maneira simples de paralelizar suas operações do pandas em todas as suas CPUs alterando apenas uma linha de código.
Ele também exibe barras de progresso.

```python
from pandarallel import pandarallel

pandarallel.initialize(progress_bar=True)

# df.apply(func)
df.parallel_apply(func)
```

### [Vaex](https://vaex.io/docs/)

Cada vez mais, os pacotes estão sendo construídos em cima do pandas para abordar
necessidades específicas na preparação de dados, análise e visualização. Vaex é uma biblioteca Python para DataFrames fora de núcleo (semelhante ao Pandas), destinada a visualizar e explorar grandes conjuntos de dados tabulares. Ele pode calcular estatísticas tais como média, soma, contagem, desvio padrão etc, em uma grade N-dimensional com até um bilhão (10^9) de objetos/linhas por segundo. A visualização é feita usando histogramas, plots de densidade e renderização de volume 3d, permitindo
exploração interativa em big data. O Vaex utiliza mapeamento de memória, uma política de cópia zero de memória e computações lazy para alcançar o melhor desempenho (sem desperdício de memória).

- `vaex.from_pandas`
- `vaex.to_pandas_df`

### [Hail Query](https://hail.is/)

Uma biblioteca de DataFrame distribuída, segura para a preempção e fora do núcleo, voltada para a comunidade genética. O Hail Query inclui formatos de dados em disco, formatos de dados em memória, um compilador de expressões, um planejador de consultas e um algoritmo de ordenação distribuída, todos projetados para acelerar consultas em grandes matrizes de dados de sequenciamento genômico.

Normalmente, é mais fácil usar o pandas para manipular as estatísticas resumidas ou outros agregados pequenos produzidos pelo Hail. Por essa razão, o Hail oferece importação e exportação nativas para DataFrames do pandas:

- [`Table.from_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.from_pandas)
- [`Table.to_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.to_pandas)

## Limpeza e validação de dados

### [pyjanitor](https://github.com/pyjanitor-devs/pyjanitor)

Pyjanitor fornece uma API limpa para limpar dados usando cadeia de métodos.

### [Pandera](https://pandera.readthedocs.io/en/stable/)

O Pandera provê uma API flexível e expressiva para executar validação de dados em dataframes
para tornar o processamento de pipelines mais legíveis e robustas.
Dataframes contêm informações que o pandera valida explicitamente em tempo de execução. Isso é útil em pipelines de dados críticos para produção ou em ambientes de pesquisa reproduzível.

## Extensões para tipos de dados

O pandas fornece uma interface para definir [extensões de tipos](https://pandas.pydata.org/docs/development/extending.html#extension-types) a fim de estender o sistema de tipos do NumPy.
As seguintes bibliotecas implementam essa interface para fornecer tipos não encontrados no NumPy ou pandas, que funcionam bem com contêineres de dados do pandas.

### [awkward-pandas](https://awkward-pandas.readthedocs.io/)

Awkward-pandas fornece uma extensão de tipo para armazenar Awkward
Arrays nas Séries e DataFrames pandas. Ele também oferece um acessador para usar funções do awkward em Series que são do tipo awkward.

### [db-dtypes](https://github.com/googleapis/python-db-dtypes-pandas)

db-dtypes fornece extensão de tipos para trabalhar com tipos como DATE, TIME, e JSON de sistemas de banco de dados. Este pacote é usado pelo pandas-gbq para fornecer dtypes naturais para os tipos de dados BigQuery sem
um tipo natural do numpy.

### [Pandas-Genomics](https://pandas-genomics.readthedocs.io/en/latest/)

Pandas-Genomics oferece extensões de tipos e de matrizes para trabalhar com dados genômicos.  Ele também inclui acessadores `genomicas` para muitas propriedades úteis e métodos relacionados com o QC e análise de dados genômicos.

### [Physipandas](https://github.com/mocquin/physipandas)

Physipandas fornece uma extensão para a manipulação de quantidades físicas
(como escalares e numpy. darray) em associação com uma unidade física
(como metro ou joule) e recursos adicionais para integração de acessadores
`physipy` com Series e Dataframes pandas.

### [Pint-Pandas](https://github.com/hgrecco/pint-pandas)

Pint-Pandas fornece uma extensão de tipo para armazenar matrizes numéricas com unidades.
Estas arrays podem ser armazenadas dentro de Séries e DataFrames pandas. Operações entre colunas de Series e DataFrames que utilizam a extensão de array do pint tem suporte à unidades.

### [Text Extensions](https://ibm.biz/text-extensions-for-pandas)

O Text Extensions para Pandas fornece extensão de tipos para cobrir estruturas de dados comuns usadas na representação de dados de linguagem natural, além de integrações com bibliotecas que convertem as saídas de bibliotecas populares de processamento de linguagem natural em DataFrames do Pandas.

## Acessadores

Um diretório de projetos fornecendo
[extensões de acessadores](https://pandas.pydata.org/docs/development/extending.html#registering-custom-accessors).
Isso serve para que os usuários possam descobrir novos acessadores e para que os autores de bibliotecas possam coordenar o uso do namespace.

| Biblioteca                                                           | Acessador  | Classes               |
| -------------------------------------------------------------------- | ---------- | --------------------- |
| [awkward-pandas](https://awkward-pandas.readthedocs.io/en/latest/)   | `ak`       | `Séries`              |
| [pdvega](https://altair-viz.github.io/pdvega/)                       | `vgplot`   | `Series`, `DataFrame` |
| [pandas-genomics](https://pandas-genomics.readthedocs.io/en/latest/) | `genomics` | `Series`, `DataFrame` |
| [pint-pandas](https://github.com/hgrecco/pint-pandas)                | `pint`     | `Series`, `DataFrame` |
| [physipandas](https://github.com/mocquin/physipandas)                | `physipy`  | `Series`, `DataFrame` |
| [composeml](https://github.com/alteryx/compose)                      | `slice`    | `DataFrame`           |
| [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)         | `gppd`     | `Series`, `DataFrame` |
| [staircase](https://www.staircase.dev/)                              | `sc`       | `Series`, `DataFrame` |
| [woodwork](https://github.com/alteryx/woodwork)                      | `slice`    | `Series`, `DataFrame` |

## Ferramentas de desenvolvimento

### [pandas-stubs](https://github.com/VirtusLab/pandas-stubs)

Embora o repositório do pandas seja parcialmente tipado, o pacote em si não expõe essas informações para uso externo.
Instale o pandas-stubs para habilitar uma cobertura básica de tipagem na API do pandas.

Saiba mais lendo estas issues: [14468](https://github.com/pandas-dev/pandas/issues/14468),
[26766](https://github.com/pandas-dev/pandas/issues/26766), [28142](https://github.com/pandas-dev/pandas/issues/28142).

Veja as instruções de instalação e de uso na [página do GitHub](https://github.com/VirtusLab/pandas-stubs).

### [Hamilton](https://github.com/dagworks-inc/hamilton)

Hamilton é um framework declarativo de fluxo de dados criado pela Stitch Fix. Ele foi projetado para ajudar a gerenciar uma base de código Pandas, especificamente no que diz respeito à engenharia de features para modelos de aprendizado de máquina.

Ele prescreve um paradigma opinativo que garante todo o código é:

- testável de forma unitária
- amigável para testes de integração
- fácil de documentar
- reutilizável em sua lógica de transformação, pois é desacoplada do contexto da qual é utilizada
- integrável com verificações de qualidade de dados em tempo de execução

Isso ajuda a escalar sua base de código em pandas, ao mesmo tempo em que mantém os custos de manutenção baixos.

Para mais informações, consulte a [documentação](https://hamilton.readthedocs.io/).
