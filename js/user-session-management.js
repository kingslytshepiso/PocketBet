const loggedCookieKey = "logged";
const userCookieKey = "userId";
function getAllUsers() {
  return getJsonCookie("Users");
}
function checkLogginStatus() {
  let loggedStatus = getCookie(loggedCookieKey);
  let userLogged = getCookie(userCookieKey);
  if (loggedStatus && userLogged) {
    return true;
  } else {
    return false;
  }
}
function getLoggedUser() {
  if (getCookie(userCookieKey)) {
    return getCookie(userCookieKey);
  } else {
    return "guest";
  }
}
function getLoggedUserDetails(id) {
  var u = getJsonCookie("Users");
  const returnObj = u.filter((item) => item.userId == id);
  return returnObj;
}
function logIn(username, password) {
  if (checkLogginStatus()) {
    console.log("already logged");
    window.location.href = "./index.html";
  } else {
    var user = null;
    var avaUsers = getJsonCookie("Users");
    let found = false;
    $.each(avaUsers, function () {
      console.log(this);
      if (this["email"] == username && this["password"] == password) {
        found = true;
        user = this;
        setCookie(loggedCookieKey, true);
        setCookie(userCookieKey, this["userId"]);
        return false;
      } else {
        return true;
      }
    });
    if (found) {
      console.log("found");
      document.location.href = "./football.html";
    } else {
      $("#form-summary").html("Invalid username or password.");
    }
  }
}
function signOut() {
  removeCookie(loggedCookieKey);
  removeCookie(userCookieKey);
  removeCookie("currentUserDetails");
  document.location.href = "./index.html";
}
function signUp(userInfo) {}
function getUsers() {
  var loadedUsers = getJsonCookie("loadedUsers");
  if (loadedUsers) {
    return loadedUsers;
  } else {
    return users;
  }
}
var users = [
  {
    userId: "1",
    fname: "Ruth",
    lname: "Hlongwane",
    email: "hlongwane.ruth@capaciti.org.za",
    phone: "0700000000",
    password: "12345678",
    bank: "14720.17",
  },
  {
    userId: "2",
    fname: "Katekani",
    lname: "Khoza",
    email: "katekani.khoza@capaciti.org.za",
    phone: "0700000000",
    password: "12345678",
    bank: "3568.09",
  },
  {
    userId: "3",
    fname: "Kingsly",
    lname: "Mokgwathi",
    email: "kingslytshepiso@gmail.com",
    phone: "0700000000",
    password: "12345678",
    bank: "210.58",
  },
];
function loadUsers() {
  setJsonCookie("Users", getUsers());
}
$(document).ready(function () {
  loadUsers();
  if (checkLogginStatus()) {
    var currentLoggedUser = getLoggedUserDetails(getLoggedUser())[0];
    var slipCookieKey = "betSlipFor-" + currentLoggedUser.userId;
    var userBetSlip = getJsonCookie(slipCookieKey);
    setJsonCookie("currentUserDetails", currentLoggedUser);
    var userAccountItem = $("<li>")
      .addClass("nav-item")
      .html(
        $("<a>")
          .attr("href", "./account.html")
          .addClass("nav-link")
          .html('<i class="fa-sharp fa-solid fa-user"></i>')
          .append(
            "<span class='m-3' id='userAmountLabel'> R " +
              Number(currentLoggedUser.bank).toFixed(2) +
              "</span>"
          )
      );
    var betSlipItem = $("<li>")
      .addClass("nav-item")
      .html(
        $("<a>")
          .attr("href", "#betSlip")
          .addClass("nav-link")
          .attr("data-toggle", "modal")
          .attr("data-target", "#userBetSlipContainer")
          .html('<i class="fa-sharp fa-solid fa-list-check"></i>')
          .append("<span class='m-1'>Bet slip</span>")
          .append(
            "<span class='badge badge-light' id='selectionCount'>" +
              0 +
              "</span>"
          )
      );
    var logoutItem = $("<li>")
      .addClass("nav-item")
      .html(
        $("<a>")
          .attr("href", "#logout")
          .attr("data-toggle", "modal")
          .attr("data-target", "#confLogoutContainer")
          .addClass("nav-link")
          .html('<i class="fa-sharp fa-solid fa-power-off"></i>')
          .append("<span class='m-3'>Logout</span>")
      );
    var deposit = $("<li>").addClass("nav-item").html(
      $("<a>")
        .attr("href", "#logout")

        .addClass("nav-link")
        .html('<i class="fa-sharp fa-solid fa-power-off"></i>')
        .append("<span class='m-3'>Logout</span>")
    );
    $("#nav-list").html(userAccountItem).append(betSlipItem).append(logoutItem);
  }
});
$("#loginForm").on("submit", function (event) {
  event.preventDefault();
  var username = $("input[name='username']").val();
  var password = $("input[name='password']").val();
  logIn(username, password);
});
$("#registerForm").on("submit", function (event) {
  event.preventDefault();
  var name = $("input[name='name']").val();
  var surname = $("input[name='surname']").val();
  var email = $("input[name='email']").val();
  var phone = $("input[name='phoneNumber']").val();
  var password = $("input[name='psw']").val();
  var currentUsers = getJsonCookie("Users");
  var newUserDetails = {
    userId: (currentUsers.length + 1).toString(),
    fname: name,
    lname: surname,
    email: email,
    phone: phone,
    password: password,
    bank: 0,
  };
  currentUsers.push(newUserDetails);
  setJsonCookie("Users", currentUsers);
  logIn(email, password);
});
$("#logoutLink").on("click", function () {
  console.log("off");
  signOut();
});
