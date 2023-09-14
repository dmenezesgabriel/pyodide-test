var content = null;
var url = null;

function on_file_upload() {
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = (event) => {
    content = event.target.result;
    var blob = new Blob([content], { type: "text/plain" });
    url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    fetch("/generate_file_output.py").then((response) => {
      return response.text().then((text) => {
        pyodide.runPythonAsync(text);
      });
    });
  };
}

async function main() {
  pyodide = await loadPyodide({ indexURL: "/vendor/pyodide" });

  pyodide.loadPackage(["micropip"]).then(() => {
    fetch("/load_pyodide.py").then((response) => {
      return response.text().then((text) => {
        pyodide.runPythonAsync(text);
      });
    });
  });
}

main();
