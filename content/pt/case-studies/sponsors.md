# Patrocinadores

## NumFOCUS

![](https://numfocus.org/wp-content/uploads/2018/01/optNumFocus_LRG.png)

_pandas_ é um projeto patrocinado pela [NumFOCUS](https://numfocus.org/), uma instituição de caridade sem fins lucrativos nos Estados Unidos que segue a legislação 501(c)(3) daquele país.
A NumFOCUS fornece ao _pandas_ apoio fiscal, legal e administrativo para ajudar a garantir a saúde e a sustentabilidade do projeto. Visite numfocus.org para mais informações.

Doações para o _pandas_ são gerenciadas pela NumFOCUS. Para doadores nos Estados Unidos, sua doação é dedutível para fins fiscais na medida oferecida pela lei. Como em qualquer doação, você deve consultar seu conselheiro fiscal sobre sua situação fiscal em particular.

## Seja um patrocinador

Como um projeto gratuito e de código aberto, _pandas_ depende do apoio da comunidade de usuários para seu desenvolvimento.
Se você trabalha para uma organização que usa e se beneficia de _pandas_, por favor considere apoiar o pandas. Existem maneiras diferentes de fazer isso, tais como empregar pessoas para trabalhar no pandas, financiar o projeto, ou tornar-se um [patrocinador da NumFOCUS](https://numfocus.org/sponsors) para apoiar o ecossistema em geral. Entre em contato conosco em
[admin@numfocus.org](mailto:admin@numfocus.org) para discutir.

## Parceiros institucionais

Os parceiros institucionais são empresas e universidades que apoiam o projeto empregando contribuidores.
Os parceiros institucionais atuais incluem:

<ul>
    {% for company in sponsors.active if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## Patrocinadores

Os patrocinadores são organizações que financiam o pandas. Os patrocinadores atuais incluem:

<ul>
    {% for company in sponsors.active if company.kind == "regular" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## Patrocinadores em espécie

Patrocinadores em espécie são organizações que apoiam o desenvolvimento de pandas com bens ou serviços.
Os patrocinadores em espécie atuais incluem:

<ul>
    {% for company in sponsors.inkind %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## Parceiros institucionais anteriores

<ul>
    {% for company in sponsors.past if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a></li>
    {% endfor %}
</ul>
