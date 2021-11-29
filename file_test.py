from pathlib import Path

import js
import tableaudocumentapi
from js import content
from tableaudocumentapi import Workbook

d = Path("/temp/twb")
d.mkdir(parents=True, exist_ok=True)
Path('/temp/twb/test.twb').write_text(content)

workbook_object = Workbook('/temp/twb/test.twb')

for datasource in workbook_object.datasources:
    datasource_name_input = js.document.createElement("div")
    datasource_name_input.innerHTML = datasource.name
    js.document.body.prepend(datasource_name_input)

    print(datasource.name)
    print(datasource.caption)
    print(datasource.version)


