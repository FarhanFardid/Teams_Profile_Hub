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
    <div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-200 ">
    <img class="h-52 lg:h-72 w-full" src=${data.strTeamBanner} alt="Team banner">
    <div class="flex flex-col p-2 lg:p-4 ">
        <p class="mb-3 font-semibold lg:text-xl  text-gray-900 dark:text-gray-400"><span class="font-bold text-blue-900">Team details:</span> ${data.strDescriptionEN.slice(0, 475)}</p>
       <div class="flex justify-around lg:p-2">
      <img class="object-cover  h-52 w-52 lg:h-72 lg:w-72  border border-slate-900 lg:p-2 p-1 rounded-md" src=${data.strTeamBadge} alt="Team Badge">
       <img class="object-cover h-52 w-52 lg:h-72 lg:w-72 border border-slate-900 lg:p-2 p-1 rounded-md" src=${data.strTeamJersey} alt="Team Jersey">
  
       </div>
    </div>
</div>
     
`;
 container.appendChild(div);
    // const team = data.map(t => console.log(t) );
 }
loadData();

//  <h2>Team Name: ${data.
// strTeam} </h2>
// <h2>Short name: ${data.
//     strTeamShort} </h2>
// <p>Team details: ${data.strDescriptionEN}</p>
// <img src=${data.strTeamBadge}>
// <img src=${data.strTeamBanner}>
// <img src=${data.strTeamJersey}>
// <img src=${data.strTeamLogo}>