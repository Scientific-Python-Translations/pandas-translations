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

- encontrar posições que precisamos acessar/modificar em cada eixo
- (se estivermos acessando) derivar o tipo de objeto que precisamos retornar (dimensionalidade)
- realmente acessar/modificar os valores
- (se estivermos acessando) construir o objeto de retorno

5. Como corolário do desacoplamento entre 4.i e 4.iii, qualquer código que trate de como os dados são armazenados (incluindo qualquer combinação de manipulação de múltiplos dtypes e armazenamento esparso, categóricos, tipos de terceiros) deve ser independente do código que lida com a identificação de linhas/colunas afetadas e ocorrer somente quando a etapa 4.i for concluída.

- Em particular, esse código muito provavelmente não deve ficar em `pandas/core/indexing.py`
- ... e não deve depender de qualquer forma do(s) tipo(s) de eixos (por exemplo, sem casos especiais de `MultiIndex`)

6. Como corolário do ponto 1.i, as (sub)classes `Index` devem fornecer métodos separados para qualquer verificação de validade desejada de rótulo(s) que não envolva consulta real, por um lado, e para qualquer conversão/adaptação/consulta necessária de rótulo(s), por outro.

7. O uso de tentativa e erro deve ser limitado, e de qualquer forma, restrito para capturar apenas exceções
  que são realmente esperadas (tipicamente `KeyError`).

- Em particular, o código nunca deve (intencionalmente) levantar novas exceções na porção `except` de uma `try... exception`

8. Qualquer porção de código que não seja específica para setters e getters deve ser compartilhada,
  e quando pequenas diferenças de comportamento são esperadas (por exemplo, receber com `.loc` levanta erros para
  rótulos que faltam, definindo ainda não), eles podem ser gerenciados com um parâmetro específico.

### Operações com aceleração numérica

[Numba](https://numba.pydata.org) é um compilador JIT para código Python.
Nós gostaríamos de fornecer maneiras para os usuários aplicarem suas próprias funções
Numba implementadas com JIT onde pandas aceita funções definidas pelo usuário (por exemplo,
`Series.apply`,
`DataFrame.apply`,
`DataFrame.applymap`, e em contextos de window
e groupby). Isto irá melhorar o desempenho de funções
de usuário definida nestas operações permanecendo dentro do código
compilado.

### Melhorias de documentação

Gostaríamos de melhorar o conteúdo, a estrutura e a apresentação
da documentação do pandas. Algumas metas específicas incluem

- Reformular o tema HTML com um design moderno e responsivo
  (`15556`)
- Melhorar a documentação "Primeiros passos", projetando e escrevendo
  caminhos de aprendizagem para usuários com diferentes origens
  (por exemplo, novatos em programação, familiarizados com outras
  linguagens como R, já familiarizados com Python).
- Melhorar a organização geral da documentação e subseções específicas da documentação para facilitar a navegação e a localização de conteúdo.

### Monitoramento do desempenho

Pandas usa [airspeed velocity](https://asv.readthedocs.io/en/stable/)
para monitorar as regressões de desempenho. ASV em si é uma ferramenta fabulosa,
mas requer algum trabalho adicional para ser integrado no fluxo de trabalho de um projeto
de código aberto.

A organização [asv-runner](https://github.com/asv-runner), atualmente
composta por mantenedores de pandas, fornece ferramentas construídas em cima do ASV. Temos uma máquina física para executar diversas análises de desempenho de projetos, além de ferramentas para gerenciar as execuções de tais análises e gerar relatórios sobre os resultados.

Gostaríamos de financiar melhorias e manutenção dessas ferramentas para

- Serem mais estáveis. Atualmente, elas são mantidas nas noites e
  fim de semana quando um mantenedor tem tempo livre.
- Ajustarem o sistema de análises de desempenho para melhorar a estabilidade, seguindo
  <https://pyperf.readthedocs.io/en/latest/system.html>
- Construirmos um bot GitHub para solicitar execução do ASV _antes_ de um PR ser mesclado.
  Atualmente, as análises de desempenho só são executadas noturnamente.
