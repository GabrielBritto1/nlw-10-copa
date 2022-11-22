// LISTAGEM DE PARTIDAS

// $.when( $.ajax( "https://copa22.medeiro.tech/matches" ) ).then(function(
//     data, textStatus, jqXHR ) {
    
    

//          for (let index = 0; index < data.length; index++) {
//             const element = data[index];

//             $("#container").append(`
//                 <div class="col-md-6">
//                     <div class="alert alert-success" role="alert">
//                         ${element.homeTeam.name} X ${element.awayTeam.name} = 
//                         ${element.winner==undefined?"":element.winner}
//                     </div>
//                 </div>
//             `)
            
//          }
    
    
//         console.log(data);
// });




// LISTAGEM DE GRUPOS

$.when( $.ajax( "https://copa22.medeiro.tech/groups" ) ).then(function(
    data, textStatus, jqXHR ) {
    
    
        let times = ``;
         for (let index = 0; index < data.length; index++) {
            const element = data[index];

            times = ``;
            for (let index2 = 0; index2 < element.teams.length; index2++) {
                const element2 = element.teams[index2];
                times += `<li class="list-group-item">${element2.alternateName} -> ${element2.points}</li>`
            }
                

            $("#container").append(`
                <div class="col-md-4">

                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                        Grupo ${element.code}
                        </div>
                        <ul class="list-group list-group-flush">
                            ${times}
                        </ul>
                    </div>

                </div>
            `)
            
            
         }
    
    
});