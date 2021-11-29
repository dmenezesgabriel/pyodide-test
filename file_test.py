from pathlib import Path

import tableaudocumentapi
from js import content
from tableaudocumentapi import Workbook

d = Path("/temp/twb")
d.mkdir(parents=True, exist_ok=True)
Path('/temp/twb/test.twb').write_text(content)

sourceWB = Workbook('/temp/twb/test.twb')

for datasource in sourceWB.datasources:
    print(datasource)
