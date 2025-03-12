# Prueba pandas en tu navegador (experimental)

Prueba nuestra línea de comando experimental [JupyterLite](https://jupyterlite.readthedocs.io/en/stable/) con `pandas`, desarrollada por [Pyodide](https://pyodide.org/en/stable/).

**Por favor considerar que la línea de comando puede tardarse un poco(>30 segundos) en ser iniciada y estar lista para correr comandos.**

**Correrla requiere una cantidad razonable de ancho de banda y recursos(>70 MiB en la primera carga), así que es posible que no funcione adecuadamente en todos los dispositivos o redes.**

<iframe
  src="./lite/repl/index.html?toolbar=1&kernel=python&execute=0&code=import%20pandas%20as%20pd%0Adf%20%3D%20pd.DataFrame%28%7B%22num_legs%22%3A%20%5B2%2C%204%5D%2C%20%22num_wings%22%3A%20%5B2%2C%200%5D%7D%2C%20index%3D%5B%22falcon%22%2C%20%22dog%22%5D%29%0Adf"
  style="width: 100%; max-width: 650px; height: 600px; border: 1px solid #130753;"
></iframe>
