function Ticket(age, title, day) {
  this.userAge = age;
  this.movieTitle = title;
  this.movieDay = day;
  this.ticketPrice = 12.00;
}

Ticket.prototype.allInfo = function() {
  return "The user is a " + this.userAge + ". The user wants to see " + this.movieTitle + ". The user wants to go on " + this.movieDay + ". The user's ticket will cost $" + this.ticketPrice + ".";
};

var priceCalculator = function(newUser) {
  $(".goAway").show();
  if (newUser.userAge === "kids") {
    $(".goAway").hide();
    newUser.ticketPrice *= 0.5;
    if (newUser.movieDay === "saturday" || newUser.movieDay === "sunday") {
      newUser.ticketPrice = 1.00;
    };
  } else if (newUser.userAge === "students") {
    $(".21").hide();
    newUser.ticketPrice *= 0.8;
  } else if (newUser.userAge === "seniors") {
    newUser.ticketPrice *= 0.4;
    if (newUser.movieDay === "saturday" || newUser.movieDay === "sunday") {
      newUser.ticketPrice = 1.00;
    };
  } else {
    newUser.ticketPrice *= 1.2;
  }
  if (newUser.userAge != "kids") {
  }
  newUser.ticketPrice = Math.ceil(newUser.ticketPrice);
  console.log(newUser);
  console.log(newUser.ticketPrice);
};

$(document).ready(function() {
  $("#movie-form").submit(function(event) {
    event.preventDefault();
    var userAge = $("#user-age").val();
    var movieTitle =$("input:radio[name=film]:checked").val();
    var movieDay = $("#movie-day").val();
    var newUser = new Ticket(userAge, movieTitle, movieDay );
    var finalInfo = priceCalculator(newUser);
    // newUser.ticketPrice = priceRounder(newUser.ticketPrice);
    $("#movies-list").html("<li>" + newUser.allInfo() + "</li>");
  });
});
