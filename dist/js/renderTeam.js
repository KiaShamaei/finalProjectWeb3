function loadTeam() {
  return new Promise((resolve, reject) => {
    let result;
    result = $.get("http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/team");

    if (result) {
      resolve(result);
    } else {
      reject(new Error('Api doesnt active or bad requst!'));
    }
  });
}

loadTeam().then(user => {
  let team = user;
  $('#imageTeam2').attr("src", team[2].image);
  $("#managerTitle2").text(team[2].jobTitle);
  $('#managerName2').text(team[2].name);
  $('#imageTeam1').attr("src", team[1].image);
  $("#managerTitle1").text(team[1].jobTitle);
  $('#managerName1').text(team[1].name);
  $('#imageTeam0').attr("src", team[0].image);
  $("#managerTitle0").text(team[0].jobTitle);
  $('#managerName0').text(team[0].name);
  $('#imageTeamCa2').attr("src", team[2].image);
  $("#managerTitleCa2").text(team[2].jobTitle);
  $('#managerNameCa2').text(team[2].name);
  $('#imageTeamCa1').attr("src", team[1].image);
  $("#managerTitleCa1").text(team[1].jobTitle);
  $('#managerNameCa1').text(team[1].name);
  $('#imageTeamCa0').attr("src", team[0].image);
  $("#managerTitleCa0").text(team[0].jobTitle);
  $('#managerNameCa0').text(team[0].name);
}).catch(error => console.log(error));