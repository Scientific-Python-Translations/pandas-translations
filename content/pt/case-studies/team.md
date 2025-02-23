# Equipe

## Contribuidores

_pandas_ é feito com amor por mais de [2.000 contribuidores voluntários](https://github.com/pandas-dev/pandas/graphs/contributors).

Se você quiser apoiar o desenvolvimento do pandas, você pode encontrar informações na [página de doações]({{ base_url }}donate.html).

## Mantenedores ativos

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
    {% endfor %}
</div>

## Diversidade e inclusão

> _pandas_ expressamente saúda e encoraja as contribuições de qualquer um que enfrente sub-representação, discriminação na indústria de tecnologia
> ou qualquer pessoa que queira aumentar a diversidade da nossa equipe.
> Identificamos lacunas e obstáculos visíveis na sustentação da diversidade e inclusão nas comunidades de código aberto e somos proativos no aumento de
> da diversidade da nossa equipe.
> Temos um [código de conduta]({{ base_url }}community/coc.html) para garantir um ambiente amigável e acolhedor.
> Por favor, envie um e-mail para [pandas-code-of-conduct-committee](mailto:pandas-coc@googlegroups.com), se você acha que podemos fazer um trabalho
> melhor para atingir este objetivo.

## Governança

Wes McKinney é o Ditador Benevolente Vitalício (BDFL).

A governança do projeto está disponível na [página de governança do projeto]({{ base_url }}about/governance.html).

## Grupos de trabalho

{% for k, workgroup in workgroups.items() %}

### {{ workgroup.name }}

<ul>
    <li><b>Contato:</b>
        <a id="{{ workgroup.name|replace(' ', '-') }}" href="mailto:asp.{{ workgroup.contact }}">asp.{{ workgroup.contact }}</a>
        <script TYPE="text/javascript">
            var mail_tag_id = '{{ workgroup.name|replace(' ', '-') }}';
            var mail_tag_element = document.getElementById( mail_tag_id );
            mail_tag_element.innerHTML = mail_tag_element.innerHTML.replace(/^asp./, "");
            mail_tag_element.setAttribute('href', "mailto:"+mail_tag_element.innerHTML);
        </script>
    </li>
    <li><b>Responsabilidades:</b> {{ workgroup.responsibilities }}</li>
    <li><b>Membros:</b>
        <ul>
            {% for person in workgroup.members %}
                <li>{{ person }}{% if loop.first %} (líder){% endif %}</li>
            {% endfor %}
        </ul>
    </li>
</ul>

{% endfor %}

## Mantenedores inativos

<ul>
    {% for username in maintainers.inactive %}
        {% set person = maintainers.github_info.get(username) %}
        <li>
            <a href="{{ person.blog or person.html_url }}">
                {{ person.name or person.login }}
            </a>
        </li>
    {% endfor %}
</ul>
