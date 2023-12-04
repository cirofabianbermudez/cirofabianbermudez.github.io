---
draft: false
date: 2023-12-02
description: > 
  Entrada de blog de cómo tengo configurado Obsidian en mi computadora personal.
authors:
  - ciro
categories:
  - General
tags: [Obsidian]
readtime: 20
hide: []
---

# Configuración de Obsidian 

Este artículo es una guía de cómo configurar Obsidian para sacarle el mayor provecho, si bien Obsidian es perfectamente funcional después de instalarlo, existen una gran cantidad de plugins que ayudan a extender su funcionalidad  y convertirlo en más que una aplicación para tomar notas. 

<!-- more -->

## Portabilidad

Cuando quieras copiar toda tu configuración de un vault a otro solo es necesario copiar la carpeta `.obsidian` y pegarla en la raíz del vault donde quieras la misma configuración. De esta manera una vez configurado todo no es necesario reconfigurar para cada nuevo vault.


## Atajos útiles

Lo primero que aprendí después de instalar Obsidian fueron los atajos de teclado. Para mi es muy importante no despegar las manos del teclado y por lo tanto no depender de tener un mouse a la mano. Los atajos de teclado son una manera de agilizar el flujo de trabajo de cualquier persona y estos son mis favoritos. Marcaré con el símbolo **!!** atajos que pienso son esenciales.

| Comando                   | Hotkey               |        |
| ------------------------- | -------------------- | ------ |
| Quick search              | `Ctrl + o`           | **!!** |
| Bold                      | `Ctrl + b`           | **!!** |
| Italics                   | `Ctrl + i`           |        |
| Web link                  | `Ctrl + k`           |        |
| New note                  | `Ctrl + n`           | **!!** |
| New note in new tab       | `Ctrl + Shift + n`   |        |
| Toggle check list         | `Ctrl + l`           |        |
| Open command palet        | `Ctrl + p`           | **!!** |
| New note from template    | `Alt + n`            | **!!** |
| Open link in the same tab | `Alt + Enter`        |        |
| Switch tabs right         | `Ctrl + Tab`         |        |
| Switch tabs left          | `Ctrl + Shift + Tab` |        |
| Open graph view           | `Ctrl + g`           |        |
| Open link in another tab  | `Ctrl + Enter`       |        |
| Open settings             | `Ctrl + ,`           |        |
| Open last closed window   | `Ctrl + Shift + t`   | **!!** |
| Toggle reading viwe       | `Ctrl + e`           | **!!** |

## Atajos personalizados

Una de las cosas que no me gusta de Obsidian es que los menús laterales después de redimensionar la ventana utilizan la mayoría del espacio disponible. Para poder contraerlos de manera rápida añadí los primeros dos atajos de teclado personalizados de la siguiente tabla.

En muchas ocasiones es necesario comprobar cómo se ve el código como si fuera leído como un simple archivo de texto, para esto añadí el tercer atajo de teclado personalizado, finalmente para añadir links internos y no tener que escribir `[[]]` manualmente añadí el cuarto atajo.

| Comando                         |     Hotkey     |
| ------------------------------- | :------------: |
| Toggle Left sidebar             |  `Ctrl + \ `   |
| Toggle Right sidebar            | `Ctrl + Space` |
| Toggle Live Preview/Source mode |  `Ctrl + r `   |
| Add internal link               |   `Ctrl + j`   |



## Opciones

### Files & Links

Configurar Attachments folder path a una carpeta específica llamada `attachments`creada manualmente en la ruta principal del vault. Esto ayuda a que las imagenes que se añaden arrastrandolas o copiandolas y pegandolas siempre se encuentren en una carpeta definida y no exparcidas en carpetas diferentes de cada nota.

## Community Plugins

Ya hacen 3 años desde que comencé a utilizar Obsidian y una de las razonas por las que decidí hacer esta entrada de blog es para mantener un registro de todos los plugins que he encontrado a lo largo de este tiempo. Aqui estan los todos los plugins que utilizo en mi día a día y cómo los tengo configurados.

### TagFolder

