---
draft: false
date: 2023-09-10
description: > 
  Entrada de blog de cómo utilizar el lenguaje YAML y cómo aplicarlo en Obsidian y MKdocs
authors:
  - ciro
categories:
  - General
tags: [Lenguajes]
readtime: 15
hide: []
---

# YAML

Este artículo es una guía con ejemplos prácticos de cómo utilizar YAML para generar metadatos en archivos `.md` en Obsidian y Mkdocs además de cómo utilizarlos para generar archivos de configuración en otros lenguajes de programación.

<!-- more -->

## ¿Qué es?

YAML Ain't Markup Language (YAML) es un lenguaje de serialización de datos diseñado para ser directamente escribible y legible por humanos. 

A menudo se utiliza como formato para archivos de configuración, pero sus capacidades de serialización de objetos lo convierten en un sustituto viable para lenguajes como JSON. 

YAML tiene un amplio soporte de lenguaje y se mapea fácilmente en estructuras de datos nativas. También es fácil de leer para los humanos, por lo que es una buena opción para archivos de configuración. El acrónimo YAML era la abreviatura de Yet Another Markup Language. Pero sus mantenedores lo rebautizaron como YAML Ain't Markup Language para poner más énfasis en sus características orientadas a los datos.

Similar a Python, YAML utiliza nuevas líneas e indentación sintácticas significativas en su sintaxis. Sin embargo, a diferencia de Python, YAML no permite caracteres de tabulación literales para la sangría.

Las extensiones de los archivos no influyen en su contenido. Puedes guardar contenido YAML en archivos con cualquier extensión: `.yml`, `.yaml` o cualquier otra, pero la recomendación de uno de sus mantenedores es utilizar `.yaml` siempre que sea posible.

## Fundamentos

La sintaxis de YAML es muy parecida a la estructura de datos de  **diccionarios**  en Python. Esta estructura se basa en el par `key: value`, donde para acceder al `value`, es necesario utilizar la `key`.

Veamos brevemente un archivo YAML.

```yaml title="example1.yaml" 
---
refran: "el tiempo es oro"
nombre: "pepe pecas"
pi: 3.14159
navidad: true
num_cartas: 40
familiares:
  - lois
  - hal
  - francis
  - reese
  - malcolm
  - dewey
  - jamie
campamento:
  lugar: bosque
  lata: 3
  cuerda: 5
  mochila:
    linterna: 1
    comida: "barras energeticas"
  extras: botiquin
```

El archivo comienza con tres guiones. Estos guiones indican el inicio de un nuevo documento YAML. YAML admite múltiples documentos, y los analizadores sintácticos compatibles reconocerán cada conjunto de guiones como el comienzo de uno nuevo.
Después, vemos la construcción que compone la mayor parte de un documento YAML típico: un par key-value. El elemento`refran` es una key  que apunta a un value de tipo cadena: `el tiempo es oro`.   YAML admite más que solo valores de tipo cadena. El archivo comienza con seis pares key-value. Tienen cuatro tipos de datos diferentes. `refran` y `nombre` son cadenas (strings), `pi` es un número de punto flotante (floating-point number), `navidad` es un booleano (boolean), `latas` es un número entero (integer). Se pueden encerrar los strings entre comillas simples(`''`) o dobles(`""`) o sin comillas. YAML reconoce los números sin comillas como enteros o de putno flotante. El séptimo elemento es un arreglo (array). El elemento `familiares` tiene siete elementos, cada uno denotado por un guión de apertura. He indentado los elementos de `familiares` con dos espacios. La indentación es la forma en que YAML denota el anidamiento. El número de espacios puede variar de un archivo a otro, pero las tabulaciones no están permitidas. Más adelante veremos cómo funciona la indentación. Por último, vemos `campamento`, que tiene cinco elementos más en su interior, cada uno de ellos con indentación. Podemos ver `campamento` como un diccionario que contiene dos cadenas, dos enteros y otro diccionario. YAML permite anidar valores clave y mezclar tipos.

## Indentación  y espacio en blanco

