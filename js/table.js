function generateTableHTML(columns, rows, index) {
  	var columns = columns || 26;
  	var rows = rows || 100;

  	var content = document.createElement('div');
  	content.setAttribute('id', "tabs__content" + index);

  	var table = document.createElement('table');
  	table.setAttribute("border", 1);

	table.appendChild(generateTableHeader(columns));
  	table.appendChild(genereateTableBody(rows, columns));
  	
  	content.appendChild(table);
 
  return content;
}

function generateTableHeader(columns) {
	var tableHead = document.createElement('thead');

  	var headRow = document.createElement('tr');
  	headRow.appendChild(document.createElement('th'));
  
	for (var i = 0; i < columns; i++) {
		var cell = document.createElement('th');
	  	cell.innerHTML  = String.fromCharCode( 97 + i).toUpperCase();
	  	headRow.appendChild(cell);	
	}

  	tableHead.appendChild(headRow);

  	return tableHead 
}

function genereateTableBody(rows, columns) {
	var tbody = document.createElement('tbody');

  	for (var i = 1; i < rows; i++) {
	  	var trow = document.createElement('tr');
	  	var numberColumn = document.createElement('th');
	  	numberColumn.innerHTML  = i;
	  	
	  	trow.appendChild(numberColumn);

	  	for (var k = 0; k < columns; k++)  {
	  		trow.appendChild(document.createElement('td'))
	  	}
  		tbody.appendChild(trow);
  	}

  	return tbody;
}