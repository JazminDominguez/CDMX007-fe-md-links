# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

# Mdlinks

Mdlinks facilita la extracción de link que se encuentren dentro de un archivo .md verificando si estos se encuentran funcionando o rotos. 

### Modo de instalación

```
npm install --save https://github.com/JazminDominguez/CDMX007-fe-md-links
```
Si deseas que la instalación sea global, agrega '-g' al final.

### Uso común

Mdlinks solo puede ser usado como módulo

```
mdLinks([path])
```
path corresponde a la ruta del archivo .md.

### Ejemplo

```
const mdlinks = require('mdLinks')
mdlinks([path])
```
Debería arrojar un objeto como el siguiente:

```
{
  href: Link consultado
  text: Estado del link (OK / No funcionando)
  file: Ruta donde se encontró el link consultado
}
```
## Parte obligatoria	

 Tu módulo debe ser instalable via `npm install <github-user>/md-links`. Este	
módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de	
comando como una interfaz que podamos importar con `require` para usarlo	
programáticamente.	

 Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,	
_lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)	
para tus pruebas unitarias.	

 Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este	
repositorio.	

 Antes de comenzar a codear, es necesario crear un plan de acción. Esto debería	
quedar detallado en el `README.md` de tu repo y en una serie de _issues_	
y _milestones_ para priorizar y organizar el trabajo, y para poder hacer	
seguimiento de tu progreso.	

 Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada quien	
considere necesarios.	

 También te sugerimos que empieces a utilizar los [project boards](https://help.github.com/en/articles/about-project-boards) de github que te	
ayudaran a organizar y priorizar su trabajo.	

 ### Archivos del proyecto	

 - `README.md` con descripción del módulo, instrucciones de instalación/uso,	
  documentación del API y ejemplos. Todo lo relevante para que cualquier	
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.	
- `index.js`: Desde este archivo debes exportar una función (`mdLinks`).	
- `package.json` con nombre, versión, descripción, autores, licencia,	
  dependencias, scripts (pretest, test, ...)	
- `.editorconfig` con configuración para editores de texto.	
- `.eslintrc` con configuración para linter.	
- `.gitignore` para ignorar `node_modules` u otras carpetas que no deban	
  incluirse en control de versiones (`git`).	
- `test/md-links.spec.js` debe contener los tests unitarios para la función	
  `mdLinks()`. Tu implementación debe pasar estos test.	

 ### JavaScript API	

 El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la	
siguiente interfaz:	

 #### `mdLinks(path, options)`	

 ##### Argumentos	

 - `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es	
  relativa, debe resolverse con respecto al directorio desde donde se invoca	
  node (_current working directory_).	
- `options`: Un objeto con las siguientes propiedades:	
  - `validate`: Booleano que determina si se desea validar los links	
    encontrados.	

 ##### Valor de retorno	

 La función debe retornar una promesa (`Promise`) que resuelva a un arreglo	
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene	
las siguientes propiedades:	

 - `href`: URL encontrada.	
- `text`: Texto que aparecía dentro del link (`<a>`).	
- `file`: Ruta del archivo donde se encontró el link.	