Los espacios en blanco forman parte del formato de YAML. A menos que se indique lo contrario, las nuevas líneas indican el final de un campo. Un documento YAML se estructura con indentación. El nivel de indentación puede ser de uno o varios espacios. La especificación prohíbe los tabuladores porque las herramientas los tratan de forma diferente. Considere el siguiente ejemplo. Los elementos que contiene están indentados con dos espacios.

```yaml title="example.yaml" 
nombre: pepe
edad: 25
estudios:
  licenciatura: comercio
  maestria: economia
```

Veamos cómo un simple script de Python visualiza este documento. Lo guardaremos como un archivo llamado `example.yml`. El paquete PyYAML mapeará el flujo del archivo YAML en un diccionario. Iteraremos a través del conjunto más externo de keys y values e imprimiremos la key y la representación de cadena de cada valor.

???+ note "Nota:"
    Si no tiene instalado PyYAML, lo puede hacer con el comando:
    ``` python
    pip install pyyaml
    ```

```python title="readyml.py" 
import yaml 

if __name__ == '__main__':
    yml_file = "example.yaml"
    with open(yml_file, 'r') as archivo:
        dictionary = yaml.safe_load(archivo)
        
    print(dictionary)
    
    for key, value in dictionary.items():
        print (key + " : " + str(value))
```
La salida es:

```plain 
{'nombre': 'pepe', 'edad': 25, 'estudios': {'licenciatura': 'comercio', 'maestria': 'economia'}}
nombre : pepe
edad : 25
estudios : {'licenciatura': 'comercio', 'maestria': 'economia'}
```

Podemos ver en la salida que nuestro documento es un diccionario de Python con dos cadenas y otro diccionario anidado dentro de él. El simple anidamiento de YAML nos da el poder de construir objetos sofisticados.

## Comentarios
Los comentarios empiezan por el símbolo almohadilla (`#`). Pueden aparecer después de un valor del documento u ocupar una línea entera.

```yaml 
# Este es un comentario de línea completa
nombre: pepe # Este tambien es un comentario
```

Los comentarios son para los humanos. Los procesadores YAML los descartarán.

## Tipos de datos

Los valores de los pares key-values de YAML son escalares. Actúan como los tipos escalares de lenguajes como Perl, Javascript y Python. Normalmente basta con encerrar las cadenas entre comillas, dejar los números sin comillas y dejar que el analizador lo resuelva. Pero eso es sólo la punta del iceberg. YAML es capaz de mucho más.

### Pares Key-Value y diccionarios

El key-value es el elemento básico de YAML. Cada elemento de un documento YAML es miembro de al menos un diccionario. La key es siempre una cadena. El value es un escalar, por lo que puede ser cualquier tipo de dato. Así, como ya hemos visto, el valor puede ser una cadena, un número u otro diccionario.

### Tipos numéricos

YAML reconoce los tipos numéricos. Anteriormente vimos el punto flotante y los enteros. YAML soporta otros tipos numéricos.

Un entero puede ser decimal, hexadecimal u octal. `0x` indica que un valor es hexadecimal, y un cero a la izquierda indica un valor octal.  YAML admite números de punto flotante  y exponencial. Podemos representar Not-A-Number (NAN) o el infinito.

```yaml 
entero: 12345
hexadecimal: 0x12d4
octal: 023332
flotante: 1230.15
exponencial: 12.3015e+05
infinito: .inf
infinito_neg: -.Inf
not_a_number: .NAN
```

### Cadenas

Las cadenas YAML son Unicode. En la mayoría de las situaciones, no es necesario especificarlas entre comillas. Pero si queremos que se manejen las secuencias de escape, tenemos que utilizar comillas dobles. 

```yaml 
cadena: Esta es una cadena normal
cadena_esc: "Esta no es una cadena normal\n"
```

Los valores de cadena pueden abarcar más de una línea. Con el carácter fold (mayor que `>`), puede especificar una cadena en un bloque. Pero se interpreta sin las nuevas líneas.

El carácter de bloque (pipe `|`) tiene una función similar, pero YAML interpreta el campo tal cual.

