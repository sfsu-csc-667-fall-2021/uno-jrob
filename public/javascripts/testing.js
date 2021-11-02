document.querySelector("#table-list").addEventListener("click", (event) => {
  event.preventDefault();

  const { tableName } = event.target.dataset;

  if (tableName === undefined) {
    return;
  }

  Array.from(document.querySelector(`div#tableContainer`).children).forEach(
    (element) => {
      if (element.dataset.tableName === tableName) {
        element.classList.remove("hidden");
      } else if (!element.classList.contains("hidden"))
        [element.classList.add("hidden")];
    }
  );
});
