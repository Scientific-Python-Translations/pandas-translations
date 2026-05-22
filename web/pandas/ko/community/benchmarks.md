# 벤치마크

벤치마크는 pandas 의 성능을 측정하는 테스트입니다. pandas 와 관련된 벤치마크에는 두 가지
종류가 있습니다:

- 시간 경과에 따른 속도와 메모리 사용량을 측정하는 pandas 내부 벤치마크
- 같은 작업을 수행하는 서로 다른 도구들의 속도나 메모리 사용량을 비교하는
  커뮤니티 벤치마크

## pandas 벤치마크

pandas 벤치마크는 저장소의 [asv_bench](https://github.com/pandas-dev/pandas/tree/main/asv_bench)
디렉터리에 구현되어 있습니다. 이 벤치마크는
[airspeed velocity](https://asv.readthedocs.io/en/latest/) (줄여서 asv) 프레임워크용으로 구현되어 있습니다.

벤치마크는 어떤 pandas 개발자든 로컬에서 실행하실 수 있습니다. `asv run` 명령으로 실행할 수 있으며,
변경 전후로 벤치마크를 실행하여 로컬 변경 사항이
성능에 영향을 주는지 확인하는 데 유용합니다.
성능 테스트 스위트 실행에 대한 자세한 사항은
[여기](https://pandas.pydata.org/docs/dev/development/contributing_codebase.html#running-the-performance-test-suite)에서 확인하실 수 있습니다.

벤치마크는 결정론적이지 않으며, 하드웨어가 다르거나
같은 하드웨어에서도 다른 부하 수준으로 실행하면 결과에 큰
영향이 있다는 점에 유의해 주십시오. 동일한 하드웨어와 거의 동일한 조건에서 같은 코드를
실행해도 결과에 상당한 차이가 발생할 수 있습니다.

## 자동화된 벤치마크 실행기

[asv-runner](https://github.com/pandas-dev/asv-runner/) 저장소는 `main` 브랜치에 대한 (거의) 모든 커밋에 대해
pandas asv 벤치마크 스위트를 자동으로 실행합니다. GitHub Actions 에서 실행됩니다.
자세한 내용은 위에 연결된 저장소를 참고해 주십시오. 결과는 다음에서 확인하실 수 있습니다:

https://pandas-dev.github.io/asv-runner/

## 커뮤니티 벤치마크

pandas 를 포함한 데이터프레임 도구들을 비교하는 주요 벤치마크는 다음과 같습니다:

- [DuckDB (구 H2O.ai) 벤치마크](https://duckdblabs.github.io/db-benchmark/)
- [TPCH 벤치마크](https://pola.rs/posts/benchmarks/)
