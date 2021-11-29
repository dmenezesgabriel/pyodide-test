var content = null;
var url = null;

function sample() {
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = (event) => {
    content = event.target.result;
    var blob = new Blob([content], { type: "text/plain" });
    url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    fetch("/file_test.py").then((response) => {
      return response.text().then((text) => {
        pyodide.runPythonAsync(text);
      });
    });
  };
}

async function main() {
  pyodide = await loadPyodide({ indexURL: "/lib/pyodide" });

  pyodide.loadPackage(["micropip"]).then(() => {
    fetch("/hello.py").then((response) => {
      return response.text().then((text) => {
        pyodide.runPythonAsync(text);
      });
    });
  });
}
main();
