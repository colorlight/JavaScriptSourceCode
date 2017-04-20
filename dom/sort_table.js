// Sort the rows in first <tbody> of the specified table according to
// the value of nth cell within each row. Use the comparator function
// if one is specified. Otherwise, compare the values alphabetically.
function sortrows(table, n, comparator) {
	var tbody = table.tBodies[0]; // First <tbody>; may be implicitly created
	var rows = tbody.getElementsByTagName("tr"); // All rows in the tbody
	rows = Array.prototype.slice.call(rows,0); // Snapshot in a true array
	// Now sort the rows based on the text in the nth <td> element
	rows.sort(function(row1,row2) {
		var cell1 = row1.getElementsByTagName("td")[n]; // Get nth cell
		var cell2 = row2.getElementsByTagName("td")[n]; // of both rows
		var val1 = cell1.textContent || cell1.innerText; // Get text content
		var val2 = cell2.textContent || cell2.innerText; // of the two cells
		if (comparator) return comparator(val1, val2); // Compare them!
		if (val1 < val2) return -1;
		else if (val1 > val2) return 1;
		else return 0;
	});
// Now append the rows into the tbody in their sorted order.
	// This automatically moves them from their current location, so there
	// is no need to remove them first. If the <tbody> contains any
	// nodes other than <tr> elements, those nodes will float to the top.
	for(var i = 0; i < rows.length; i++) tbody.appendChild(rows[i]);
}