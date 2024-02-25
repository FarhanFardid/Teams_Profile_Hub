console.log("connected");

const loadData = async () =>{
    const url = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League'
    const res = await fetch(url);
    const data = await res.json();
  displayData(data.teams[0]);
}

 function displayData(data) {
    console.log(data);
    const container = document.getElementById("team_container");
    const div = document.createElement('div');
    div.innerHTML =`
    <h2>Name: ${data.
        strAlternate} </h2>
`;
 container.appendChild(div);
    // const team = data.map(t => console.log(t) );
 }
loadData();