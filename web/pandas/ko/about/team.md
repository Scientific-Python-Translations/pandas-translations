# 팀

## 기여자

_pandas_ 는 2,000명이 넘는 [자원봉사 기여자](https://github.com/pandas-dev/pandas/graphs/contributors)들의 사랑으로 만들어집니다.

pandas 개발을 지원하고 싶으시다면, [기부 페이지]({{ base_url }}donate.html)에서 관련 정보를 확인하실 수 있습니다.

## 활동 중인 메인테이너

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

## 다양성과 포용

> > _pandas_ 는 기술 업계에서 과소대표되었거나 차별을 받은 분들,
> > 또는 팀의 다양성을 늘리는 데 기여하고자 하는 모든 분의 기여를 명시적으로 환영하고 권장합니다.
> > 저희는 오픈 소스 커뮤니티에서 다양성과 포용을 지속시키는 데 있어 눈에 띄는 공백과 장애물이 있음을 인지하고,
> > 팀의 다양성을 늘리는 데 적극적으로 노력하고 있습니다.
> > 친근하고 환영하는 환경을 보장하기 위해 [행동 강령]({{ base_url }}community/coc.html)을 마련해 두었습니다.
> > 이 목표 달성에 더 나아질 수 있는 점이 있다고 생각하신다면,
> > [pandas-code-of-conduct-committee](mailto:pandas-coc@googlegroups.com)로 이메일을 보내 주십시오.

## 거버넌스

프로젝트 거버넌스는 [프로젝트 거버넌스 페이지]({{ base_url }}about/governance.html)에서 확인하실 수 있습니다.

## 워킹 그룹

{% for k, workgroup in workgroups.items() %}

### {{ workgroup.name }}

<ul>
    <li><b>연락처:</b>
        <a id="{{ workgroup.name|replace(' ', '-') }}" href="mailto:asp.{{ workgroup.contact }}">asp.{{ workgroup.contact }}</a>
        <script TYPE="text/javascript">
            var mail_tag_id = '{{ workgroup.name|replace(' ', '-') }}';
            var mail_tag_element = document.getElementById( mail_tag_id );
            mail_tag_element.innerHTML = mail_tag_element.innerHTML.replace(/^asp./, "");
            mail_tag_element.setAttribute('href', "mailto:"+mail_tag_element.innerHTML);
        </script>
    </li>
    <li><b>담당 업무:</b> {{ workgroup.responsibilities }}</li>
    <li><b>구성원:</b>
        <ul>
            {% for person in workgroup.members %}
                <li>{{ person }}{% if loop.first %} (팀장){% endif %}</li>
            {% endfor %}
        </ul>
    </li>
</ul>

{% endfor %}

## 활동을 중단한 메인테이너

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
