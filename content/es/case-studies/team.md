# Equipo

## Colaboradores

_pandas_ está hecho con amor por más de [2000 colaboradores voluntarios] (https://github.com/pandas-dev/pandas/graphs/contributors).

Si desea apoyar el desarrollo de pandas, puede encontrar información en la [página de donaciones]({{ base_url }}donate.html).

## Mantenedores activos

<div class="card-group maintainers">
    {% for username in maintainers.active %}
        {% set person = maintainers.github_info.get(username) %}
        <div class="card">
            <img class="card-img-top" alt="" src="{{ person.avatar_url }}"/>
            <div class="card-body">
                <h6 class="card-title">
                    {% if person.blog %}
                        <a href="{{ person.blog }}">
                            {{ person.name or person.login }}
                        </a>
                    {% else %}
                        {{ person.name or person.login }}
                    {% endif %}
                </h6>
                <p class="card-text small"><a href="{{ person.html_url }}">{{ person.login }}</a></p>
            </div>
        </div>
    {% endfor %}</div>

## Diversidad e inclusión

> _pandas_ expresamente agradece y alienta las contribuciones de cualquier persona que enfrente falta de representación, discriminación en la industria de la tecnología o cualquier persona que esté dispuesta a aumentar la diversidad de nuestro equipo.
> Hemos identificado brechas y obstáculos visibles para mantener la diversidad y la inclusión en las comunidades de código abierto, y somos proactivos para aumentar la diversidad de nuestro equipo.
> Tenemos un [código de conducta]({{ base_url }}community/coc.html) para garantizar un ambiente amigable y acogedor.
> Puede enviar un correo electrónico a [pandas-code-of-conduct-committee](mailto:pandas-coc@googlegroups.com), si cree que podemos hacer un mejor trabajo para lograr este objetivo.

## Gobernanza

Wes McKinney es el dictador benévolo vitalicio (Benevolent Dictator for Life  - BDFL).

La gobernanza del proyecto está disponible en la [página de gobernanza del proyecto]({{ base_url }}about/governance.html).

## Grupos de Trabajo

{% for k, workgroup in workgroups.items() %}

### {{ workgroup.name }}

<ul>
    <li><b>Contacto:</b>
        <a id="{{ workgroup.name|replace(' ', '-') }}" href="mailto:asp.{{ workgroup.contact }}">asp.{{ workgroup.contact }}</a>
        <script TYPE="text/javascript">
            var mail_tag_id = '{{ workgroup.name|replace(' ', '-') }}';
            var mail_tag_element = document.getElementById( mail_tag_id );
            mail_tag_element.innerHTML = mail_tag_element.innerHTML.replace(/^asp./, "");
            mail_tag_element.setAttribute('href', "mailto:"+mail_tag_element.innerHTML);
        </script>
    </li>
    <li><b>Responsibilidades:</b> {{ workgroup.responsibilities }}</li>
    <li><b>Miembros:</b>
        <ul>
    {% for person in workgroup.members %}
                <li>{{ person }}{% if loop.first %} (lead){% endif %}</li>
            {% endfor %}
        </ul>
    </li>
</ul>

{% endfor %}

## Mantenedores inactivos

<ul>
    {% for username in maintainers.inactive %}
        {% set person = maintainers.github_info.get(username) %}
        <li>
            <a href="{{ person.blog or person.html_url }}">
                {{ person.name or person.login }}
            </a>
        </li>
    {% endfor %}</ul>