```yaml 
con_nuevas_lineas: >
  esta no es una cadena normal
  abarca más de
  una línea
  ¿ves?
tal_cual_es: |
  esta no es una cadena normal
  abarca más de
  una línea
  ¿ves?
```

### Nulls

Los nulos se introducen con una tilde(~) o con el literal de cadena `null`. La representación de Python para null es None.

```yaml 
foo: ~
bar: null
```

### Booleanos

YAML indica los valores booleanos con las palabras clave True, On y Yes para verdadero. Falso se indica con False, Off o No.

```yaml 
enfermo: true
ganador: False
luz: on
TV: off
```

### Arreglos

Puede especificar matrices o listas en una sola línea. 

```yaml 
items: [ 1, 2, 3, 4, 5 ]
numbers: [ "one", "two", "three", "four" ]
```

También puede ponerlos en varias líneas.

```yaml 
items:
  - 1
  - 2
  - 3
  - 4
  - 5
names:
  - "one"
  - "two"
  - "three"
  - "four"
```
El formato de líneas múltiples es útil para listas que contienen objetos complejos en lugar de escalares.

```yaml 
items:
  - things:
      thing1: lois
      thing2: dewey
      thing3: hal
  - other_things:
      key: value
```
Un array puede contener cualquier valor YAML válido. Los valores de una lista no tienen por qué ser del mismo tipo.

### Diccionarios

Ya hemos hablado de los diccionarios, pero aún hay más. Como los arrays, puedes poner diccionarios en línea. Vimos este formato arriba. Es como python imprime los diccionarios.

```yaml 
foo: { thing1: lois, thing2: dewey, thing3: hal }
```

Ya los hemos visto antes abarcar líneas.

```yaml 
nombre: pepe
apellido: pecas
```

Y, por supuesto, pueden anidarse y contener cualquier valor.

```yaml 
persona:
  cualidades:
    - divertido
    - capaz
    - noble
```



## YAML en Obsidian

