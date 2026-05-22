# 생태계

데이터 준비, 분석, 시각화 등 특정한 요구를 다루기 위해
pandas 위에 만들어지는 패키지가 점점 늘어나고 있습니다. 이는
고무적인 현상입니다. pandas가 사용자들이 데이터 작업을 다루는 데 도움이 될 뿐 아니라,
개발자들이 강력하고 더 집중된 데이터 도구를 만들기 위한
더 나은 출발점도 제공한다는 뜻이기 때문입니다. pandas의 기능을 보완하는 라이브러리들이 만들어짐으로써,
pandas 개발은 본래의 요구 사항에 집중한 상태를 유지할 수
있습니다.

이는 PyData 영역에서 도구를 제공하기 위해 pandas 위에 만들어진 프로젝트들의,
커뮤니티가 관리하는 목록입니다. pandas 코어 개발팀이 이 목록의 특정 프로젝트를 반드시 추천한다는 의미는 아니며, 특정 라이브러리의 유지보수 상태에 대해 알고 있다는 의미도 아닙니다.

pandas에 의존하는 프로젝트의 더 완전한 목록은,
[libraries.io pandas 사용 페이지](https://libraries.io/pypi/pandas/usage)나
[PyPI에서 pandas 검색](https://pypi.org/search/?q=pandas)을 참고해 주십시오.

사용자들이 이러한 프로젝트를 더 쉽게 찾을 수 있도록 하고 싶습니다.
이 목록에 들어가야 한다고 생각하시는 다른 의미 있는 프로젝트를 알고 계신다면,
알려 주시기 바랍니다.

## 통계와 머신러닝

### [Statsmodels](https://www.statsmodels.org/)

Statsmodels는 파이썬의 대표적인 "통계 및 계량경제학
라이브러리"이며, pandas와 오랫동안 특별한 관계를 유지해 왔습니다.
Statsmodels는 pandas의 범위 밖에 있는 강력한 통계, 계량경제학, 분석,
모델링 기능을 제공합니다. Statsmodels는
계산을 위한 기본 데이터 컨테이너로 pandas 객체를
활용합니다.

### [skrub](https://skrub-data.org)

Skrub은 데이터프레임에서의 머신러닝을 돕습니다. pandas와
scikit-learn 및 관련 라이브러리를 연결해 줍니다. 특히 데이터프레임에서
특성을 만드는 작업을 돕습니다.

### [Featuretools](https://github.com/alteryx/featuretools/)

Featuretools는 pandas 위에 만들어진 자동 특성 공학을 위한
파이썬 라이브러리입니다. 재사용 가능한 특성 공학 "프리미티브"를 사용하여
시간적·관계적 데이터셋을 머신러닝용 특성 행렬로 변환하는 데
특히 뛰어납니다. 사용자는 본인의
프리미티브를 파이썬으로 기여하고 다른 커뮤니티 구성원들과 공유할 수 있습니다.

### [Compose](https://github.com/alteryx/compose)

Compose는 데이터 라벨링과 예측 공학을 위한 머신러닝 도구입니다.
예측 문제를 매개변수화하고, 시간 기반 관계형 데이터를
지도 학습에 사용할 수 있는 컷오프 시간과 함께 목표 값으로 변환함으로써
라벨링 과정을 구조화할 수 있게 해 줍니다.

### [STUMPY](https://github.com/TDAmeritrade/stumpy)

STUMPY는 현대 시계열 분석을 위한 강력하고 확장 가능한 파이썬 라이브러리입니다.
STUMPY는 핵심적으로
[행렬 프로파일(matrix profile)](https://stumpy.readthedocs.io/en/latest/Tutorial_The_Matrix_Profile.html)이라는 것을 효율적으로 계산하며,
이는 다양한 시계열 데이터 마이닝 작업에 사용할 수 있습니다.

## 시각화

### [Altair](https://altair-viz.github.io/)

Altair는 파이썬용 선언형 통계 시각화 라이브러리입니다.
Altair를 사용하시면, 데이터와 그 의미를 이해하는 데
더 많은 시간을 쓸 수 있습니다. Altair의 API는 단순하고 친근하며 일관성이 있고,
강력한 Vega-Lite JSON 명세 위에 구축되어 있습니다. 이 우아한
단순함은 최소한의 코드로 아름답고 효과적인 시각화를
만들어 냅니다. Altair는 pandas DataFrame과 함께 동작합니다.

### [Bokeh](https://docs.bokeh.org)

Bokeh는 대용량 데이터셋을 위한 파이썬 대화형 시각화 라이브러리로,
최신 웹 기술을 기본적으로 사용합니다. Bokeh의 목표는 Protovis/D3 스타일의 새로운 그래픽을
우아하고 간결한 방식으로 구성하면서, 대용량 데이터에 대한 고성능
인터랙티브 기능을 가벼운 클라이언트에 제공하는 것입니다.

[Pandas-Bokeh](https://github.com/PatrikHlobil/Pandas-Bokeh)는 Bokeh에 대한 고수준 API를 제공하며,
Pandas의 기본 플로팅 백엔드로 다음과 같이 로드할 수
있습니다

```
pd.set_option("plotting.backend", "pandas_bokeh")
```

matplotlib 플로팅 백엔드와 매우 유사하지만,
대화형 웹 기반 차트와 지도를 제공합니다.

### [pygwalker](https://github.com/Kanaries/pygwalker)

PyGWalker는 Graphic Walker 위에 만들어진 대화형 데이터 시각화 및
탐색적 데이터 분석 도구로,
시각화, 정제, 주석 작업 흐름을 지원합니다.

pygwalker는 대화형으로 만들어진 차트를
Graphic-Walker와 Vega-Lite JSON으로 저장할 수 있습니다.

```
import pygwalker as pyg
pyg.walk(df)
```

### [seaborn](https://seaborn.pydata.org)

Seaborn은 [matplotlib](https://matplotlib.org)을 기반으로 한
파이썬 시각화 라이브러리입니다. 매력적인 통계 그래픽을 만들기 위한,
고수준의 데이터셋 지향 인터페이스를 제공합니다.
seaborn의 플로팅 함수들은 pandas 객체를 이해하며, 내부적으로
pandas의 그룹화 연산을 활용하여 복잡한 시각화를
간결하게 지정할 수 있도록 지원합니다. Seaborn은 matplotlib 및
pandas 그 이상으로, 플로팅 중에 통계적 추정을 수행하고,
관측값을 가로질러 집계하며, 데이터셋의 패턴을 강조하기 위해
통계 모델의 적합도를 시각화하는 옵션도 제공합니다.

```
import seaborn as sns
sns.set_theme()
```

### [plotnine](https://github.com/has2k1/plotnine/)

Hadley Wickham의 [ggplot2](https://ggplot2.tidyverse.org/)는
R 언어를 위한 기초적인 탐색적 시각화 패키지입니다. "The Grammar of
Graphics"를 기반으로 하며,
강력하고 선언형이며 매우 일반적인 방식으로
어떤 종류의 데이터에 대해서도 맞춤형 플롯을 생성할 수 있게 해 줍니다.
다른 언어로의 다양한 구현이 제공됩니다.
파이썬 사용자들을 위한 좋은 구현으로는 [has2k1/plotnine](https://github.com/has2k1/plotnine/)이 있습니다.

### [IPython Vega](https://github.com/vega/ipyvega)

[IPython Vega](https://github.com/vega/ipyvega)는 [Vega](https://github.com/vega/vega)를 활용하여 Jupyter Notebook 안에서 플롯을 만듭니다.

### [Plotly](https://plot.ly/python)

[Plotly](https://plot.ly/)의 [파이썬 API](https://plot.ly/python/)는
대화형 그림과 웹 공유 기능을 제공합니다. 지도, 2D, 3D,
실시간 스트리밍 그래프가 WebGL과
[D3.js](https://d3js.org/)로 렌더링됩니다. 이 라이브러리는 pandas DataFrame에서 직접 플로팅과
클라우드 기반 협업을 지원합니다. matplotlib,
ggplot for Python, Seaborn 사용자들은
그림을 대화형 웹 기반 플롯으로 변환할 수 있습니다. 플롯은
[IPython Notebook](https://plot.ly/ipython-notebooks/)에서 그리고, R이나
MATLAB으로 편집하고, GUI에서 수정하거나, 앱과 대시보드에 임베드할 수 있습니다. Plotly는 무제한 공유에 대해 무료이며,
개인 사용을 위한 클라우드, 오프라인, 온프레미스 계정을 제공합니다.

### [Lux](https://github.com/lux-org/lux)

Lux는 시각적 데이터 탐색 과정을 자동화하여 데이터로 빠르고 쉽게 실험할 수 있도록 돕는 파이썬 라이브러리입니다. Lux를 사용하시려면, pandas와 함께 import 한 줄을 추가하시면 됩니다:

```python
import lux
import pandas as pd

df = pd.read_csv("data.csv")
df  # discover interesting insights!
```

데이터프레임을 출력하시면, Lux가 [추천 시각화 모음](https://raw.githubusercontent.com/lux-org/lux-resources/master/readme_img/demohighlight.gif)을 자동으로 제안하여, 데이터프레임의 흥미로운 추세와 패턴을 강조합니다. 사용자는 본인의 코드를 수정하지 않고 기존 pandas 명령을 그대로 활용하면서, 동시에 pandas의 자료 구조(예: DataFrame, Series, Index)를 시각화할 수 있습니다. Lux는 또한 [강력하고 직관적인 언어](https://lux-api.readthedocs.io/en/latest/source/guide/vis.html)를 제공하여, 사용자가 코드 수준에서 생각할 필요 없이 Altair, matplotlib, Vega-Lite 시각화를 만들 수 있게 해 줍니다.

### [D-Tale](https://github.com/man-group/dtale)

D-Tale은 pandas 자료 구조를 시각화하기 위한 가벼운 웹 클라이언트입니다. 풍부한 스프레드시트 스타일의 그리드를 제공하며, 이는
많은 pandas 기능(query, sort, describe, corr...)에 대한 래퍼 역할을 합니다. 덕분에 사용자는
데이터를 빠르게 다룰 수 있습니다. Plotly Dash를 사용한 대화형 차트 빌더도 있어,
사용자가 깔끔하고 휴대 가능한 시각화를 만들 수 있습니다. D-Tale은
다음 명령으로 호출할 수 있습니다

```python
import dtale

dtale.show(df)
```

D-Tale은 Jupyter 노트북, 파이썬 터미널, Kaggle,
Google Colab과 매끄럽게 통합됩니다. [그리드](http://alphatechadmin.pythonanywhere.com/dtale/main/1)에 대한 몇 가지 데모를 확인하실 수 있습니다.

### [hvplot](https://hvplot.holoviz.org/index.html)

hvPlot은 [HoloViews](https://holoviews.org/) 위에 만들어진 PyData 생태계용 고수준 플로팅 API입니다.
다음과 같이 pandas의 기본 플로팅 백엔드로 로드할 수 있습니다

```python
pd.set_option("plotting.backend", "hvplot")
```

## IDE

### [IPython](https://ipython.org/documentation.html)

IPython은 대화형 명령 셸 및 분산 계산
환경입니다. IPython의 탭 자동 완성은 pandas 메서드뿐 아니라
DataFrame 컬럼 같은 속성에서도 동작합니다.

### [Jupyter Notebook / Jupyter Lab](https://jupyter.org)

Jupyter Notebook은 Jupyter 노트북을 만들기 위한 웹 애플리케이션입니다. Jupyter 노트북은
코드, 텍스트, 수식, 플롯, 리치 미디어를 담을 수 있는 입력/출력 셀의
순서 있는 목록을 포함하는 JSON 문서입니다. Jupyter 노트북은 웹 인터페이스의 'Download As' 메뉴와 셸의 `jupyter convert` 명령을 통해
여러 가지 열린 표준 출력 형식(HTML, HTML 발표 슬라이드, LaTeX, PDF,
ReStructuredText, Markdown, Python)으로 변환할 수
있습니다.

pandas DataFrame은 `_repr_html_`과 `_repr_latex` 메서드를 구현하고 있으며,
Jupyter Notebook이 이를 활용하여 (축약된) HTML 또는
LaTeX 표를 표시합니다. LaTeX 출력은 적절하게 이스케이프됩니다. (참고: HTML 표는
HTML이 아닌 Jupyter 출력 형식과 호환될 수도 있고 아닐 수도 있습니다.)

pandas의 `display.` 설정에 대해서는
[옵션과 설정](https://pandas.pydata.org/docs/user_guide/options.html)을 참고해 주십시오.

### [Spyder](https://www.spyder-ide.org/)

Spyder는 크로스 플랫폼 PyQt 기반 IDE로,
소프트웨어 개발 도구의 편집, 분석, 디버깅, 프로파일링
기능과,
MATLAB이나 RStudio 같은 과학 환경의 데이터 탐색, 대화형 실행, 심층
검사, 풍부한 시각화 기능을 결합한 것입니다.

Spyder의 변수
탐색기는
사용자가 pandas의 `Index`, `Series`, `DataFrame` 객체를 "스프레드시트"처럼
보고 다루고 편집할 수 있게 해 줍니다.
값 복사 및 수정, 정렬, "히트맵" 표시, 자료형
변환 등이 포함됩니다. pandas 객체의 이름을 바꾸거나, 복제하거나, 새
컬럼을 추가하거나, 클립보드와 (TSV로) 복사/붙여넣기를 하거나, 파일에서
저장/로드할 수도 있습니다. Spyder는 또한
정교한 가져오기 마법사를 통해, 다양한 일반 텍스트 및 바이너리 파일이나 클립보드의 데이터를
새 pandas DataFrame으로 가져올 수 있습니다.

대부분의 pandas 클래스, 메서드, 데이터 속성은
Spyder의 [편집기](https://docs.spyder-ide.org/current/panes/editor.html)와 IPython
콘솔에서 자동 완성이 가능하고,
Spyder의
[도움말 패널](https://docs.spyder-ide.org/current/panes/help.html)은 Sphinx와 함께 pandas 객체의 Numpydoc 문서를
자동 또는 요청 시점에 풍부한 텍스트로 가져와 표시할 수 있습니다.

### [marimo](https://marimo.io)

marimo는 데이터프레임을 다룰 때 생산성을 높이는, 파이썬 및 SQL을 위한 반응형 노트북입니다. 데이터 조작과 시각화를 더 대화형이고 재미있게 만들기 위해 다음과 같은 기능을 제공합니다:

1. 풍부한 대화형 표시: marimo는 pandas 데이터프레임을 필터링과 정렬이 가능한 대화형 표나 차트로 표시할 수 있습니다.
2. 데이터 선택: 사용자는 표나 pandas 기반 플롯에서 데이터를 선택할 수 있으며, 선택된 내용은 자동으로 pandas 데이터프레임으로 파이썬에 전달됩니다.
3. 노코드 변환: 사용자는 코드를 작성하지 않고도 GUI를 사용하여 pandas 데이터프레임을 대화형으로 변환할 수 있습니다. 생성된 코드는 노트북에 복사·붙여넣기 할 수 있습니다.
4. 사용자 정의 필터: marimo는 슬라이더, 드롭다운 같은 UI 요소를 사용하여 pandas 기반 필터를 만들 수 있게 해 줍니다.
5. 데이터셋 탐색기: marimo는 노트북에 있는 모든 데이터프레임을 자동으로 발견하고 표시하여, 사용자가 데이터를 대화형으로 탐색·시각화할 수 있게 해 줍니다.
6. SQL 통합: marimo는 메모리에 존재하는 어떤 pandas 데이터프레임에 대해서도 SQL 쿼리를 작성할 수 있게 해 줍니다.

## API

### [pandas-datareader](https://github.com/pydata/pandas-datareader)

`pandas-datareader`는 pandas를 위한 원격 데이터 액세스 라이브러리입니다
(PyPI: `pandas-datareader`). 이전에는
`pandas.io.data`와 `pandas.io.wb`에 있었던 기능을 기반으로 하며,
v0.19에서 분리되었습니다. 자세한 사항은 pandas-datareader
문서를 참고해 주십시오:

다음 데이터 피드를 사용하실 수 있습니다:

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

pandaSDMX는 [SDMX](https://sdmx.org) 2.1로 배포되는 통계 데이터와
메타데이터를 가져오고 획득하기 위한 라이브러리입니다.
SDMX는 통계청, 중앙은행, 국제기구 등에서
널리 사용되는 ISO 표준입니다. pandaSDMX는
데이터 흐름, 코드 리스트, 자료 구조 정의를 포함한 데이터셋과 관련 구조 메타데이터를
pandas Series 또는 MultiIndex DataFrame으로 노출할 수 있습니다.

### [fredapi](https://github.com/mortada/fredapi)

fredapi는 세인트루이스 연방준비은행이 제공하는
Federal Reserve Economic Data
(FRED)에 대한 파이썬 인터페이스입니다. FRED 데이터베이스뿐 아니라, 시점별 데이터(즉, 과거 데이터
개정)를 포함하는 ALFRED 데이터베이스와도
함께 동작합니다. fredapi는 FRED HTTP API에 대한 파이썬 래퍼를 제공하며,
ALFRED의 시점별 데이터를 파싱하고 분석하기 위한
몇 가지 편리한 메서드도 제공합니다. fredapi는 pandas를 활용하며,
데이터를 Series 또는 DataFrame으로 반환합니다. 이 모듈은 FRED API 키가 필요한데, FRED 웹사이트에서 무료로
발급받으실 수 있습니다.

## 도메인 특화

### [Geopandas](https://github.com/geopandas/geopandas)

Geopandas는 pandas의 데이터 객체에 기하 연산을 지원하는
지리 정보를 추가하여 확장합니다. 지도와
지리 좌표를 다루는 일을 하시고 pandas를 좋아하신다면, Geopandas를
자세히 살펴보시는 것을 권합니다.

### [gurobipy-pandas](https://github.com/Gurobi/gurobipy-pandas)

gurobipy-pandas는 pandas와 gurobipy를 연결하기 위한 편리한
액세서 API를 제공합니다. DataFrame과 Series에 저장된 데이터로부터 수학적
최적화 모델을 더 쉽고 효율적으로 만들고, 해(solution)를
pandas 객체로 직접 다시 읽어 들일 수 있게 해 줍니다.

### [staircase](https://github.com/staircase-dev/staircase)

staircase는 pandas와 numpy 위에 만들어진 데이터 분석 패키지로,
수학적 계단 함수의 모델링과 조작을 위한 것입니다. 실수, datetime, timedelta 영역에 정의된 계단 함수에 대해
다양한 산술 연산, 관계 연산, 논리 연산, 통계 연산,
집계를 풍부하게 제공합니다.

### [xarray](https://github.com/pydata/xarray)

xarray는 핵심 pandas 자료 구조의 N차원 변형을 제공하여,
pandas의 라벨링된 데이터 강점을 자연과학 영역으로 가져옵니다.
pandas가 특히 뛰어난 표 형식 데이터가 아니라
다차원 배열 분석을 위한, pandas와 비슷하고 pandas와 호환되는
도구 모음을 제공하는 것을 목표로 합니다.

## IO

### [NTV-pandas](https://github.com/loco-philippe/ntv-pandas)

NTV-pandas는 pandas가 직접 지원하는 것보다 더 많은 자료형을 다룰 수 있는 JSON 변환기를 제공합니다.

다음 자료형을 지원합니다:

- pandas 자료형
- [NTV format](https://loco-philippe.github.io/ES/JSON%20semantic%20format%20(JSON-NTV).htm)에 정의된 자료형
- [Table Schema 명세](https://datapackage.org/standard/table-schema/)에 정의된 자료형

인터페이스는 두 형식(JSON-NTV와 JSON-TableSchema)에 대해 항상 가역적입니다 (변환 왕복 가능).

예시:

```python
import ntv_pandas as npd

jsn = df.npd.to_json(table=False)  # save df as a JSON-value (format Table Schema if table is True else format NTV )
df  = npd.read_json(jsn)  # load a JSON-value as a `DataFrame`

df.equals(npd.read_json(df.npd.to_json(df)))  # `True` in any case, whether `table=True` or not
```

### [BCPandas](https://github.com/yehoshuadimarsky/bcpandas)

BCPandas는 pandas에서 Microsoft SQL Server로의 고성능 쓰기 기능을 제공하며,
기본 `df.to_sql` 메서드의 성능을 크게 뛰어넘습니다. 내부적으로는
Microsoft의 BCP 유틸리티를 사용하지만, 복잡성은 최종 사용자로부터 완전히 추상화되어 있습니다.
엄격하게 테스트되어, `df.to_sql`의 완전한 대체재로 사용하실 수 있습니다.

### [Deltalake](https://pypi.org/project/deltalake)

Deltalake 파이썬 패키지를 사용하시면 Spark나 JVM 없이도 파이썬에서
[Delta Lake](https://delta.io/)에 저장된 테이블에 기본적으로
접근하실 수 있습니다. `delta_table.to_pyarrow_table().to_pandas()` 메서드를 제공하여
Delta 테이블을 pandas 데이터프레임으로 변환할 수 있습니다.

### [pandas-gbq](https://github.com/googleapis/python-bigquery-pandas)

pandas-gbq는
[Google BigQuery](https://cloud.google.com/bigquery/)와의 고성능 읽기·쓰기 기능을 제공합니다. 이전에는 (2.2.0 버전 이전),
이 메서드들이 `pandas.read_gbq`와 `DataFrame.to_gbq`로 노출되어 있었습니다.
대신 `pandas_gbq.read_gbq`와 `pandas_gbq.to_gbq`를 사용해 주십시오.

### [ArcticDB](https://github.com/man-group/ArcticDB)

ArcticDB는 파이썬 데이터 과학 생태계를 위해 설계된 서버리스 DataFrame 데이터베이스 엔진입니다. ArcticDB를 사용하시면 pandas DataFrame을 대규모로 저장, 검색, 처리할 수 있습니다. 객체 저장소를 위해 설계된 저장 엔진이며, LMDB를 사용한 로컬 디스크 저장도 지원합니다. ArcticDB는 실행 중인 파이썬 환경과 객체 저장소 접근 외에 추가 인프라가 전혀 필요하지 않으며, 몇 초 만에 설치하실 수 있습니다. 전체 문서는 [여기](https://docs.arcticdb.io/latest/)에서 확인하실 수 있습니다.

#### ArcticDB 용어

ArcticDB는 DataFrame을 확장 가능하고 효율적으로 관리·검색할 수 있도록 구조화되어 있으며, 다음과 같은 주요 구성 요소로 나뉩니다:

- `Object Store` 라이브러리의 모음입니다. 논리적 환경들을 서로 분리하는 데 사용합니다. 데이터베이스 서버에 해당합니다.
- `Library` 특정 방식으로(다른 사용자, 시장 등) 그룹화된 여러 심볼을 포함합니다. 데이터베이스에 해당합니다.
- `Symbol` 데이터 저장의 원자적 단위입니다. 문자열 이름으로 식별됩니다. 심볼 아래에 저장된 데이터는 pandas DataFrame과 매우 유사합니다. 테이블에 해당합니다.
- `Version` 심볼에 대한 모든 수정 작업(쓰기, 추가, 갱신)은 해당 객체의 새 버전을 생성합니다.

#### 설치

설치하시려면 다음을 실행해 주십시오:

```console
pip install arcticdb
```

시작하기 위해, ArcticDB를 import 하고 인스턴스를 만들 수 있습니다:

```python
import arcticdb as adb
import numpy as np
import pandas as pd
# this will set up the storage using the local file system
arctic = adb.Arctic("lmdb://arcticdb_test")
```

> **참고:** ArcticDB는 AWS를 포함하여 S3 API와 호환되는 모든 저장소를 지원합니다. ArcticDB는 Azure Blob 저장소도 지원합니다.  
> ArcticDB는 로컬·파일 기반 저장을 위한 LMDB도 지원합니다. LMDB를 사용하시려면 LMDB 경로를 URI로 전달하시면 됩니다: `adb.Arctic('lmdb://path/to/desired/database')`.

#### 라이브러리 설정

ArcticDB는 (잠재적으로 수백만 개의) 많은 테이블을 저장하는 데 적합합니다. 개별 테이블(DataFrame)은 심볼이라 부르며, 라이브러리라는 모음에 저장됩니다. 하나의 라이브러리는 많은 심볼을 저장할 수 있습니다. 라이브러리는 사용에 앞서 먼저 초기화해야 합니다:

```python
lib = arctic.get_library('sample', create_if_missing=True)
```

#### ArcticDB에 데이터 쓰기

이제 라이브러리가 설정되었으므로, 데이터를 읽고 쓰는 작업을 시작할 수 있습니다. ArcticDB는 DataFrame 저장을 위한 간단한 함수 모음을 제공합니다. DataFrame을 저장소에 써 보겠습니다.

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

ArcticDB에 쓰기.

```python
write_record = lib.write("test", df)
```

> **참고:** pandas DataFrame을 쓸 때, ArcticDB는 다음 인덱스 자료형을 지원합니다:
>
> - int64를 포함하는 `pandas.Index` (또는 해당 전용 자료형인 Int64Index, UInt64Index)
> - `RangeIndex`
> - `DatetimeIndex`
> - 위에서 지원하는 자료형들로 구성된 `MultiIndex`
>
> `head`/`tail`의 "행" 개념은 `pandas.Index`의 값('loc')이 아니라 행 번호('iloc')를 가리킵니다.

#### ArcticDB에서 데이터 읽기

저장소에서 데이터를 다시 읽어 옵니다:

```python
read_record = lib.read("test")
read_record.data
df.dtypes
```

ArcticDB는 저장소의 데이터를 추가, 갱신하거나 pandas DataFrame으로 쿼리하는 기능도 지원합니다. 자세한 내용은 [여기](https://docs.arcticdb.io/latest/api/processing/#arcticdb.QueryBuilder)에서 확인하실 수 있습니다.

### [Hugging Face](https://huggingface.co/datasets)

Hugging Face Dataset Hub는 커뮤니티가 공유한 머신러닝용 즉시 사용 가능 데이터셋의 대규모 모음을 제공합니다. 이 플랫폼은 데이터셋을 탐색, 발견, 시각화할 수 있는 사용자 친화적 인터페이스를 제공하며, [huggingface_hub](https://github.com/huggingface/huggingface_hub) 라이브러리 덕분에 파이썬에서 이 데이터셋들을 쉽게 로드하고 다룰 수 있는 도구도 제공합니다.

pandas에서 `hf://` 경로를 사용하여 Hugging Face의 데이터셋에 접근하실 수 있습니다. 형식은 `hf://datasets/username/dataset_name/...`입니다.

예를 들어, [stanfordnlp/imdb 데이터셋](https://huggingface.co/datasets/stanfordnlp/imdb)을 로드하는 방법은 다음과 같습니다:

```python
import pandas as pd

# Load the IMDB dataset
df = pd.read_parquet("hf://datasets/stanfordnlp/imdb/plain_text/train-00000-of-00001.parquet")
```

팁: 데이터셋 페이지에서 "Use this dataset"을 클릭하시면 pandas에서 로드하는 코드를 받으실 수 있습니다.

Hugging Face에 데이터셋을 저장하시려면 [공개 또는 비공개 데이터셋을 생성](https://huggingface.co/new-dataset)하고 [로그인](https://huggingface.co/docs/huggingface_hub/quick-start#login-command)하신 뒤, `df.to_csv/to_json/to_parquet`을 사용하실 수 있습니다:

```python
# Save the dataset to my Hugging Face account
df.to_parquet("hf://datasets/username/dataset_name/train.parquet")
```

Hugging Face Dataset Hub에 대한 자세한 정보는 [문서](https://huggingface.co/docs/hub/en/datasets)에서 확인하실 수 있습니다.

## 메모리 외 (Out-of-core)

### [Bodo](https://github.com/bodo-ai/Bodo)

Bodo는 파이썬 데이터 처리를 위한 고성능 계산 엔진입니다.
자동 병렬화 JIT 컴파일러를 사용하여, Bodo는 큰 코드 변경 없이도
pandas 작업을 노트북에서 클러스터로 확장하는 것을 단순화합니다.
내부적으로 Bodo는 MPI 기반 고성능 컴퓨팅(HPC) 기술에 의존하며, 이를 통해
사용이 더 쉬우면서 대안보다 훨씬 더 빠른 경우가 많습니다.
Bodo는 분산 pandas 데이터프레임을 효율적으로 쿼리할 수 있는 SQL 엔진도 제공합니다.

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

Cylon은 pandas와 유사한 파이썬 DataFrame API를 가진,
빠르고 확장 가능한 분산 메모리 병렬 런타임입니다. "Core Cylon"은
메모리 내 데이터 표현을 위해 Apache Arrow 형식을 사용하여 C++로
구현되었습니다. Cylon DataFrame API는
pandas의 주요 연산자 대부분 (merge, filter, join, concat,
group-by, drop_duplicates 등)을 구현합니다. 이 연산자들은
애플리케이션을 확장할 수 있도록 수천 개의 코어에 걸쳐 동작하도록
설계되었습니다. Cylon은 pandas에서 데이터를 읽거나 데이터를 pandas로 변환함으로써
pandas DataFrame과 상호 운용될 수 있으며, 사용자는
pandas DataFrame 애플리케이션의 일부를 선택적으로 확장할 수 있습니다.

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

Dask는 분석을 위한 유연한 병렬 계산 라이브러리입니다. Dask는
메모리 외, 병렬, 분산 계산을 위한 익숙한 `DataFrame` 인터페이스를
제공합니다.

### [Dask-ML](https://ml.dask.org)

Dask-ML은 Scikit-Learn, XGBoost, TensorFlow 같은
기존 머신러닝 라이브러리와 함께 Dask를 사용하여 병렬·분산
머신러닝을 가능하게 합니다.

### [Ibis](https://ibis-project.org/docs/)

Ibis는 여러 엔진에서 실행할 수 있는 분석 코드를 작성하는 표준적인 방법을 제공합니다. Ibis는 로컬 파이썬 환경(pandas 등)과 Hadoop 컴포넌트(HDFS, Impala, Hive, Spark 등) 같은 원격 저장소 및 실행 시스템, SQL 데이터베이스(Postgres 등) 사이의 간극을 메우는 데 도움을 줍니다.

### [Koalas](https://koalas.readthedocs.io/en/latest/)

Koalas는 Apache Spark 위에 친숙한 pandas DataFrame 인터페이스를
제공합니다. 사용자가 한 머신의 여러 코어나 머신 클러스터를 활용하여
DataFrame 코드의 속도를 높이거나 규모를 확장할 수 있게 해 줍니다.

### [Modin](https://github.com/modin-project/modin)

`modin.pandas` DataFrame은 pandas의 병렬·분산 드롭인
대체재입니다. 즉, Modin을 기존 pandas 코드와 함께 사용하실 수도 있고,
기존 pandas API로 새 코드를 작성하실 수도 있습니다. Modin은 전체 머신이나
클러스터를 활용하여, 전통적으로 시간이 많이 걸리는 데이터 수집 작업(`read_csv`, `read_excel`,
`read_parquet` 등)을 포함한 pandas 작업의 속도와 규모를 확장할 수 있습니다.

```python
# import pandas as pd
import modin.pandas as pd

df = pd.read_csv("big.csv")  # use all your cores!
```

### [Pandarallel](https://github.com/nalepae/pandarallel)

Pandarallel은 코드 한 줄만 변경하여 모든 CPU에서 pandas 연산을 병렬화하는 간단한 방법을 제공합니다.
진행률 표시줄도 함께 보여줍니다.

```python
from pandarallel import pandarallel

pandarallel.initialize(progress_bar=True)

# df.apply(func)
df.parallel_apply(func)
```

### [Vaex](https://vaex.io/docs/)

데이터 준비, 분석, 시각화 등 특정한 요구를 다루기 위해
pandas 위에 만들어지는 패키지가 점점 늘어나고 있습니다. Vaex는 메모리 외(Out-of-Core) DataFrame(Pandas와 유사)을 위한
파이썬 라이브러리로, 크고 표 형식의 데이터셋을 시각화하고 탐색하는 데 사용합니다. N차원 그리드에서 평균,
합, 개수, 표준편차 등의 통계량을 초당 최대 10억(10^9)개의 객체/행에 대해
계산할 수 있습니다. 시각화는
히스토그램, 밀도 플롯, 3D 볼륨 렌더링을 사용하며,
빅데이터의 대화형 탐색을 가능하게 합니다. Vaex는 최고의 성능을 위해 (메모리 낭비 없이) 메모리 매핑,
제로 메모리 복사 정책, 지연 계산을 사용합니다.

- `vaex.from_pandas`
- `vaex.to_pandas_df`

### [Hail Query](https://hail.is/)

유전학 커뮤니티를 위한 메모리 외(out-of-core), 선점 안전(preemptible-safe),
분산 데이터프레임 라이브러리입니다. Hail Query는 디스크 데이터 형식,
메모리 내 데이터 형식, 표현식 컴파일러, 쿼리 플래너, 그리고
분산 정렬 알고리즘을 함께 제공하며, 이 모두는 대용량의
게놈 시퀀싱 데이터 행렬에 대한 쿼리를 가속하기 위해 설계되었습니다.

Hail이 생성하는 요약 통계량이나
기타 작은 집계를 다룰 때에는 pandas를 사용하는 것이 가장 쉬운 경우가 많습니다. 이를 위해 Hail은
pandas DataFrame과의 직접 가져오기·내보내기 기능을 제공합니다:

- [`Table.from_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.from_pandas)
- [`Table.to_pandas`](https://hail.is/docs/latest/hail.Table.html#hail.Table.to_pandas)

## 데이터 정제와 검증

### [pyjanitor](https://github.com/pyjanitor-devs/pyjanitor)

Pyjanitor는 메서드 체이닝을 사용하여 데이터를 정제하기 위한 깔끔한 API를 제공합니다.

### [Pandera](https://pandera.readthedocs.io/en/stable/)

Pandera는 데이터프레임에 대한 데이터 검증을 수행하기 위한 유연하고 표현력 있는 API를 제공하여,
데이터 처리 파이프라인을 더 읽기 쉽고 견고하게 만들어 줍니다.
데이터프레임은 pandera가 런타임에 명시적으로 검증하는 정보를 담고 있습니다. 이는
프로덕션 환경에서 중요한 데이터 파이프라인이나 재현 가능한 연구 환경에서 유용합니다.

## 확장 자료형

pandas는 NumPy의 자료형 체계를 확장하기 위한
[확장 자료형](https://pandas.pydata.org/docs/development/extending.html#extension-types) 정의 인터페이스를 제공합니다.
다음 라이브러리들은 그 인터페이스를 구현하여, NumPy나 pandas에 없는 자료형을 제공하며,
pandas의 데이터 컨테이너와 잘 동작합니다.

### [awkward-pandas](https://github.com/scikit-hep/awkward)

Awkward-pandas는 pandas의 Series와 DataFrame 안에 Awkward
배열을 저장하기 위한 확장 자료형을 제공합니다. awkward 자료형의 Series에서 awkward 함수를 사용하기 위한
액세서도 함께 제공합니다.

### [db-dtypes](https://github.com/googleapis/python-db-dtypes-pandas)

db-dtypes는 데이터베이스 시스템의
DATE, TIME, JSON과 같은 자료형을 다루기 위한 확장 자료형을 제공합니다. 이 패키지는
numpy에 자연스러운 자료형이 없는 BigQuery 자료형에 대해 자연스러운 dtype을 제공하기 위해
pandas-gbq에서 사용됩니다.

### [Pandas-Genomics](https://pandas-genomics.readthedocs.io/en/latest/)

Pandas-Genomics는 유전체 데이터 작업을 위한
확장 자료형과 확장 배열을 제공합니다.  유전체 데이터의 QC와 분석에 관련된 많은 유용한 속성과
메서드를 제공하는 `genomics` 액세서도 함께 포함되어 있습니다.

### [Physipandas](https://github.com/mocquin/physipandas)

Physipandas는 물리량(스칼라와 numpy.ndarray 등)을
물리 단위(미터, 줄 등)와 함께 다루기 위한 확장과,
`physipy` 액세서를 pandas Series 및 DataFrame과 통합하기 위한
추가 기능을 제공합니다.

### [Pint-Pandas](https://github.com/hgrecco/pint-pandas)

Pint-Pandas는 단위가 있는 수치 배열을 저장하기 위한 확장 자료형을 제공합니다.
이러한 배열은 pandas의 Series와 DataFrame 안에 저장할 수 있습니다. pint의 확장 배열을 사용하는 Series와 DataFrame 컬럼 간의
연산은 단위를 인식합니다.

### [Text Extensions](https://ibm.biz/text-extensions-for-pandas)

Text Extensions for Pandas는 자연어 데이터를 표현하기 위한 일반적인 자료 구조를 다루는 확장 자료형과, 인기 있는 자연어 처리 라이브러리의 출력을 pandas DataFrame으로 변환하는 라이브러리 통합을 제공합니다.

## 액세서

[확장 액세서](https://pandas.pydata.org/docs/development/extending.html#registering-custom-accessors)를 제공하는 프로젝트들의 디렉터리입니다.
사용자는 새로운 액세서를 발견하고, 라이브러리
작성자들은 네임스페이스를 조율할 수 있게 됩니다.

| 라이브러리                                                                | 액세서        | 클래스                   |
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

## 개발 도구

### [pandas-stubs](https://github.com/VirtusLab/pandas-stubs)

pandas 저장소는 일부 타입 주석이 되어 있지만, 패키지 자체는 외부 사용을 위해 이 정보를 노출하지 않습니다.
pandas API의 기본 타입 커버리지를 활성화하려면 pandas-stubs를 설치하세요.

자세한 내용은 다음 이슈들을 참고해 주십시오: [14468](https://github.com/pandas-dev/pandas/issues/14468),
[26766](https://github.com/pandas-dev/pandas/issues/26766), [28142](https://github.com/pandas-dev/pandas/issues/28142).

설치와 사용 안내는 [GitHub 페이지](https://github.com/VirtusLab/pandas-stubs)를 참고해 주십시오.

### [Hamilton](https://github.com/dagworks-inc/hamilton)

Hamilton은 Stitch Fix에서 시작된 선언형 데이터 흐름 프레임워크입니다. 특히 머신러닝 모델의 특성 공학과 관련하여, Pandas 코드베이스를 관리하기 쉽도록
돕기 위해 설계되었습니다.

다음을 보장하는 의견 있는 패러다임을 따릅니다. 즉, 모든 코드가:

- 단위 테스트 가능
- 통합 테스트 친화적
- 문서화 친화적
- 변환 로직은 사용되는 컨텍스트와 분리되어 있어, 재사용 가능
- 런타임 데이터 품질 검증과 통합 가능

이를 통해 pandas 코드베이스를 확장하면서 유지보수 비용은 낮게 유지할 수 있습니다.

자세한 내용은 [문서](https://hamilton.readthedocs.io/)를 참고해 주십시오.
