function getAllSlips() {
  var currentUserId = getLoggedUser();
  var userSlips = getJsonCookie("all-slips-for-" + currentUserId);
  if (userSlips) {
    return userSlips;
  }
  return [];
}
function getCurrentSlip() {
  var userSlip = getJsonCookie("CurrentSlip");
  if (userSlip) {
    return userSlip;
  } else {
    userSlip = [];
    setJsonCookie("CurrentSlip", userSlip);
    return userSlip;
  }
}
function addSlip(wager, returnAmount) {
  var currentSlip = getCurrentSlip();
  var userSlips = getAllSlips();
  var currentUserId = getLoggedUser();
  //item details, bet wager amount, bet potential return, bet date
  if (currentSlip.length > 0) {
    var dateVar = new Date();
    var date =
      dateVar.getDate() +
      "/" +
      dateVar.getMonth() +
      "/" +
      dateVar.getFullYear() +
      " - " +
      dateVar.getHours() +
      ":" +
      dateVar.getMinutes();
    var returnItem = {
      date: date,
      wagerAmount: wager,
      potentialReturn: returnAmount,
      items: currentSlip,
    };
    userSlips.push(returnItem);
    setJsonCookie("all-slips-for-" + currentUserId, userSlips);
    return true;
  } else {
    return false;
  }
}
function addToSlip(selection) {
  var userSlip = getJsonCookie("CurrentSlip");
  userSlip.push(selection);
  setJsonCookie("CurrentSlip", userSlip);
}
function removeFromSlip(eventinfo) {
  var slip = getCurrentSlip();
  var indexNumber = null;
  for (let i = 0; i < slip.length; i++) {
    if (
      slip[i].eventId == eventinfo.id &&
      slip[i].selection == eventinfo.selection
    ) {
      indexNumber = i;
    }
  }

  slip.splice(indexNumber, 1);
  setJsonCookie("CurrentSlip", slip);
}
function updateSlipItems() {
  var slip = getCurrentSlip();
  $("#slipCount").html(slip.length);
}
function removeAllSelections() {
  setJsonCookie("CurrentSlip", []);
}
function updateUserAmount(amount) {
  var loadedUsers = getUsers();
  var newAmount = 0;
  for (let i = 0; i < loadedUsers.length; i++) {
    if (loadedUsers[i].userId == getLoggedUser()) {
      loadedUsers[i].bank = Number(loadedUsers[i].bank) + Number(amount);
      newAmount = Number(loadedUsers[i].bank).toFixed(2);
    }
  }
  setJsonCookie("loadedUsers", loadedUsers);
  return newAmount;
}
function removeSlip(index) {
  var allSlips = getAllSlips();
  var removedSlip = allSlips.splice(index, 1);
  var currentUserId = getLoggedUser();
  setJsonCookie("all-slips-for-" + currentUserId, allSlips);
}
$(document).ready(function () {});