Uno de los principales atractivos de utilizar [Obsidian](https://obsidian.md/) además de poder utilizar tags, es la capacidad de filtrar la información utilizando el plugin de [Dataview](https://github.com/blacksmithgu/obsidian-dataview), el cual le permite al usuario filtrar sus notas como si fueran una base de datos utilizando como base las metadatos ingresados al inicio de cada nota en lenguaje YAML. 

El usuario puede decidir que keys crear y manejarlas como desee, sin embargo en Obsidian  hay algunos keys por defecto:

```yaml 
---
tags: 
aliases:
cssclasses: 
publish: 
---
```

- `tags:` es otra manera de añadir etiquetas sin la necesitad de ponerlas en el texto principal de la nota.
- `aliases:` sirve para ponerle nombres alternativos a las notas.
- `cssclasses:` es para elegir qué elementos CSS utilizar en una nota determinada.
- `publish:`  permite establecer si una nota debe publicarse utilizando Obsidian Publish o no.

### Tipos de propiedad

Además de un nombre y un valor, las propiedades también tienen un tipo. Un tipo de propiedad describe la clase de valores que se pueden almacenar. 

Obsidian admite los siguientes tipos de propiedades:

- **Text**
- **List**
- **Number**
- **Checkbox**
- **Date**
- **Date & time**

Una vez que se asigna un tipo de propiedad a una propiedad, se asume que todas las propiedades con ese nombre tienen el mismo tipo de propiedad.

### Plantilla de Obsidian

Un buen punto de partida para empezar a utilizar YAML es nuestras notas en Obsidian es utilizando la siguiente plantilla.

```yaml 
---
publish: false
tags: null
date: 2023-08-29
aliases: null
authors: null
---
```

Toda nota debería tener la fecha en la que se creo, el autor que la hizo, decidir si se publica o no, tags para poder conectarse con otras notas y alias para búsqueda rápida.

Dependiendo de las necesidades se pueden agregar más campos y omitirlos. Por ejemplo si se crean notas para almacenar toda la información referente a una persona para generar una agenda se puede crear una plantilla de la siguiente manera:

```yaml
---
publish: false
tags: [familiar, contacto]
aliases: ale
name: Alejandro Fernandez
phone: 5578965485
age: 22
birth: 2000-12-03
email: email@gmail.com
address: 21 Sur 8900 La Libertad
location: https://goo.gl/maps/lkfdioasdlkjlf978
job: cantante
---
```

En este ejemplo en particular se omitió el autor y la fecha porque no son relevantes para la nota. 



## YAML en Mkdocs

En Mkdocs se tiene la posibilidad de utilizar metadatos para poder organizar y habilitar funcionalidades extra en nuestras documentaciones. Por ejemplo los plugins de [Social card](https://squidfunk.github.io/mkdocs-material/setup/setting-up-social-cards/), [Blog](https://squidfunk.github. io/mkdocs-material/setup/setting-up-a-blog/) y [Tags](https://squidfunk.github.io/mkdocs-material/setup/setting-up-tags/) hacen uso de los metadatos ingresados en lenguaje YAML al principio de cada archivo `.md` para crear tarjetas sociales personalizadas, crear entradas de blog de manera más sencilla e incluso organizar todos los archivos utilizando etiquetas.

### Plantilla para archivos sencillos

Esta es una plantilla sugerida para el encabezado de los archivos normales en Mkdocs:

```yaml
draft: false
date: 2023-09-10
title: ""
description: 
authors: ciro
tags: []
# hide: 
#   - navigation
#   - toc
#  - path
```

- `draft:` nos permite saber si el archivo sigue en su fase de borrador o no.
- `hide:` nos permite esconder para ese especifico archivo algunos de los elementos en la lista.
- `tags:` nos permite categorizar el archivo para su posterior manejo en la pestaña de tags.

### Plantilla para entradas de blog

Esta es una plantilla sugerida para el encabezado de las entradas de blog en Mkdocs:

```yaml
draft: false
date: 2023-09-10
description: 
authors:
  - pepe
tags: []
categories: []
readtime: 15
# hide: 
#   - navigation
#   - toc
#  - path
```

- `readtime:` permite asignar manualmente el tiempo que puede llevar leer la entrada de blog.
- `categories:` es una propiedad que se define en el archivo `mkdocs.yml` con las categorias admitidas en las entradas de blog, para más información ver el plugin de [Blogs](https://squidfunk.github.io/mkdocs-material/setup/setting-up-a-blog/).
- `authors:` se debe crear un archivo `.authors.yml`con la información del autor, para más información ver el plugin de [Blogs](https://squidfunk.github.io/mkdocs-material/setup/setting-up-a-blog/).

## Conclusión

YAML es un potente lenguaje que puede utilizarse para archivos de configuración, mensajes entre aplicaciones y para guardar el estado de las aplicaciones. Cubrimos sus características más utilizadas, incluyendo cómo utilizar los tipos de datos incorporados y estructurar documentos complejos. Algunas [plataformas](https://yaml.org/) soportan las características avanzadas de YAML, incluyendo tipos de datos personalizados.

## Referencias

[^1]: “YAML Frontmatter - Fork My Brain”. <https://notes.nicolevanderhoeven.com/obsidian-playbook/Using+Obsidian/03+Linking+and+organizing/YAML+Frontmatter> (consultado el 11 de septiembre de 2023).
[^2]: “The Official YAML Web Site”. <https://yaml.org/> (consultado el 11 de septiembre de 2023).
[^3]: “YAML Reference Card”. <https://yaml.org/refcard.html> (consultado el 11 de septiembre de 2023).
[^4]: “YAML Tutorial: Everything You Need to Get Started in Minutes”, *CloudBees*, el 8 de marzo de 2023. <https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started> (consultado el 11 de septiembre de 2023).
[^5]: “Learn yaml in Y Minutes”. <https://learnxinyminutes.com/docs/yaml/> (consultado el 11 de septiembre de 2023).
[^6]: “Properties - Obsidian Help”. <https://help.obsidian.md/Editing+and+formatting/Properties> (consultado el 12 de septiembre de 2023).