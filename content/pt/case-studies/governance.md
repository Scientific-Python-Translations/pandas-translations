# Governança do Projeto

A versão oficial deste documento, juntamente com uma lista de
indivíduos e instituições nos papéis definidos na seção de governança
abaixo, está contido na página
[Governança do projeto]({{ base_url }}sobre/governance.html)
do site do pandas.

## O Projeto

O projeto pandas (The Project) é um projeto de software de código aberto afiliado
com a Fundação 501(c)3 NumFOCUS. O objetivo do Projeto é desenvolver um software de código aberto
para ingestão de dados, preparação de dados, análise de dados e visualização de dados
para a linguagem de programação Python. O Software desenvolvido pelo Projeto é lançado sob a licença BSD (ou similar) de código aberto, desenvolvido abertamente e hospedado nos repositórios públicos do GitHub sob a [organização pandas no GitHub](https://github.com/pandas-dev). Exemplos do Projeto de Software
incluem o repositório principal de código de pandas e a biblioteca pandas-stubs.

Através da sua afiliação com a NumFOCUS, O Projeto tem o direito de receber doações compatíveis com deduções de imposto nos Estados Unidos da América.

O Projeto é desenvolvido por uma equipe de desenvolvedores distribuídos, chamados
Contribuidores. Contribuidores são indivíduos que contribuíram com código,
documentação, designs ou outras funcionalidades para um ou mais repositórios do Projeto.
Qualquer pessoa pode ser um Contribuidor. Contribuidores podem ser afiliados a quaisquer entidades legais ou nenhuma. Contribuidores participam do projeto através da submissão, revisão e discussão de Pull Requests (solicitações de contribuição) e Issues (relatos de bug) no GitHub e através da participação em discussões públicas e abertas sobre o Projeto no GitHub, listas de e-mail, e em outros locais. A base da participação do Projeto é a abertura e
transparência.

Aqui está uma lista dos atuais Contribuidores para o principal repositório pandas:

[https://github.com/pandas-dev/pandas/graphs/contributors](https://github.com/pandas-dev/pandas/graphs/contributors)

Há também muitos outros Contribuidores listados nos registros de outros repositórios do
projeto pandas.

A Comunidade do Projeto consiste em todos os Contribuidores e Usuários do Projeto.
Contribuidores trabalham para e são responsáveis pela Comunidade do Projeto, e nós tentamos manter a barreira entre Contribuidores e Usuários tão baixa quanto possível.

O Projeto é formalmente afiliado à fundação 501(c)3 NumFOCUS
([https://numfocus.org](https://numfocus.org)), que serve como seu patrocinador fiscal, pode ter marcas registradas do projeto e outras propriedades intelectuais, ajuda
a gerenciar doações para o projeto e atua como sua entidade legal. NumFOCUS é a única entidade jurídica que tem uma relação formal com o projeto (veja
a seção Parceiros Institucionais abaixo).

## Governança

Esta seção descreve o modelo de governação e liderança do Projeto.

As bases da governança do Projeto são:

- Abertura e Transparência
- Contribuição Ativa
- Neutralidade Institucional

Tradicionalmente, a liderança do projeto foi fornecida por um BDFL (Wes McKinney) e
um subconjunto de contribuidores, chamado de Core Team (Equipe Central), cujas contribuições ativas e consistentes foram reconhecidas pelos "direitos de commit" recebidos dos repositórios do Projeto no GitHub. Em geral, todas as decisões do Projeto são tomadas através de
consenso entre a Equipe Central com contribuições da Comunidade. O BDFL pode, mas raramente o faz, se sobrepôr à Equipe Central e tomar uma decisão final sobre um assunto.

Embora essa abordagem nos tenha servido bem, à medida que o Projeto cresce e enfrenta mais decisões legais e financeiras e interage com outras instituições, nós sentimos a
necessidade de um modelo de governança mais formal. A partir de agora, a liderança do Projeto consistirá em um BDFL e uma Equipe Central. Nós vemos este modelo de governação como a formalização do que já estamos fazendo, em vez de uma mudança radical.

### BDFL

O Projeto terá um BDFL (Benevolent Dictator for Life, Ditador Benevolente Vitalício), que atualmente é Wes McKinney. Como Ditador, o BDFL tem a autoridade de tomar todas as decisões finais pelo Projeto. Como Benevolente, o BDFL na prática escolhe transferir essa autoridade para o consenso da comunidade e da Equipe Central nos seus canais de discussão. É esperado, e no passado já foi o caso, que o BDFL raramente afirmará sua autoridade final. Como ele raramente é usado, nós chamamos a autoridade final do BDFL como um voto "especial" ou "sobrescrito". Quando ocorrer, o voto especial do BDFL normalmente acontecerá em situações em que há um impasse na Equipe Central ou se a Equipe Central pedir ao BDFL para tomar uma decisão
sobre um assunto específico. Para garantir a benevolência do BDFL, O Projeto incentiva outros a fazerem um <i>fork</i> do projeto se eles discordarem do caminho geral que o BDFL está tomando. O BDFL é o presidente da Equipe Central (veja abaixo) e pode delegar sua autoridade em uma determinada decisão ou conjunto de decisões a qualquer outro Membro da Equipe Central a seu critério.

O BDFL pode nomear seu sucessor, mas é esperado que a Equipe Central
seja consultada sobre esta decisão. Se o BDFL não conseguir nomear um sucessor (por exemplo, devido à morte ou doença), a Equipe Central escolherá um sucessor em uma votação com pelo menos 2/3 dos membros da Equipe Central votando a favor do sucessor escolhido. Pelo menos 80% da Equipe Central deve participar da votação. Se nenhum candidato a BDFL receber 2/3 dos votos da Equipe Central, os membros desta Equipe propõem os candidatos BDFL ao Painel de Diretores (Board) da NumFOCUS, que
tomará a decisão final.

### Equipe Central

A Equipe Central do Projeto consistirá em Contribuidores do Projeto que produziram
contribuições substanciais em qualidade e quantidade, consistentemente por mais de
pelo menos um ano. O papel da Equipe Central é assegurar o bem estar do projeto a longo prazo, tanto tecnicamente quanto em comunidade, através do seu trabalho com o BDFL e das contribuições da Comunidade.

Durante as atividades corriqueiras do projeto, a Equipe Central participa em todas as discussões, revisões de código e outras atividades do projeto como contribuidores regulares assim como todos os membros da Comunidade e outros Contribuidores. Nessas atividades corriqueiras, a Equipe Central não tem
nenhum poder especial ou privilégio através de sua filiação à Equipe Central. No entanto é esperado que devido à qualidade e quantidade de suas contribuições
e seu conhecimento especializado sobre o Software do Projeto que a Equipe Central
proporcione orientações úteis para contribuidores potencialmente menos experientes, tanto tecnicamente como em termos da direção do projeto.

A Equipe Central e os seus membros desempenham um papel especial em certas situações.
Em particular, a Equipe Central pode:

- Tomar decisões sobre o escopo, visão e direção do projeto.
- Tomar decisões sobre colaborações estratégicas com outras organizações ou pessoas.
- Tomar decisões sobre problemas técnicos específicos, recursos, bugs e pull requests. Eles são o mecanismo principal a guiar o processo de revisão de código
  e aceitar pull requests.
- Tomar decisões sobre os Serviços que são executados pelo Projeto e gerenciar
  esses Serviços para o benefício do Projeto e da Comunidade.
- Tomar decisões quando a discussão regular da comunidade não produz consenso
  em uma issue em um período de tempo razoável.

### Membros da Equipe Central

Para se tornar elegível para membro da Equipe Central um indivíduo deve ser um Contribuidor do Projeto que produziu contribuições substanciais em qualidade e quantidade, e continuou por pelo menos um ano. Potenciais membros da Equipe Central são nomeados e votados por membros da Equipe Central existentes depois de perguntar se o membro em potencial está interessado e disposto a servir nesta capacidade. A Equipe Central será inicialmente formada a partir do conjunto existente de Contribuidores que possuiam direitos de commit ao final de 2015.

Ao considerar potenciais membros, a Equipe Central irá analisar os candidatos com
uma visão abrangente de suas contribuições. Isso incluirá, mas não será limitado a código, revisão de código, trabalho de infraestrutura, trabalho na lista de emails e participação em bate-papos da comunidade, ajuda/construção, educação e divulgação, trabalho de design, etc. Nós estamos deliberadamente evitando definir métricas quantitativas arbitrárias (como "100
commits nesse repositório") para evitar incentivar comportamentos que focam nas métricas
ao invés do bem-estar geral do projeto. Queremos incentivar uma variedade
de históricos, pontos de vista e talentos em nossa equipe, razão pela qual explicitamente não definimos o código como a única métrica em que a equipe
será avaliada.

Se um membro da Equipe Central se tornar inativo no projeto por um período de um ano,
ele será considerado para remoção da Equipe Central. Antes de ser removido, o Membro inativo será abordado pelo BDFL para verificar seus planos em relação a voltar à contribuição ativa. Caso contrário, eles serão removidos imediatamente após uma votação da Equipe Central. Se eles planejarem voltar à participação ativa, receberão um período de carência de um ano. Se eles não retornam à participação ativa
dentro desse período de tempo, serão removidos por votação da Equipe Central sem
período adicional de carência. Todos os antigos membros da Equipe Central podem ser considerados para
adesão novamente a qualquer momento no futuro, como qualquer outro Colaborador do Projeto.
Membros da Equipe Central aposentados serão listados no site do projeto, com reconhecimento ao período durante o qual estavam ativos na Equipe Central.

A Equipe Central se reserva o direito de ejetar Membros atuais, que não sejam o BDFL, se eles se mostrarem ativamente hostis ao bem-estar do projeto, e caso tentativas de comunicação e resolução de conflito tenham falhado.

### Conflito de interesses

Espera-se que o BDFL e os Membros da Equipe Central sejam empregados em uma ampla gama de empresas, universidades e organizações sem fins lucrativos. Por causa disso,
é possível que os Membros tenham conflito de interesses. Tais conflitos de interesses incluem, mas não estão limitados a:

- Interesses financeiros, como investimentos, emprego ou contrato de trabalho,
  fora do Projeto que pode influenciar seu trabalho no Projeto.
- Acesso a informações proprietárias de seu empregador que poderiam potencialmente
  vazar para seu trabalho com o Projeto.

Todos os membros da Equipe Central, incluindo o BDFL, devem divulgar ao resto da Equipe Central qualquer conflito de interesse que possam ter. Membros com um conflito de
interesse em um determinado problema podem participar das discussões da Equipe Central sobre essa questão mas tem de se abster de votar sobre a questão. Se o BDFL se abstiver de uma decisão específica, eles irão nomear um BDFL substituto para essa decisão.

### Comunicações privadas da Equipe Central

A menos que seja especificamente necessário, todas as discussões e atividades da Equipe Central serão feitas em público e em colaboração e discussão com os Contribuidores e a Comunidade do Projeto. A Equipe Central terá uma lista de e-mails provada que será usada com parcimônia e somente quando uma situação específica demandar privacidade. Quando comunicações e decisões privadas forem necessárias, a Equipe Central fará o seu melhor para resumi-las para a Comunidade depois de proteger informações pessoais/privadas/sensíveis que não devam ser postadas na internet publicamente.

### Subcomitês

A Equipe Central pode criar subcomitês que fornecem liderança e orientações para aspectos específicos do projeto. Assim como a Equipe Central, subcomitês devem conduzir seu trabalho em público e abertamente, a não ser que seja especificamente necessário garantir privacidade. Comunicações privadas de subcomitês devem acontecer na lista privada de e-mails da Equipe Central, a menos que outro meio seja especificamente solicitado.

Pergunta: se o BDFL não está em um subcomitê, ele ainda tem permissão para exercer sua autoridade final?

Sugestão: sim, mas ele deve apontar um delegado que será responsável por essas decisões na maior parte do tempo, e a intervenção do BDFL só será necessária se o comitê discordar da decisão do delegado e não for possível encontrar uma resolução dentro do comitê. Isto é diferente de um delegado BDFL para uma decisão específica
(ou uma situação de abstenção), onde o BDFL está literalmente entregando sua autoridade
a outra pessoa na íntegra. É mais parecido com o que Linus Torvalds usa com seu modelo de "lieutenants".

### Subcomitê NumFOCUS

A equipe central manterá um subcomitê com foco estrito para gerenciar suas interações
com a NumFOCUS.

- O Subcomitê NumFOCUS é composto por pelo menos 5 pessoas que gerenciam o financiamento do projeto
  através da NumFOCUS. Espera-se que estes valores sejam gastos de maneira consistente com a missão sem fins lucrativos da NumFOCUS e com a direção do Projeto como determinada pela Equipe Central.
- Este Subcomitê NÃO deve tomar decisões sobre a direção, o escopo ou
  direção técnica do Projeto.
- Este Subcomitê terá pelo menos 5 membros. Não mais do que 2 Membros do Subcomitê
  podem ser gerenciados por uma pessoa (direta ou indiretamente) através de
  emprego ou contratação de trabalho (incluindo a pessoa gerenciada, isto é, a pessoa gerenciada +1 é o máximo). Isto evita que uma maioria efetiva se concentre em uma pessoa.

## Parceiros Institucionais e Financiamento

O BDFL e a Equipe Central são a liderança primária para o projeto. Nenhuma instituição, indivíduo ou entidade legal externa tem a habilidade de possuir, controlar, usurpar ou influenciar o projeto de formas que não sejam através de participação no Projeto como Contribuidores e Membros da Equipe Central. No entanto, como as instituições são o mecanismo primário
de financiamento do projeto, é importante reconhecer formalmente
participação institucional no projeto. Estes são Parceiros Institucionais.

Um Contribuidor Institucional é qualquer Contribuidor individual do Projeto que contribui para o projeto como parte de suas atribuições oficiais em um Parceiro Institucional. Similarmente, um Membro Institucional da Equipe Central é qualquer Membro da Equipe Central que contribui para o projeto como parte de suas atribuições oficiais em um Parceiro Institucional.

Com estas definições, um Parceiro Institucional é qualquer entidade jurídica reconhecida
nos Estados Unidos ou em outros lugares que emprega pelo menos um Contribuidor Institucional ou Membro Institucional da Equipe Central. Parceiros Institucionais podem ser entidades com ou sem fins lucrativos.

As instituições tornam-se elegíveis para tornarem-se Parceiros Institucionais ao empregar
indivíduos que contribuem ativamente para o Projeto como parte de suas atribuições
oficiais. To state this another way, the only way for an Institutional Partner to
influence the project is by actively contributing to the open development of
the project, on equal terms with any other member of the community of
Contributors and Core Team Members. Merely using pandas Software or Services in
an institutional context does not allow an entity to become an Institutional
Partner. Financial gifts do not enable an entity to become an Institutional
Partner. Once an institution becomes eligible for Institutional Partnership,
the Core Team must nominate and approve the Partnership.

If an existing Institutional Partner no longer has a contributing employee,
they will be given a one-year grace period for other employees to begin
contributing.

An Institutional Partner is free to pursue funding for their work on The
Project through any legal means. This could involve a non-profit organization
raising money from private foundations and donors or a for-profit company
building proprietary products and services that leverage Project Software and
Services. Funding acquired by Institutional Partners to work on The Project is
called Institutional Funding. However, no funding obtained by an Institutional
Partner can override The Project BDFL and Core Team. If a Partner has funding
to do pandas work and the Core Team decides to not pursue that work as a
project, the Partner is free to pursue it on their own. However in this
situation, that part of the Partner’s work will not be under the pandas
umbrella and cannot use the Project trademarks in a way that suggests a formal
relationship.

To acknowledge institutional contributions, there are two levels of
Institutional Partners, with associated benefits:

**Tier 1** = an institution with at least one Institutional Core Team Member

- Acknowledged on the pandas website, in talks and T-shirts.
- Ability to acknowledge their own funding sources on the pandas website, in
  talks and T-shirts.
- Ability to influence the project through the participation of their Core Team
  Member.

**Tier 2** = an institution with at least one Institutional Contributor

## Breach

Non-compliance with the terms of the governance documents shall be reported to
the Core Team either through public or private channels as deemed appropriate.

## Changing the Governance

Changes to the governance are submitted via a GitHub pull request to The Project's
[governance page](https://github.com/pandas-dev/pandas/blob/main/web/pandas/about/governance.md).
The pull request is then refined in response to public comment and review, with
the goal being consensus in the community.  After this open period, a Core Team
Member proposes to the Core Team that the changes be ratified and the pull
request merged (accepting the proposed changes) or proposes that the pull
request be closed without merging (rejecting the proposed changes). The Member
should state the final commit hash in the pull request being proposed for
acceptance or rejection and briefly summarize the pull request. A minimum of
80% of the Core Team must vote and at least 2/3 of the votes must be positive
to carry out the proposed action (fractions of a vote rounded up to the nearest
integer). Since the BDFL holds ultimate authority in The Project, the BDFL has
authority to act alone in accepting or rejecting changes or overriding Core
Team decisions.
