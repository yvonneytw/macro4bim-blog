# pyM4B

## pyRevit extensions

![pyM4B](src/assets/pym4b.png)
![pyM4B](public/pym4b.png)

pyMacro4BIM is a free extension of <a href="https://pyrevitlabs.notion.site/pyRevit-bd907d6292ed4ce997c46e84b6ef67a0" target="_blank">pyRevit</a> which contain script and solution which span into different disciplines.

It is built mainly as a result of the Macro4BIM community and of course, our researches.

## How to install

There is not a real installation, all you have to do is download all the scripts, similar to what you do when
downloading a new Dynamo package.
As the project it is hosted on Github, you can easily **clone the repository** following one of this two options:

### option 1: pyRevit CLI

Very easy, open the command prompt and type:

```bat
pyrevit extend ui pyM4B https://github.com/GiuseppeDotto/pyM4B.extension.git --branch=main
```

If you execute the command with Revit opened, remember to refresh your pyRevit.

### option 2: extensions.json

Open the JSON file which is usually located at `%appdata%\pyRevit-Master\extensions` (it might change depending on how/were you installed pyRevit) and copy paste the below portion of code

```json
{
  "builtin": "False",
  "default_enabled": "True",
  "type": "extension",
  "rocket_mode_compatible": "True",
  "name": "pyM4B",
  "description": "Macro4BIM extension for PyRevit",
  "author": "Giuseppe Dotto",
  "author_profile": "https://github.com/GiuseppeDotto",
  "url": "https://github.com/GiuseppeDotto/pyM4B.extension.git",
  "website": "https://www.macro4bim.com/",
  "image": "",
  "dependencies": []
}
```

## Related blog posts

<center>
<iframe src="https://giphy.com/embed/Yj2nHhbGsNQSrGyvI7" width="480" height="480" frameBorder="0"></iframe>
</center>
