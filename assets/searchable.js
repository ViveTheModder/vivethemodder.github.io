function filterTable(n)
{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value;
  if (!isNaN(filter) || filter.includes('/')) n=0;

  table = document.getElementById("modTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) 
  {
    td = tr[i].getElementsByTagName("td")[n];
    if (td) 
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) 
        tr[i].style.display = "";
      else
        tr[i].style.display = "none";
    }       
  }
}