[TagFolder](https://github.com/vrtmrz/obsidian-tagfolder) es un plugin que permite poder visualizar todas las notas que con tienen tags con una visualización de folder organizada y jerárquica.

Una vez instalado presiona `Ctrl+p` y selecciona `Show Tag Folder`.

En el menú izquierdo se mostrará una pestaña con los tags organizados.

### Linter

[Linter](https://github.com/platers/obsidian-linter) es un plugin de que da formato y estilo a tus notas centrándose en la configurabilidad y extensibilidad. Las reglas pueden ser activadas y configuradas en los ajustes. La documentación principal sobre las reglas y otras cosas se encuentran en la [wiki.](https://platers.github.io/obsidian-linter/)

Este es uno de los plugins más importantes de todos ya que me permite darle formato a mis notas de manera muy rápida utilizando un atajo de teclado.

Estas son mis configuraciones personales:

**YAML rules**

- [format-tags-in-yaml](https://platers.github.io/obsidian-linter/settings/yaml-rules/#format-tags-in-yaml)
- [insert-yaml-attributes](https://platers.github.io/obsidian-linter/settings/yaml-rules/#insert-yaml-attributes)
	- Agregar `authors: <author_name>`
- [yaml-key-sort](https://platers.github.io/obsidian-linter/settings/yaml-rules/#yaml-key-sort)
	- Activar el orden alfabético ascendente.
- [yaml-timestamp](https://platers.github.io/obsidian-linter/settings/yaml-rules/#yaml-timestamp) Desactivar y mejor utilizar el plugin [Update time on edit](#update-time-on-edit)
	- Cambiar `date created` por `date_created`.
	- Cambiar `date modified` por `date_modified`.
- [yaml-title-alias](https://platers.github.io/obsidian-linter/settings/yaml-rules/#yaml-title-alias)

**Heading rules**

- [header-increment](https://platers.github.io/obsidian-linter/settings/heading-rules/#header-increment)
- [headings-start-line](https://platers.github.io/obsidian-linter/settings/heading-rules/#headings-start-line)
- [remove-trailing-punctuation-in-heading](https://platers.github.io/obsidian-linter/settings/heading-rules/#remove-trailing-punctuation-in-heading)

**Content rules**

- [auto-correct-common-misspellings](https://platers.github.io/obsidian-linter/settings/content-rules/#auto-correct-common-misspellings)
- [blockquote-style](https://platers.github.io/obsidian-linter/settings/content-rules/#blockquote-style)
- [convert-bullet-list-markers](https://platers.github.io/obsidian-linter/settings/content-rules/#convert-bullet-list-markers)
- [emphasis-style](https://platers.github.io/obsidian-linter/settings/content-rules/#emphasis-style)
- [no-bare-urls](https://platers.github.io/obsidian-linter/settings/content-rules/#no-bare-urls)
- [remove-consecutive-list-markers](https://platers.github.io/obsidian-linter/settings/content-rules/#remove-consecutive-list-markers)
- [remove-empty-list-markers](https://platers.github.io/obsidian-linter/settings/content-rules/#remove-empty-list-markers)
- [remove-hyphenated-line-breaks](https://platers.github.io/obsidian-linter/settings/content-rules/#remove-hyphenated-line-breaks)
- [remove-multiple-spaces](https://platers.github.io/obsidian-linter/settings/content-rules/#remove-multiple-spaces)
- [strong-style](https://platers.github.io/obsidian-linter/settings/content-rules/#strong-style)

**Spacing rules**

- [compact-yaml](https://platers.github.io/obsidian-linter/settings/spacing-rules/#compact-yaml)
- [consecutive-blank-lines](https://platers.github.io/obsidian-linter/settings/spacing-rules/#consecutive-blank-lines)
- [convert-spaces-to-tabs](https://platers.github.io/obsidian-linter/settings/spacing-rules/#convert-spaces-to-tabs)
- [empty-line-around-blockquotes](https://platers.github.io/obsidian-linter/settings/spacing-rules/#empty-line-around-blockquotes)
- [empty-line-around-code-fences](https://platers.github.io/obsidian-linter/settings/spacing-rules/#empty-line-around-code-fences)
- [empty-line-around-math-blocks](https://platers.github.io/obsidian-linter/settings/spacing-rules/#empty-line-around-math-blocks)
- [empty-line-around-tables](https://platers.github.io/obsidian-linter/settings/spacing-rules/#empty-line-around-tables)
- [heading-blank-lines](https://platers.github.io/obsidian-linter/settings/spacing-rules/#heading-blank-lines)
- [line-break-at-document-end](https://platers.github.io/obsidian-linter/settings/spacing-rules/#line-break-at-document-end)
- [move-math-block-indicators-to-their-own-line](https://platers.github.io/obsidian-linter/settings/spacing-rules/#move-math-block-indicators-to-their-own-line)
- [paragraph-blank-lines](https://platers.github.io/obsidian-linter/settings/spacing-rules/#paragraph-blank-lines)
- [remove-empty-lines-between-list-markers-and-checklists](https://platers.github.io/obsidian-linter/settings/spacing-rules/#remove-empty-lines-between-list-markers-and-checklists)
- [remove-link-spacing](https://platers.github.io/obsidian-linter/settings/spacing-rules/#remove-link-spacing)
- [remove-space-around-characters](https://platers.github.io/obsidian-linter/settings/spacing-rules/#remove-space-around-characters)
- [remove-space-before-or-after-characters](https://platers.github.io/obsidian-linter/settings/spacing-rules/#remove-space-before-or-after-characters)
- [space-after-list-markers](https://platers.github.io/obsidian-linter/settings/spacing-rules/#space-after-list-markers)
- [trailing-spaces](https://platers.github.io/obsidian-linter/settings/spacing-rules/#trailing-spaces)

Una vez instalado y configurado el plugin presiona `Ctrl+p` y selecciona `Linter: lint the current file`, también se puede utilizar el atajo `Ctrl+Alt+L`.

### Calendar

[Calendar](https://github.com/liamcain/obsidian-calendar-plugin) es un plugin que crea una sencilla vista de Calendario para visualizar y navegar entre las notas diarias.

Se puede configurar para incluir el número de la semana.

Para abrir el calendario se presiona `Ctrl+p` y seleccionar `Calendar: Open view`.

### Dataview

[Dataview](https://github.com/blacksmithgu/obsidian-dataview) es un plugin que trata tu Obsidian Vault como una base de datos que puedes consultar. Proporciona una API JavaScript y un lenguaje pipeline-based query para filtrar, ordenar y extraer datos de páginas Markdown.

Es una buena idea activar:

- Enable JavaScript Queries
- Enable Inline JavaScript Queries

**¿Cómo utilizar Dataview?**

Estos son los campos implícitos ([Implicit Fields](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)) que se pueden utilizar.

| Field Name         | Data Type      | Description                                                  |
| ------------------ | -------------- | ------------------------------------------------------------ |
| `file.name`        | Text           | The file name as seen in Obsidians sidebar.                  |
| `file.folder`      | Text           | The path of the folder this file belongs to.                 |
| `file.path`        | Text           | The full file path, including the files name.                |
| `file.ext`         | Text           | The extension of the file type; generally `md`.              |
| `file.link`        | Link           | A link to the file.                                          |
| `file.size`        | Number         | The size (in bytes) of the file.                             |
| `file.ctime`       | Date with Time | The date that the file was created.                          |
| `file.cday`        | Date           | The date that the file was created.                          |
| `file.mtime`       | Date with Time | The date that the file was last modified.                    |
| `file.mday`        | Date           | The date that the file was last modified.                    |
| `file.tags`        | List           | A list of all unique tags in the note. Subtags are broken down by each level, so `#Tag/1/A` will be stored in the list as `[#Tag, #Tag/1, #Tag/1/A]`. |
| `file.etags`       | List           | A list of all explicit tags in the note; unlike `file.tags`, does not break subtags down, i.e. `[#Tag/1/A]` |
| `file.inlinks`     | List           | A list of all incoming links to this file, meaning all files that contain a link to this file. |
| `file.outlinks`    | List           | A list of all outgoing links from this file, meaning all links the file contains. |
| `file.aliases`     | List           | A list of all aliases for the note as defined via the [YAML frontmatter](https://help.obsidian.md/How+to/Add+aliases+to+note). |
| `file.tasks`       | List           | A list of all tasks (I.e., `| [] some task`) in this file.   |
| `file.lists`       | List           | A list of all list elements in the file (including tasks); these elements are effectively tasks and can be rendered in task views. |
| `file.frontmatter` | List           | Contains the raw values of all frontmatter in form of `key | value` text values; mainly useful for checking raw frontmatter values or for dynamically listing frontmatter keys. |
| `file.day`         | Date           | Only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field. |
| `file.starred`     | Boolean        | If this file has been bookmarked via the Obsidian Core Plugin "Bookmarks". |

**Pasos a seguir**

1. Crear una query con un bloque de código con el lenguaje `dataview`.
2. Seleccionar el tipo de visualización y opcionalmente una columna escribiendo algún elemento de los metadatos:
	- `LIST`
	- `TABLE`
	- `TASK`
	- `CALENDAR`
3. Seleccionar la fuente donde se realizará la búsqueda con `FROM`:
	- `"nombre_de_la_carpeta"`
	- `#etiqueta`
	- `[[backlinks]]`
4. Seleccionar filtros con la palabra `WHERE`
	- `metadato = "Something"`
	- `contains(tags,"Something")`
	- `date >= date(2022-02-01)`
5. Ordenar utilizando `SORT`
	- `file.name ASC`
	- `file.name DESC`

### Editor Syntax Highlight

[Editor Syntax Highlight](https://github.com/deathau/cm-editor-syntax-highlight-obsidian) es un plugin que permite resaltar la sintaxis de los bloques de código en el editor.

Aquí se muestra un ejemplo de cómo resalta el código un código en Python.

```python
fruits = ["apple", "banana", "cherry"]  
for x in fruits:  
  print(x)  
```

### Kanban

[Kaban](https://github.com/mgmeyers/obsidian-kanban) es un plugin que sirve para crear tableros Kanban con Markdown en Obsidian.

Se pueden obtener ideas de cómo realizar un Kanban Board de [kanbanize](https://kanbanize.com/kanban-resources/kanban-software/kanban-board-examples).

Kanban es un popular método de gestión del flujo de trabajo para definir, gestionar y mejorar los servicios que ofrecen trabajo del conocimiento. Le ayuda a visualizar el trabajo, maximizar la eficiencia y mejorar continuamente. El trabajo se representa en tableros Kanban, lo que le permite optimizar la entrega de trabajo en varios equipos y gestionar incluso los proyectos más complejos en un único entorno.

1. Visualizar el flujo de trabajo.
2. Limitar el trabajo en progreso.
3. Administrar el flujo.
4. Explicitar las políticas de procesos.
5. Aplicar flujos de retroalimentación.
6. Mejorar de forma colaborativa.

- Crea un tablero Kanban.
- Visualiza todo el proceso en etapas.
- Limita los trabajos en progreso.
- Las tarjetas Kanban representan son una tarea.
- Cada tarjeta Kanban contiene información de:
	- Detalles sobre la tarea.
	- ¿Quién es el responsible?
	- ¿Cuál es la fecha límite?
	- ¿Cuál es la prioridad?
- Lead Time es tiempo que tarda una tarjeta en moverse desde el inicio hasta el final.

### Outliner

[Outliner](https://github.com/vslinko/obsidian-outliner) es un plugin que permite trabajar las listas como en Workflowy o RoamResearch.

| Command                                 | Default hotkey (Windows/Linux) | Default hotkey (MacOS) |
| --------------------------------------- | :----------------------------: | :--------------------: |
| Mover lista y sublistas hacia arriba    |         `Ctrl+Shift+↑`         |   `Command+Shift+↑`    |
| Desplazar lista y sublistas hacia abajo |         `Ctrl+Shift+↓`         |   `Command+Shift+↓`    |
| Indentar la lista y las sublistas       |             `Tab`              |         `Tab`          |
| Desindentar la lista y las sublistas    |          `Shift+Tab`           |      `Shift+Tab`       |

### Advanced Tables

[Advances Tables](https://github.com/tgrosinger/advanced-tables-obsidian) es un plugin que añade navegación, formato y manipulación mejorados a las tablas markdown en Obsidian:

- Auto formato.
- Navegación de tablas similar a Excel (tabulador/entrada entre celdas y filas).
- Fórmulas de hoja de cálculo.
- Añadir, eliminar y mover columnas y filas.
- Establecer la alineación de las columnas (izquierda, centro, derecha).
- Ordenar filas por una columna especificada.
- Exportar a CSV.

**¿Cómo utilizar Advanced Tables?**

Para crear una tabla, cree un único carácter `|`,  escriba el primer encabezado de la tabla y pulse `Tab`. Continúe introduciendo encabezamientos y pulsando `Tab`  hasta crear todos los encabezamientos. Pulsa `Enter` para ir a la primera fila. Continúa rellenando celdas como antes y pulsa `Enter` de nuevo para cada nueva fila.

| Hotkey             | Action                                       |
| ------------------ | -------------------------------------------- |
| `Tab`              | Columna siguiente                            |
| `Shift + Tab`      | Columna anterior                             |
| `Enter`            | Fila siguiente                               |
| `Ctrl + Shift + D` | Abrir la barra lateral de controles de tabla |
| `Shift + Enter`    | Salir de la última fila de la tabla          |

Se pueden utilizar como hojas de cálculo, ver la documentación en [Formulas in Markdown Tables](https://github.com/tgrosinger/md-advanced-tables/blob/main/docs/formulas.md), por ejemplo:

| Item              | Grams |
| ----------------- | ----- |
| Whole Wheat Flour | 110   |
| Bread Flour       | 748   |
| Warm Water        | 691   |
| Salt              | 18    |
| Starter           | 10    |
| **Total Grams**   | 1577  |

<!-- TBLFM: @>$2=sum(@I..@-1) -->

???+ note "Nota"
    La etiqueta `<!-- TBLFM:... --> ` no debe estar separada de la tabla.

### Templeater

[Templater](https://github.com/SilentVoid13/Templater) es un plugin de plantillas para Obsidian. Define un lenguaje de plantillas que te permite insertar resultados de variables y funciones en tus notas. También le permitirá ejecutar código JavaScript manipulando esas variables y funciones.

El video de [Using the Obsidian Templater Plugin](https://youtu.be/5j9fAvJCaig?si=d6jLyPEroNwcYkqb) es un buen punto de partida para empezar a utilizar este plugin.

### Advanced Slides

[Advanced Slides](https://github.com/MSzturc/obsidian-advanced-slides) es un plugin que permite crear presentaciones utilizando lenguaje Markdown.

Se pueden aprender siguiendo la [documentación](https://mszturc.github.io/obsidian-advanced-slides/) oficial, el [video tutorial](https://youtu.be/LtBK_iNcVEQ?si=5T6J4SlOTu9qzAgM) de Nicole van der Hoeven o la plantilla de [No Boilerplate](https://github.com/0atman/noboilerplate/blob/main/scripts/04-rust-impatient.md) que se muestra en el siguiente [video](https://youtu.be/br3GIIQeefY?si=CoGF_YOh6ltBAB7T).

Es una herramienta muy útil para realizar presentaciones para videos de Youtube, presentaciones formales o cualquier tipo de presentación en general.

Para entrar al visualizador se presiona `Ctrl+p` y seleccionar `Advanced Slides: Show Slide Preview`.

### ExcaliDraw

[ExcaliDraw] es un plugin que integra Excalidraw, una herramienta de dibujo rica en características, en Obsidian. Puede almacenar y editar archivos Excalidraw en su bóveda, puede incrustar dibujos en sus documentos, y se puede vincular a los documentos y otros dibujos a / y de Excalidraw.

### Better Word Count

[Better Word Count](https://github.com/lukeleppan/better-word-count) es un plugin que hace exactamente lo mismo que el incorporado Word Count plugin, excepto cuando se selecciona el texto, que contará la palabra seleccionada en lugar de todo el documento.

Se recomienda desactivar el contador de palabras integrado porque este plugin está diseñado para reemplazarlo.

Este plugin también tiene la capacidad de almacenar estadísticas sobre su bóveda.

### Hider

[Hider](https://github.com/kepano/obsidian-hider) es un plugin que permite ocultar ciertas partes de la interfaz de Obsidian. 

Este plugin no es absolutamente necesario pero es útil para crear un flujo de trabajo personalizado.

### Projects

[Projects](https://github.com/marcusolsson/obsidian-projects) es un plugin para Obsidian que te permite gestionar y visualizar notas para la gestión de proyectos.

- Crea proyectos a partir de carpetas y consultas Dataview.
- Cambia entre cuatro vistas diferentes: Tabla, Tablero, Calendario y Galería.
- Configura plantillas de notas para cada proyecto.

Por ejemplo, si eres gestor de contenidos, Projects puede ayudarte a gestionar tu calendario de contenidos. Crea borradores, controla su estado y cuándo está prevista su publicación.

### Settings Search

[Settings Search](https://github.com/javalent/settings-search) es un plugin que añade una función de búsqueda global a los ajustes de Obsidian, lo que permite a los usuarios buscar rápidamente un ajuste concreto. Recordar que para entrar de manera rápida a las configuraciones se puede utilizar el atajo `Ctrl+,`.

### Recent Files

[Recent Files](https://github.com/tgrosinger/recent-files-obsidian) es un plugin que muestra una lista de los archivos abiertos más recientemente en la barra lateral.

### Update time on edit

[Update time on edit](https://github.com/beaussan/update-time-on-edit-obsidian) es un plugin que actualiza al guardar los metadatos del archivo con la hora en que se actualizó, y la hora de creación si no la hay (útil para archivos nuevos).

