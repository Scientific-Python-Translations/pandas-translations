# Gestión del proyecto

La versión oficial de este documento, junto con una lista de personas e instituciones que desempeñan las funciones definidas en la sección de gestión se encuentra en la sección [Gestión del proyecto]({{ base_url }}about/governance.html) del sitio web de pandas.

## El proyecto

El Proyecto Pandas (El Proyecto) es un proyecto de software de código abierto afiliado
con la Fundación NumFOCUS 501(c)3. El objetivo de El Proyecto es desarrollar software
de código abierto para la adquisición, preparación, análisis y visualización de datos para el lenguaje de programación Python. El software desarrollado por El Proyecto se libera bajo la licencia BSD (o similar) de código abierto, desarrollado abiertamente y alojado en repositorios públicos de GitHub bajo la organización pandas
organización GitHub. Ejemplos de software del Proyecto
incluyen el repositorio principal de código Pandas y la librería pandas-stubs.

A través de su afiliación a NumFOCUS, El Proyecto tiene derecho a recibir donaciones deducibles de impuestos en los Estados Unidos de América.

El Proyecto es desarrollado por un equipo de desarrolladores distribuidos, llamados Colaboradores. Los colaboradores son personas que han aportado código, documentación, diseños u otros trabajos a uno o varios repositorios del Proyecto.
Cualquiera puede ser colaborador. Los colaboradores pueden estar afiliados a cualquier entidad o a ninguna. Los colaboradores participan en el proyecto enviando,
revisando y debatiendo en GitHub pull requests y problemas (issues), y participando en discusiones abiertas y públicas del proyecto en GitHub, listas de correo, y en otros lugares. La base en la participación del Proyecto es la apertura y la transparencia.

Aquí está la lista de los colaboradores actuales del repositorio principal de pandas:

[https://github.com/pandas-dev/pandas/graphs/contributors](https://github.com/pandas-dev/pandas/graphs/contributors)

También hay muchos otros colaboradores listados en los registros de otros repositorios del Proyecto Pandas.

La comunidad del Proyecto se compone de todos los contribuidores y usuarios del Proyecto.
Los colaboradores trabajan en nombre de la comunidad del Proyecto y son responsables de esto. Nosotros nos esforzamos por mantener la barrera entre colaboradores y usuarios lo más baja posible.

El Proyecto está afiliado formalmente con la Fundación NumFOCUS 501(c) 3 ([https://numfocus.org](https://numfocus.org)), la cual actúa como su patrocinador fiscal, puede tener marcas registradas del Proyecto y otra propiedad intelectual, ayuda a administrar las donaciones del Proyecto y actúa como entidad legal matriz. NumFOCUS es la única entidad legal que mantiene una relación formal con el Proyecto (véase la sección Socios institucionales).

## Governance

Esta sección describe el modelo de gestión y liderazgo del Proyecto.

Los fundamentos de la gestión de Proyecto son:

- Apertura y transparencia
- Contribución activa
- Neutralidad institucional

Tradicionalmente, la dirección del proyecto corría a cargo de un BDFL (Wes McKinney) y un subconjunto de colaboradores, llamado el Equipo Central, cuyas contribuciones activas y constantes han sido reconocidas al recibir «derechos de confirmación» en los repositorios de GitHub del Proyecto. En general todas las decisiones del Proyecto se toman por consenso del Equipo Central con los aportes de la Comunidad. El BDFL puede, pero raramente lo elige, anular al Equipo Central y tomar una decisión final sobre el asunto.

Mientras este enfoque ha funcionado bien, a medida que el Proyecto crece y se enfrenta a más decisiones legales y financieras e interacciones con otras instituciones, vemos la necesidad de tener un modelo más formal de gestión. De cara al futuro, la dirección del Proyecto consistirá en un BDFL y un equipo central. Vemos este modelo de gestión como la formalización de lo que realmente estamos haciendo, más que un cambio de rumbo.

### BDFL

The Project will have a BDFL (Benevolent Dictator for Life), who is currently
Wes McKinney. Como dictador, el BDFL tiene la autoridad de tomas las decisiones finales para el Proyecto. Como benevolente, el BDFL, en la práctica elige diferir esa autoridad al consenso de los canales de discusión de la comunidad y del equipo central. Se espera, y en el pasado ha sido el caso, que el BDFL haga valer su autoridad final en contadas ocasiones. Dado que rara vez se utiliza, nos referimos a la autoridad final del BDFL como voto "especial" o "preponderante". Cuando esto ocurre, el voto del BDFL típicamente sucede en situaciones donde hay un punto muero en el equipo central o si el equipo central pide al BDFL que tome una decisión sobre un asunto concreto. Para asegurar la benevolencia del BDFL, el Proyecto anima a otros a bifurcar el proyecto si no están de acuerdo con la dirección que está tomando el BDFL. El BDFL preside el Equipo Central (véase más abajo) y puede delegar su autoridad sobre una decisión o conjunto de decisiones concretas
a cualquier otro miembro del Equipo Central.

El BDFL puede nombrar a su sucesor, pero se espera que el Equipo Central sea consultado sobre esta decisión. If the BDFL is unable to appoint a
successor (e.g. due to death or illness), the Core Team will choose a successor
by voting with at least 2/3 of the Core Team members voting in favor of the
chosen successor. Por lo menos 80% del Equipo Central debe participar en la votación. Si ningún candidato a la BDFL recibe 2/3 de los votos del Equipo Central, los miembros del Equipo Central propondrán los candidatos a la BDFL al Consejo Principal de NumFOCUS, quien
tomará la decisión final.

### Equipo Central

El Equipo Central del Proyecto estará formado por colaboradores del proyecto que hayan producido contribuciones sustanciales en calidad y cantidad, y continuas durante al menos un año. La función general del Equipo Central es garantizar, mediante con la BDFL y las contribuciones de la Comunidad, el bienestar a largo plazo del
a largo plazo del proyecto, tanto desde el punto de vista técnico como comunitario.

Durante las actividades diarias del Proyecto, el Equipo Central participa en todas las discusiones, revisiones de código y otras actividades del proyecto como compañeros con todos los demás colaboradores y la comunidad. En estas actividades cotidianas, el Equipo Central no tiene ningún poder o privilegio especial por su afiliación como Equipo Central. However, it is expected that because of the quality and quantity of their
contributions and their expert knowledge of the Project Software that the Core
Team will provide useful guidance, both technical and in terms of project
direction, to potentially less experienced contributors.

The Core Team and its Members play a special role in certain situations.
In particular, the Core Team may:

- Make decisions about the overall scope, vision and direction of the
  project.
- Make decisions about strategic collaborations with other organizations or
  individuals.
- Make decisions about specific technical issues, features, bugs and pull
  requests. They are the primary mechanism of guiding the code review process
  and merging pull requests.
- Make decisions about the Services that are run by The Project and manage
  those Services for the benefit of the Project and Community.
- Make decisions when regular community discussion doesn't produce consensus
  on an issue in a reasonable time frame.

### Core Team membership

To become eligible for being a Core Team Member an individual must be a Project
Contributor who has produced contributions that are substantial in quality and
quantity, and sustained over at least one year. Potential Core Team Members are
nominated by existing Core members and voted upon by the existing Core Team
after asking if the potential Member is interested and willing to serve in that
capacity. The Core Team will be initially formed from the set of existing
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
