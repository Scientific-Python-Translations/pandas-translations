# Patrocinadores

## NumFOCUS

![](https://numfocus.org/wp-content/uploads/2018/01/optNumFocus_LRG.png)

_pandas_ es un proyecto patrocinado de [NumFOCUS](https://numfocus.org/), una organización benéfica sin fines de lucro 501(c)(3) en los Estados Unidos.
NumFOCUS proporciona a _pandas_ apoyo fiscal, legal y administrativo para ayudar a garantizar la
salud y sostenibilidad del proyecto. Visita numfocus.org para obtener más información.

Las donaciones a _pandas_ son gestionadas por NumFOCUS. Para las donaciones en los Estados Unidos, su donación es deducible de impuestos en la medida de lo previsto por la ley. Como ocurre con cualquier donación, debes consultar con tu asesor fiscal sobre tu situación fiscal particular.

## Conviértase en patrocinador

Como proyecto gratuito y de código abierto, _pandas_ cuenta con el apoyo de la comunidad de usuarios para su desarrollo.
Si trabaja para una organización que utiliza y se beneficia de _pandas_, considere apoyar pandas. Hay diferentes formas de hacerlo, como contratar personas para trabajar con pandas, financiar el proyecto o convertirse en un
[Patrocinador de NumFOCUS](https://numfocus.org/sponsors) para apoyar el ecosistema. Por favor contáctenos al
[admin@numfocus.org](mailto:admin@numfocus.org) para discutir.

## Socios institucionales

Los socios institucionales son empresas y universidades que apoyan el proyecto empleando colaboradores.
Los socios institucionales actuales incluyen:

<ul>
    {% for company in sponsors.active if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}</ul>

## Patrocinadores

Los patrocinadores son organizaciones que proporcionan financiación para los pandas. Los patrocinadores actuales incluyen:

<ul>
    {% for company in sponsors.active if company.kind == "regular" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}</ul>

## Patrocinadores en especie

Los patrocinadores en especie son organizaciones que apoyan el desarrollo de pandas con bienes o servicios.
Los patrocinadores actuales en especie incluyen:

<ul>
    {% for company in sponsors.inkind %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}</ul>

## Antiguos socios institucionales

<ul>
    {% for company in sponsors.past if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a></li>
    {% endfor %}</ul>
