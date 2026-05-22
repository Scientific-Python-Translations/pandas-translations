# ブラウザでpandasを試す（実験用）

[Pyodide](https://pyodide.org/en/stable/) を搭載した `pandas` を使用した実験用の [JupyterLite](https://jupyterlite.readthedocs.io/en/stable/) ライブ シェルをお試しください。

**シェルが初期化され、コマンドを実行できるようになるまでには、しばらく時間がかかる場合があります (30 秒以上)。**

**実行するには、ある程度の帯域幅とリソース (最初の読み込み時に 70 MiB 以上) が必要なので、すべてのデバイスまたはネットワークで正常に動作しない可能性があります。**

<iframe
  src="./lite/repl/index.html?toolbar=1&kernel=python&execute=0&code=import%20pandas%20as%20pd%0Adf%20%3D%20pd.DataFrame%28%7B%22num_legs%22%3A%20%5B2%2C%204%5D%2C%20%22num_wings%22%3A%20%5B2%2C%200%5D%7D%2C%20index%3D%5B%22falcon%22%2C%20%22dog%22%5D%29%0Adf"
  style="width: 100%; max-width: 650px; height: 600px; border: 1px solid #130753;"
></iframe>
