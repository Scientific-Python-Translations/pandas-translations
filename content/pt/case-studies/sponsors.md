# Patrocinadores

## NumFOCUS

![](https://numfocus.org/wp-content/uploads/2018/01/optNumFocus_LRG.png)

_pandas_ é um projeto patrocinado pela [NumFOCUS](https://numfocus.org/), uma instituição de caridade sem fins lucrativos nos Estados Unidos que segue a legislação 501(c)(3) daquele país.
A NumFOCUS fornece ao _pandas_ apoio fiscal, legal e administrativo para ajudar a garantir a saúde e a sustentabilidade do projeto. Visite numfocus.org para mais informações.

Doações para o _pandas_ são gerenciadas pela NumFOCUS. Para doadores nos Estados Unidos, sua doação é dedutível para fins fiscais na medida oferecida pela lei. Como em qualquer doação, você deve consultar seu conselheiro fiscal sobre sua situação fiscal em particular.

## Become a sponsor

As a free and open source project, _pandas_ relies on the support of the community of users for its development.
If you work for an organization that uses and benefits from _pandas_, please consider supporting pandas. There
are different ways, such as employing people to work on pandas, funding the project, or becoming a
[NumFOCUS sponsor](https://numfocus.org/sponsors) to support the broader ecosystem. Please contact us at
[admin@numfocus.org](mailto:admin@numfocus.org) to discuss.

## Institutional partners

Institutional partners are companies and universities that support the project by employing contributors.
Current institutional partners include:

<ul>
    {% for company in sponsors.active if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## Patrocinadores

Sponsors are organizations that provide funding for pandas. Current sponsors include:

<ul>
    {% for company in sponsors.active if company.kind == "regular" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## In-kind sponsors

In-kind sponsors are organizations that support pandas development with goods or services.
Current in-kind sponsors include:

<ul>
    {% for company in sponsors.inkind %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## Past institutional partners

<ul>
    {% for company in sponsors.past if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a></li>
    {% endfor %}
</ul>
