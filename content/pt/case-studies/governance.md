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

Para se tornar elegível para membro da Equipe Central um indivíduo deve ser um Contribuidor do Projeto que produziu contribuições substanciais em qualidade e quantidade, e continuou por pelo menos um ano. Potenciais membros da Equipe Central são nomeados e votados por membros da Equipe Central existentes depois de perguntar se o membro em potencial está interessado e disposto a servir nesta capacidade. The Core Team will be initially formed from the set of existing
Contributors who have been granted commit rights as of late 2015.

When considering potential Members, the Core Team will look at candidates with
a comprehensive view of their contributions. This will include but is not
limited to code, code review, infrastructure work, mailing list and chat
participation, community help/building, education and outreach, design work,
etc. We are deliberately not setting arbitrary quantitative metrics (like “100
commits in this repo”) to avoid encouraging behavior that plays to the metrics
rather than the project’s overall well-being. We want to encourage a diverse
array of backgrounds, viewpoints and talents in our team, which is why we
explicitly do not define code as the sole metric on which Core Team membership
will be evaluated.

If a Core Team member becomes inactive in the project for a period of one year,
they will be considered for removal from the Core Team. Before removal,
inactive Member will be approached by the BDFL to see if they plan on returning
to active participation. If not they will be removed immediately upon a Core
Team vote. If they plan on returning to active participation soon, they will be
given a grace period of one year. If they don't return to active participation
within that time period they will be removed by vote of the Core Team without
further grace period. All former Core Team members can be considered for
membership again at any time in the future, like any other Project Contributor.
Retired Core Team members will be listed on the project website, acknowledging
the period during which they were active in the Core Team.

The Core Team reserves the right to eject current Members, other than the BDFL,
if they are deemed to be actively harmful to the project’s well-being, and
attempts at communication and conflict resolution have failed.

### Conflict of interest

It is expected that the BDFL and Core Team Members will be employed at a wide
range of companies, universities and non-profit organizations. Because of this,
it is possible that Members will have conflict of interests. Such conflict of
interests include, but are not limited to:

- Financial interests, such as investments, employment or contracting work,
  outside of The Project that may influence their work on The Project.
- Access to proprietary information of their employer that could potentially
  leak into their work with the Project.

All members of the Core Team, BDFL included, shall disclose to the rest of the
Core Team any conflict of interest they may have. Members with a conflict of
interest in a particular issue may participate in Core Team discussions on that
issue, but must recuse themselves from voting on the issue. If the BDFL has
recused his/herself for a particular decision, they will appoint a substitute
BDFL for that decision.

### Private communications of the Core Team

Unless specifically required, all Core Team discussions and activities will be
public and done in collaboration and discussion with the Project Contributors
and Community. The Core Team will have a private mailing list that will be used
sparingly and only when a specific matter requires privacy. When private
communications and decisions are needed, the Core Team will do its best to
summarize those to the Community after eliding personal/private/sensitive
information that should not be posted to the public internet.

### Subcommittees

The Core Team can create subcommittees that provide leadership and guidance for
specific aspects of the project. Like the Core Team as a whole, subcommittees
should conduct their business in an open and public manner unless privacy is
specifically called for. Private subcommittee communications should happen on
the main private mailing list of the Core Team unless specifically called for.

Question: if the BDFL is not on a subcommittee, do they still have override
authority?

Suggestion: they do, but they should appoint a delegate who plays that role
most of the time, and explicit BDFL intervention is sought only if the
committee disagrees with that delegate’s decision and no resolution is possible
within the team. This is different from a BDFL delegate for a specific decision
(or a recusal situation), where the BDFL is literally giving up his/her
authority to someone else in full. It’s more like what Linus Torvalds uses with his
“lieutenants” model.

### NumFOCUS Subcommittee

The Core Team will maintain one narrowly focused subcommittee to manage its
interactions with NumFOCUS.

- The NumFOCUS Subcommittee is comprised of at least 5 persons who manage
  project funding that comes through NumFOCUS. It is expected that these funds
  will be spent in a manner that is consistent with the non-profit mission of
  NumFOCUS and the direction of the Project as determined by the full Core
  Team.
- This Subcommittee shall NOT make decisions about the direction, scope or
  technical direction of the Project.
- This Subcommittee will have at least 5 members. No more than 2 Subcommittee
  Members can report to one person (either directly or indirectly) through
  employment or contracting work (including the reportee, i.e. the reportee + 1
  is the max). This avoids effective majorities resting on one person.

## Institutional Partners and Funding

The BDFL and Core Team are the primary leadership for the project. No outside
institution, individual or legal entity has the ability to own, control, usurp
or influence the project other than by participating in the Project as
Contributors and Core Team. However, because institutions are the primary
funding mechanism for the project, it is important to formally acknowledge
institutional participation in the project. These are Institutional Partners.

An Institutional Contributor is any individual Project Contributor who
contributes to the project as part of their official duties at an Institutional
Partner. Likewise, an Institutional Core Team Member is any Core Team Member
who contributes to the project as part of their official duties at an
Institutional Partner.

With these definitions, an Institutional Partner is any recognized legal entity
in the United States or elsewhere that employs at least one Institutional
Contributor or Institutional Core Team Member. Institutional Partners can be
for-profit or non-profit entities.

Institutions become eligible to become an Institutional Partner by employing
individuals who actively contribute to The Project as part of their official
duties. To state this another way, the only way for an Institutional Partner to
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
