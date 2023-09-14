from pathlib import Path

import js
from js import content

d = Path("/temp")
d.mkdir(parents=True, exist_ok=True)
Path("/temp/file.txt").write_text(content)

with open("/temp/file.txt") as f:
    text_file = f.read()

js.document.body.prepend(text_file)
