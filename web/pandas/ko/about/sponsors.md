# 후원자

## NumFOCUS

![](https://numfocus.org/wp-content/uploads/2018/01/optNumFocus_LRG.png)

_pandas_ 는 미국의 501(c)(3) 비영리 자선 단체 [NumFOCUS](https://numfocus.org/)의 후원 프로젝트(Sponsored Project)입니다.
NumFOCUS 는 _pandas_ 프로젝트의 건전성과 지속 가능성을 확보할 수 있도록 재정, 법무, 행정
지원을 제공합니다. 자세한 사항은 numfocus.org 를 참고해 주십시오.

_pandas_ 에 대한 기부는 NumFOCUS 가 관리합니다. 미국 거주 기부자의 경우, 기부금은 법이 정한 한도
내에서 세액 공제 대상이 됩니다. 모든 기부와 마찬가지로, 본인의 세금 관련 상황에 대해서는 세무 자문 전문가와 상의해 주십시오.

## 후원자가 되기

무료 오픈 소스 프로젝트로서, _pandas_ 는 개발을 위해 사용자 커뮤니티의 지원에 의존합니다.
_pandas_ 를 사용하고 그로부터 혜택을 보는 조직에서 일하신다면, pandas 지원을 고려해 주십시오. pandas 작업을 위해 사람을 고용하시거나, 프로젝트에 자금을 지원하시거나,
더 넓은 생태계를 지원하기 위해 [NumFOCUS 후원자](https://numfocus.org/sponsors)가 되시는 등
여러 가지 방법이 있습니다. 논의를 원하시면
[admin@numfocus.org](mailto:admin@numfocus.org)로 연락해 주십시오.

## 기관 파트너

기관 파트너는 기여자를 직원으로 고용함으로써 프로젝트를 지원하는 기업과 대학을 말합니다.
현재 기관 파트너는 다음과 같습니다:

<ul>
    {% for company in sponsors.active if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## 후원자

후원자는 pandas 에 자금을 지원하는 조직을 말합니다. 현재 후원자는 다음과 같습니다:

<ul>
    {% for company in sponsors.active if company.kind == "regular" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## 물품·서비스 후원자

물품·서비스 후원자는 물품이나 서비스로 pandas 개발을 지원하는 조직을 말합니다.
현재 물품·서비스 후원자는 다음과 같습니다:

<ul>
    {% for company in sponsors.inkind %}
        <li><a href="{{ company.url }}">{{ company.name }}</a>: {{ company.description }}</li>
    {% endfor %}
</ul>

## 이전 기관 파트너

<ul>
    {% for company in sponsors.past if company.kind == "partner" %}
        <li><a href="{{ company.url }}">{{ company.name }}</a></li>
    {% endfor %}
</ul>
