function displayResults(data) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  data.forEach(function(article) {
    // Append each of the animal's properties to the table
    var tr = $("<tr>").append(
      $("<td>").text(article.title),
      $("<td>").text(article.link),
      $("<button>").attr("#save"),
      $("<button>").attr("#note")
    );

    $(".container").append(tr);
  });
}
$.getJSON("/all", function(found) {
  // Call our function to generate a table body
  displayResults(found);
});
