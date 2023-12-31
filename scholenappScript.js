
    function addSchool() {
      const tableBody = document.getElementById('schoolsTableBody');
      const newRow = tableBody.insertRow(tableBody.rows.length);

      const cells = Array.from({ length: 7 }, (_, index) => newRow.insertCell(index));
      
      cells[0].innerText = tableBody.rows.length; // #
      cells[1].innerText = document.getElementById('name').value;
      cells[2].innerText = document.getElementById('level').value;
      cells[3].innerText = document.getElementById('distance').value;
      cells[4].innerText = document.getElementById('open_days').value;
      cells[5].innerText = document.getElementById('note').value;
      cells[6].innerText = document.getElementById('other').value;

      const schoolData = {
        name: cells[1].innerText,
        level: cells[2].innerText,
        distance: cells[3].innerText,
        open_days: cells[4].innerText,
        note: cells[5].innerText,
        other: cells[6].innerText,
      };

      const storedData = JSON.parse(localStorage.getItem('schoolData')) || [];
      storedData.push(schoolData);
      localStorage.setItem('schoolData', JSON.stringify(storedData));
    }

    function clearLocalStorage() {
      localStorage.removeItem('schoolData');
      location.reload(); // Vernieuw de pagina om de tabel leeg te maken
    }

    window.onload = function () {
      const storedData = JSON.parse(localStorage.getItem('schoolData')) || [];
      const tableBody = document.getElementById('schoolsTableBody');
      tableBody.innerHTML = ''; // Wist de bestaande rijen

      storedData.forEach((schoolData, index) => {
        const newRow = tableBody.insertRow(tableBody.rows.length);
        const cells = Array.from({ length: 7 }, (_, cellIndex) => newRow.insertCell(cellIndex));

        cells[0].innerText = index + 1;
        cells[1].innerText = schoolData.name;
        cells[2].innerText = schoolData.level;
        cells[3].innerText = schoolData.distance;
        cells[4].innerText = schoolData.open_days;
        cells[5].innerText = schoolData.note;
        cells[6].innerText = schoolData.other;
      });
    };
  

    function downloadData() {
        const table = document.getElementById('schoolsTable');
        const ws = XLSX.utils.table_to_sheet(table);
      
        // Maak een nieuwe werkmap aan en voeg het werkblad toe
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Scholen');
      
        // Genereer een array van het Excel-bestand
        const arrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      
        // Zet de array om naar een Blob
        const blob = new Blob([arrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
        // Maak een downloadlink aan en simuleer een klik om het bestand te downloaden
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'scholen.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      
      