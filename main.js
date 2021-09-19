

var names_of_people = [];

function add() {
    var GuestNames = document.getElementById("name1").value;
    console.log(GuestName);
    names_of_people.push(GuestName);    
	document.getElementById("display_name").innerHTML=names_of_people.toString();
	
   }

   function sort() {
    var s= names_of_people.join("<br>");
	document.getElementById("sorted").innerHTML=s.toString();
	}
   
    function show()
    {
        var i= names_of_people.join("<br>");
        console.log(names_of_people);
        document.getElementById("p1").innerHTML=i.toString();
        document.getElementById("sort_button").style.display="block";
        }

        function search()
{
	var search= document.getElementById("searchbar").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}
			
		}
	document.getElementById("searchednameresults").innerHTML="name found "+found+" times";
	console.log("found name "+found+" times");
}


