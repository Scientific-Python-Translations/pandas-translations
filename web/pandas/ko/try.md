# 브라우저에서 pandas 사용해 보기 (실험적)

[Pyodide](https://pyodide.org/en/stable/)로 구동되는 실험적인 [JupyterLite](https://jupyterlite.readthedocs.io/en/stable/) 실시간 셸에서 `pandas`를 사용해 보십시오.

**셸이 초기화되어 명령을 실행할 준비가 되기까지 다소 시간이 걸릴 수 있습니다 (30초 이상).**

**실행에는 상당한 대역폭과 자원이 필요하므로 (첫 로드 시 70 MiB 이상), 일부 기기나 네트워크에서는 제대로 동작하지 않을 수 있습니다.**

<iframe
  src="./lite/repl/index.html?toolbar=1&kernel=python&execute=0&code=import%20pandas%20as%20pd%0Adf%20%3D%20pd.DataFrame%28%7B%22num_legs%22%3A%20%5B2%2C%204%5D%2C%20%22num_wings%22%3A%20%5B2%2C%200%5D%7D%2C%20index%3D%5B%22falcon%22%2C%20%22dog%22%5D%29%0Adf"
  style="width: 100%; max-width: 650px; height: 600px; border: 1px solid #130753;"
></iframe>
