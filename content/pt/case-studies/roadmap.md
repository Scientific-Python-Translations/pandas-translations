# Planejamento (Roadmap)

Esta página fornece uma visão geral sobre os temas prioritários no desenvolvimento do pandas. Cada um desses itens requer uma quantidade relativamente grande de
esforço para implementar. Estes podem ser alcançados mais rapidamente com
financiamento dedicado ou interesse dos contribuidores.

Se um item está no Planejamento, não significa que ele irá _necessariamente_
acontecer, mesmo com financiamento ilimitado. Durante o período de implementação
podem aparecer problemas que impeçam a adoção do recurso.

Além disso, um item _não_ estar no planejamento não exclui ele
da inclusão no pandas. O planejamento destina-se a mudanças
maiores e fundamentais no projeto que provavelmente levam meses ou
anos do tempo do time de desenvolvedores. Itens de escopo menor continuarão sendo
rastreados em nosso [rastreador de problemas](https://github.com/pandas-dev/pandas/issues).

O planejamento é definido como um conjunto de importantes propostas de melhorias denominadas PDEPs.
Para mais informações sobre PDEPs, e como enviar uma, consulte
[PEDP-1]({{ base_url }}pdeps/0001-purpose-and-guidelines.html).

## PDEPs

{% for pdep_type in ["Em discussão", "Aceita", "Implementada", "Rejeitada"] %}

<h3 id="pdeps-{{pdep_type}}">{{ pdep_type.replace("_", " ").capitalize() }}</h3>

<ul>
{% for pdep in pdeps[pdep_type] %}
    <li><a href="{% if not pdep.url.startswith("http") %}{{ base_url }}{% endif %}{{ pdep.url }}">{{ pdep.title }}</a></li>
{% else %}
    <li>Atualmente não há PDEPs com este status</li>
{% endfor %}
</ul>

{% endfor %}

## Pontos de planejamento pendentes de uma PDEP

<div class="alert alert-warning" role="alert">
  pandas está no processo de mover os pontos de planejamento para PDEPs (implementada em
  agosto de 2022). Durante a transição, alguns pontos de planejamento existirão como PDEPs,
  enquanto outros existirão como as seções abaixo.
</div>

### Extensibilidade

Pandas `extending.extension-types` permite
para estender tipos de número com tipos de dados personalizados e armazenamento de matrizes.
Pandas usa tipos de extensão internamente e fornece uma interface para bibliotecas de
terceiros para definir seus próprios tipos de dados personalizados.

Muitas partes das pandas ainda convertem dados em um matriz NumPy. Estes problemas são especialmente pronunciados por dados aninhados.

Gostaríamos de melhorar a manipulação de matrizes de extensões em toda a biblioteca, tornando seu comportamento mais consistente com a manipulação de matrizes do NumPy. Vamos fazer isso limpando as partes internas do pandas e
adicionando novos métodos à interface de matrizes de extensão.

### Tipo de dados string

Atualmente, o pandas armazena dados de texto em um matriz NumPy de dtype `object`.
A implementação atual tem duas desvantagens principais: Primeiro, dtype `object`
não é específico de strings: qualquer objeto Python pode ser armazenado em uma matriz de dtype
`object` e não apenas strings. Segundo: isto não é eficiente.
O modelo de memória do NumPy não é especialmente adequado para dados de texto de largura variável.

Para resolver o primeiro problema, propomos um novo tipo de extensão para dados string. Inicialmente, isto estará ativado por padrão, com usuários explicitamente solicitando
`dtype="string"`. A matriz que oferece suporte a este dtype pode inicialmente ser
a implementação atual: uma matriz NumPy de dtype `object` com strings Python.

Para resolver o segundo problema (desempenho), exploraremos bibliotecas
alternativas de matriz em memória (por exemplo, Apache Arrow). Como parte do
trabalho, talvez precisemos implementar certas operações esperadas pelos usuários do pandas
(por exemplo, o algoritmo usado em, `Series.str.upper`). O trabalho
pode ser feito fora do pandas.

### Interoperabilidade do Apache Arrow

[Apache Arrow](https://arrow.apache.org) é uma plataforma de desenvolvimento multilinguagem
para dados em memória. Os tipos lógicos do Arrow estão estreitamente alinhados
com os típicos casos de uso do pandas.

Gostaríamos de fornecer suporte integrado melhor para a memória do Arrow e tipos
de dados no pandas. Isso nos permitirá aproveitar seus recursos de E/S
e proporcionar melhor interoperabilidade com outras
linguagens e bibliotecas usando o Arrow.

### Desacoplamento da indexação e de partes internas

O código para obter e configurar valores nas estruturas de dados
do pandas precisa ser refatorado. Em particular, devemos separar claramente o código que
converte as chaves (por exemplo, o argumento para `DataFrame. oc`) para posições de um código
que usa essas posições para obter ou definir valores. Isto está relacionado a
a reescrita proposta do BlockManager. Atualmente, o BlockManager às vezes
usa indexação baseada em rótulo, ao invés de baseada em posicionamento. Nós propomos que
funcione somente com indexação posicional, e a tradução de chaves
para posições devem ser feitas inteiramente em um nível mais alto.

Indexação é uma API complicada com muitas sutilezas. Esta refatoração exigirá cuidado
e atenção. Os princípios a seguir devem inspirar a refatoração do código de indexação e
deve resultar em código mais limpo, mais simples e mais desempenho.

1. Indexação de rótulos nunca deve envolver busca em um eixo duas vezes para os mesmo rótulos.
   Isso implica que qualquer passo de validação também deve:

- limitar validação para recursos gerais (por exemplo, dtype/estrutura da chave/índice), ou
- reutilizar o resultado para a indexação real.

2. Os indexadores nunca devem depender de uma chamada explícita para outros indexadores.
   Por exemplo, é aceitável que algum método interno de `.loc` chame algum
   método interno de `__getitem__` (ou de sua classe base comum),
   mas nunca no fluxo de código de `.loc` deve aparecer `the_obj[algumacoisa]`.

3. Execução da indexação posicional nunca deve envolver rótulos (como atualmente, infelizmente, acontece).
   Ou seja, o fluxo de código de uma chamada de um getter (ou um setter call no qual o lado direito não é indexado)
   para `. loc` nunca deve envolver os eixos do objeto de alguma forma.

4. A indexação nunca deve envolver acesso/modificação de valores (ou seja, atuar em `._data` ou `.values`) mais de uma vez.
   Por conseguinte, os passos seguintes devem ser claramente dissociados:

- find positions we need to access/modify on each axis
- (if we are accessing) derive the type of object we need to return (dimensionality)
- actually access/modify the values
- (if we are accessing) construct the return object

5. As a corollary to the decoupling between 4.i and 4.iii, any code which deals on how data is stored
   (including any combination of handling multiple dtypes, and sparse storage, categoricals, third-party types)
   must be independent from code that deals with identifying affected rows/columns,
   and take place only once step 4.i is completed.

- In particular, such code should most probably not live in `pandas/core/indexing.py`
- ... and must not depend in any way on the type(s) of axes (e.g. no `MultiIndex` special cases)

6. As a corollary to point 1.i, `Index` (sub)classes must provide separate methods for any desired validity check of label(s) which does not involve actual lookup,
   on the one side, and for any required conversion/adaptation/lookup of label(s), on the other.

7. Use of trial and error should be limited, and anyway restricted to catch only exceptions
   which are actually expected (typically `KeyError`).

- In particular, code should never (intentionally) raise new exceptions in the `except` portion of a `try... exception`

8. Any code portion which is not specific to setters and getters must be shared,
   and when small differences in behavior are expected (e.g. getting with `.loc` raises for
   missing labels, setting still doesn't), they can be managed with a specific parameter.

### Numba-accelerated operations

[Numba](https://numba.pydata.org) is a JIT compiler for Python code.
We'd like to provide ways for users to apply their own Numba-jitted
functions where pandas accepts user-defined functions (for example,
`Series.apply`,
`DataFrame.apply`,
`DataFrame.applymap`, and in groupby and
window contexts). This will improve the performance of
user-defined-functions in these operations by staying within compiled
code.

### Documentation improvements

We'd like to improve the content, structure, and presentation of the
pandas documentation. Some specific goals include

- Overhaul the HTML theme with a modern, responsive design
  (`15556`)
- Improve the "Getting Started" documentation, designing and writing
  learning paths for users different backgrounds (e.g. brand new to
  programming, familiar with other languages like R, already familiar
  with Python).
- Improve the overall organization of the documentation and specific
  subsections of the documentation to make navigation and finding
  content easier.

### Performance monitoring

Pandas uses [airspeed velocity](https://asv.readthedocs.io/en/stable/)
to monitor for performance regressions. ASV itself is a fabulous tool,
but requires some additional work to be integrated into an open source
project's workflow.

The [asv-runner](https://github.com/asv-runner) organization, currently
made up of pandas maintainers, provides tools built on top of ASV. We
have a physical machine for running a number of project's benchmarks,
and tools managing the benchmark runs and reporting on results.

We'd like to fund improvements and maintenance of these tools to

- Be more stable. Currently, they're maintained on the nights and
  weekends when a maintainer has free time.
- Tune the system for benchmarks to improve stability, following
  <https://pyperf.readthedocs.io/en/latest/system.html>
- Build a GitHub bot to request ASV runs _before_ a PR is merged.
  Currently, the benchmarks are only run nightly.
