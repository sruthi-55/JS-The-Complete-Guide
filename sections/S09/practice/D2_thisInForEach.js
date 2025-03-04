const members = {
  teamName: 'Blue Rockets',
  people: ['Sruthi','Mora'],
  getTeamMembers(){
    this.people.forEach(p=>{    // correct val if we use arrow fn here
      console.log(p + ' - ' + this.teamName);
    })
  },
  // same but with normal fn
  getTeamDetails(){
    this.people.forEach(function(p){
      console.log(this);    // here 'this' is bound to window
      console.log(p + ' - ' + this.teamName);
    })
  }
};

members.getTeamMembers(); //Sruthi - Blue Rockets
console.log('');
members.getTeamDetails(); //Sruthi - undefined
