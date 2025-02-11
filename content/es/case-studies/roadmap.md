# Hoja de ruta

Esta página proporciona una descripción general de los temas principales en el desarrollo de pandas. Cada uno de estos elementos requiere una cantidad relativamente grande de esfuerzo para ser implementada. Esto se puede lograr más rápidamente con financiación dedicada o dependiendo del interés de los contribuyentes.

Que un elemento esté en la hoja de ruta no significa que _necesariamente_ sucederá, incluso con financiación ilimitada. Durante el período de implementación
es posible descubrir problemas que impidan la adopción de la función.

Además, un elemento que _no_ esté en la hoja de ruta no lo excluye de su inclusión en pandas. La hoja de ruta está destinada a cambios fundamentales más importantes en el proyecto que probablemente requieran meses o años de tiempo de desarrollo. Los elementos de menor alcance seguirán siendo rastreados en nuestro [rastreador de problemas] (https://github.com/pandas-dev/pandas/issues).

La hoja de ruta se define como un conjunto de importantes propuestas de mejora denominadas PDEP.
Para obtener más información sobre los PDEP y cómo enviar uno, consulte [PEDP-1]({{ base_url }}pdeps/0001-Purpose-and-guidelines.html).

## Propuestas de mejora (PDEPs)

{% for pdep_type in ["Under discussion", "Accepted", "Implemented", "Rejected"] %}

<h3 id="pdeps-{{pdep_type}}">{{ pdep_type.replace("_", " ").capitalize() }}</h3>

<ul>
{% for pdep in pdeps[pdep_type] %}
    <li><a href="{% if not pdep.url.startswith("http") %}{{ base_url }}{% endif %}{{ pdep.url }}">{{ pdep.title }}</a></li>
{% else %}
    <li>Actualmente no existen PDEP con este estado</li>
{% endfor %}</ul>

{% endfor %}

## Puntos de la hoja de ruta pendientes de un PDEP

<div class="alert alert-warning" role="alert">
  pandas está en proceso de trasladar puntos de la hoja de ruta a los PDEP (implementados en agosto de 2022). Durante la transición, algunos puntos de la hoja de ruta existirán como PDEP, mientras que otros existirán como secciones a continuación.
</div>

### Extensibilidad

Los puntos de extensión de pandas (`extending.extension-types`) permiten extender los tipos NumPy con tipos de datos personalizados y almacenamiento en matriz.
Pandas utiliza tipos de extensión internamente y proporciona una interfaz para que bibliotecas de terceros definan sus propios tipos de datos personalizados.

Muchas partes de pandas todavía convierten datos sin querer en una matriz NumPy. Estos problemas son especialmente pronunciados en el caso de datos anidados.

Nos gustaría mejorar el manejo de matrices de extensión en toda la biblioteca, haciendo que su comportamiento sea más consistente con el manejo de matrices NumPy. Haremos esto limpiando las partes internas de pandas y agregando nuevos métodos a la interfaz de la matriz de extensiones.

### Tipo de datos de texto

Actualmente, pandas almacena datos de texto en una matriz NumPy de tipo `objeto`.
La implementación actual tiene dos inconvenientes principales: Primero, el tipo `objeto` no es específico para cadenas de texto: cualquier objeto Python se puede almacenar en una matriz de tipo `objeto`, no solo cadenas de texto. Segundo: esto no es eficiente.
El modelo de memoria NumPy no es especialmente adecuado para datos de texto de longitud variable.

Para resolver el primer problema, proponemos un nuevo tipo de extensión para datos de cadenas de texto. Inicialmente, esto será opcional y los usuarios podrán solicitar este tipo explícitamente utilizando `dtype="string"`. La matriz que respalda esta tipo de cadena de texto puede ser inicialmente la implementación actual: una matriz de tipo `objeto` de NumPy de cadenas de Python.

Para resolver el segundo problema (rendimiento), exploraremos bibliotecas de matrices en memoria alternativas (por ejemplo, Apache Arrow). Como parte del trabajo, es posible que necesitemos implementar ciertas operaciones esperadas por los usuarios de pandas (por ejemplo, el algoritmo utilizado en `Series.str.upper`). Ese trabajo puede realizarse fuera de pandas.

### Interoperabilidad con Apache Arrow

[Apache Arrow](https://arrow.apache.org) es una plataforma de desarrollo multi-lenguaje para manejo de datos en memoria. Los tipos lógicos de Arrow están estrechamente alineados con los casos de uso típicos de pandas.

Nos gustaría brindar soporte mejor integrado para la memoria Arrow y los tipos de datos dentro de pandas. Esto nos permitirá aprovechar sus capacidades de Entrada/Salida y brindar una mejor interoperabilidad con otros lenguajes y bibliotecas usando Arrow.

### Desacoplamiento de indexación y otros procesos internos

El código para obtener y establecer valores en las estructuras de datos de pandas necesita refactorización. En particular, debemos separar claramente el código que convierte llaves (por ejemplo, el argumento de `DataFrame.loc`) en posiciones del código que usa estas posiciones para obtener o establecer valores. Esto está relacionado con la reescritura propuesta de BlockManager. Actualmente, el BlockManager a veces utiliza indexación basada en etiquetas, en lugar de basada en posiciones. Proponemos que solo funcione con indexación posicional y que la traducción de llaves a posiciones se realice íntegramente en un nivel superior.

La indexación es una API complicada con muchas sutilezas. Esta refactorización requerirá cuidado.
y atención. Los siguientes principios deberían inspirar la refactorización del código de indexación y deberían dar como resultado un código más limpio, más simple y con mayor rendimiento.

1. La indexación de etiquetas nunca debe implicar buscar dos veces en un eje las mismas etiquetas.
   Esto implica que cualquier paso de validación debe:

- limitar la validación a características generales (por ejemplo, tipo/estructura de la llave/índice), o
- reutilizar el resultado para la indexación real.

2. Los indexadores nunca deben confiar en una llamada explícita a otros indexadores.
   Por ejemplo, está bien que algún método interno de `.loc` llame a algún método interno de `__getitem__` (o de su clase base común), pero nunca en el flujo de código de `.loc` debería aparecer `the_obj[algo]`.

3. La ejecución de la indexación posicional nunca debe involucrar etiquetas (como lamentablemente sucede actualmente).
   Es decir, el flujo de código de una llamada getter (o una llamada setter en la que el lado derecho no está indexado) a `.iloc` nunca debe involucrar los ejes del objeto de ninguna manera.

4. La indexación nunca debe implicar acceder/modificar valores (es decir, actuar sobre `._data` o `.values`) más de una vez.
   Por tanto, es necesario desacoplar claramente los siguientes pasos:

- encontrar posiciones a las que necesitamos acceder/modificar en cada eje
- (si estamos accediendo) derivar el tipo de objeto que necesitamos devolver (dimensionalidad)
- realmente acceder/modificar los valores
- (si estamos accediendo) construir el objeto de retorno

5. Como corolario del desacoplamiento entre 4.i y 4.iii, cualquier código que se ocupe de cómo se almacenan los datos (incluida cualquier combinación de manejo de múltiples tipos de datos y almacenamiento disperso, categóricos y tipos de terceros) debe ser independiente del código que se ocupa de identificar las filas/columnas afectadas, y debe realizarse solo una vez que se completa el paso 4.i.

- En particular, dicho código probablemente no debería estar en `pandas/core/indexing.py`
- ... y no debe depender de ninguna manera del tipo(s) de ejes (por ejemplo, no hay casos especiales de `MultiIndex`)

6. Como corolario del punto 1.i, las (sub)clases `Index` deben proporcionar métodos separados para cualquier verificación de validez deseada de las etiquetas que no implique una búsqueda real, por un lado, y para cualquier conversión/adaptación/búsqueda requerida de etiquetas, por el otro.

7. El uso de prueba y error debe ser limitado, y en cualquier caso, restringido para detectar únicamente excepciones.
   que realmente se esperan (normalmente "KeyError").

- En particular, el código nunca debe generar (intencionalmente) nuevas excepciones en la parte `except` de un `try... exception`

8. Cualquier parte del código que no sea específica de setters y getters debe compartirse, y cuando se esperan pequeñas diferencias en el comportamiento (por ejemplo, obtener con `.loc` genera excepciones cuando hay de etiquetas faltantes, asignar un valor aún no lo hace), se pueden administrar con un parámetro específico.

### Operaciones aceleradas por Numba

[Numba](https://numba.pydata.org) es un compilador JIT para código Python.
Nos gustaría proporcionar formas para que los usuarios apliquen sus propias funciones optimizadas de Numba donde pandas acepta funciones definidas por el usuario (por ejemplo, `Series.apply`, `DataFrame.apply`, `DataFrame.applymap` y en contextos de ventana y de agrupado por). Esto mejorará el rendimiento de las funciones definidas por el usuario en estas operaciones al permanecer dentro del código compilado.

### Mejoras en la documentación

Nos gustaría mejorar el contenido, la estructura y la presentación de la documentación de pandas. Algunos objetivos específicos incluyen

- Renovar el tema HTML con un diseño moderno y adaptable (`15556`)
- Mejorar la documentación de "Introducción", diseñando y escribiendo rutas de aprendizaje para usuarios de diferentes orígenes (por ejemplo, nuevos en programación, familiarizados con otros lenguajes como R, ya familiarizados con Python).
- Mejorar la organización general de la documentación y las subsecciones específicas de la documentación para facilitar la navegación y la búsqueda de contenido.

### Evaluación de desempeño

Pandas utiliza [airspeed velocity](https://asv.readthedocs.io/en/stable/) para monitorear las regresiones de rendimiento. ASV en sí es una herramienta fabulosa, pero requiere algo de trabajo adicional para integrarse en el flujo de trabajo de un proyecto de código abierto.

La organización del [asv-runner](https://github.com/asv-runner), actualmente formada por mantenedores de pandas, proporciona herramientas creadas sobre ASV. Contamos con una máquina física para ejecutar una serie de evaluaciones comparativas del proyecto y herramientas que administran las ejecuciones de las evaluaciones comparativas e informan sobre los resultados.

Nos gustaría financiar mejoras y mantenimiento de estas herramientas para

- Sé más estable. Actualmente, se les da mantenimiento durante las noches y los fines de semana cuando el mantenedor tiene tiempo libre.
- Ajuste el sistema para obtener puntos de referencia para mejorar la estabilidad, siguiendo
  <0>
- Cree un bot de GitHub para solicitar ejecuciones de ASV _antes_ de fusionar un PR.
  Actualmente, las pruebas de rendimiento sólo se realizan en las noches.
