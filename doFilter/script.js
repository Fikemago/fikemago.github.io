  function parseInput() {
      var inputText = document.getElementById("courseInput").value;
      var courses = inputText.split('\n');

      var courseBody = document.getElementById("courseBody");
      courseBody.innerHTML = ''; // Leeg de tabel voordat je nieuwe gegevens invoegt

      courses.forEach(function(course) {
          var courseData = course.split('\t');
          var row = document.createElement("tr");

          courseData.forEach(function(data) {
              var cell = document.createElement("td");
              cell.textContent = data;
              row.appendChild(cell);
          });

          courseBody.appendChild(row);
      });
  }

  function applyFilters() {
      var filterType = document.getElementById("filterType").value;
      var filterValue = document.getElementById("filterValue").value.toLowerCase();
      var rows = document.getElementById("courseTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");

      for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var showRow = true;

          switch (filterType) {
              case "ONLINE":
                  showRow = row.textContent.toLowerCase().includes("online");
                  break;
              case "AT_DIRECT_DUTCH":
                  showRow = row.textContent.toLowerCase().includes("at direct dutch") || row.textContent.toLowerCase().includes("intensive");
                  break;
              case "ZOEK":
              showRow = row.textContent.toLowerCase().includes(filterValue);
              break;
              case "SORTEER":
              showRow = true; // Toon alle rijen voor nu, we gaan later sorteren
              break;
              // Voeg andere filteropties toe zoals 'docent', 'startdatum', en 'einddatum'

          }

          row.style.display = showRow ? "" : "none";
      }

      if (filterType === "SORTEER") {
          sortRowsByTeacher();
      }
  }

function clearInput() {
    document.getElementById("courseInput").value = "";
    document.getElementById("courseBody").innerHTML = "";
}

function sortRowsByTeacher() {
    var tbody = document.getElementById("courseBody");
    var rows = Array.from(tbody.getElementsByTagName("tr"));

    rows.sort(function(a, b) {
        var teacherA = a.getElementsByTagName("td")[1].textContent.toLowerCase();
        var teacherB = b.getElementsByTagName("td")[1].textContent.toLowerCase();

        return teacherA.localeCompare(teacherB);
    });

    rows.forEach(function(row) {
        tbody.appendChild(row);
    });
}