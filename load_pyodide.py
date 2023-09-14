import sys

import js
import micropip

# await micropip.install("tableaudocumentapi")

js.document.getElementById("status").innerHTML = ""

div = js.document.createElement("div")
div.innerHTML = "Pyodide Loaded"
js.document.body.prepend(div)
