# 인용과 로고

## pandas 인용하기

_pandas_를 학술 출판물에서 사용하신다면, 공개된 소프트웨어와 다음 논문을 인용해 주시면
감사하겠습니다:

- [pandas on Zenodo](https://zenodo.org/search?page=1&size=20&q=conceptrecid%3A%223509134%22&sort=-version&all_versions=True),
  Zenodo에서 pandas를 찾으신 후, 사용 중이신 버전의 인용 정보로 교체해 주십시오. 아래 예시처럼 전체 저자 목록을 "The pandas development team"으로 바꾸실 수 있습니다. 아래 예시처럼, Zenodo의 전체 저자 목록을 "The pandas development team"으로
  바꾸실 수 있습니다.

  ```
    @software{reback2020pandas,
        author       = {The pandas development team},
        title        = {pandas-dev/pandas: Pandas},
        month        = feb,
        year         = 2020,
        publisher    = {Zenodo},
        version      = {latest},
        doi          = {10.5281/zenodo.3509134},
        url          = {https://doi.org/10.5281/zenodo.3509134}
    }
  ```

- [Data structures for statistical computing in python](https://pub.curvenote.com/01908378-3686-7168-a380-d82bbf21c799/public/mckinney-57fc0d4e8a08cd7f26a4b8bf468a71f4.pdf),
  McKinney, Proceedings of the 9th Python in Science Conference, Volume 445, 2010.

  ```
    @InProceedings{ mckinney-proc-scipy-2010,
      author    = { {W}es {M}c{K}inney },
      title     = { {D}ata {S}tructures for {S}tatistical {C}omputing in {P}ython },
      booktitle = { {P}roceedings of the 9th {P}ython in {S}cience {C}onference },
      pages     = { 56 - 61 },
      year      = { 2010 },
      editor    = { {S}t\'efan van der {W}alt and {J}arrod {M}illman },
      doi       = { 10.25080/Majora-92bf1922-00a }
    }
  ```

## 브랜드와 로고

_pandas_ 프로젝트 이름을 사용하실 때에는, 문장 첫머리라 하더라도 소문자로 표기해 주십시오.

_pandas_의 공식 로고는 다음과 같습니다:

### 기본 로고

<table class="table logo">
    <tbody><tr>
        <td>
            <img alt="" src="{{ base_url }}static/img/pandas.svg"/>
        </td>
        <td style="background-color: #150458">
            <img alt="" src="{{ base_url }}static/img/pandas_white.svg"/>
        </td>
    </tr>
</tbody></table>

### 보조 로고

<table class="table logo">
    <tbody><tr>
        <td>
            <img alt="" src="{{ base_url }}static/img/pandas_secondary.svg"/>
        </td>
        <td style="background-color: #150458">
            <img alt="" src="{{ base_url }}static/img/pandas_secondary_white.svg"/>
        </td>
    </tr>
</tbody></table>

### 로고 마크

<table class="table logo">
    <tbody><tr>
        <td>
            <img alt="" src="{{ base_url }}static/img/pandas_mark.svg"/>
        </td>
        <td style="background-color: #150458">
            <img alt="" src="{{ base_url }}static/img/pandas_mark_white.svg"/>
        </td>
    </tr>
</tbody></table>

### 로고 사용

pandas 로고는 풀 컬러와 흰색 강조의 두 가지 버전이 있습니다.
풀 컬러 로고는 흰 배경에서만 사용해야 합니다.
흰색 강조 로고는 대비되는 색상의 배경 위에 사용해야 합니다.

로고를 사용하실 때에는 다음 지침을 따라 주십시오:

- 기본 로고는 인쇄 시 1인치 미만, 웹에서 72px 미만의 크기로 사용해서는 안 됩니다
- 보조 로고는 인쇄 시 0.75인치 미만, 웹에서 55px 미만의 크기로 사용해서는 안 됩니다
- 로고 주위에 충분한 여백을 두십시오 (위·아래·좌·우에 로고 높이만큼의 여백 확보)
- 로고의 비율을 바꿔 왜곡하지 마십시오
- 로고 위에 텍스트나 다른 요소를 겹쳐 놓지 마십시오

### 색상

<table class="table">
    <tbody><tr>
        <td style="text-align: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <circle cx="50" cy="50" r="50" fill="#150458"/>
            </svg>
            
            <br/>
            <b style="color: #150458;">파란색</b><br/>
            RGB: R21 G4 B88<br/>
            HEX: #150458
        </td>
        <td style="text-align: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <circle cx="50" cy="50" r="50" fill="#ffca00"/>
            </svg>
            
            <br/>
            <b style="color: #150458;">노란색</b><br/>
            RGB: R255 G202 B0<br/>
            HEX: #FFCA00
        </td>
        <td style="text-align: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <circle cx="50" cy="50" r="50" fill="#e70488"/>
            </svg>
            
            <br/>
            <b style="color: #150458;">분홍색</b><br/>
            RGB: R231 G4 B136<br/>
            HEX: #E70488
        </td>
    </tr>
</tbody></table>
