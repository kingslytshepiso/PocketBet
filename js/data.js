/**Mock data for the items used in the website */
/**Soccer data */
const soccerData = [
  {
    eventId: "1",
    startDate: "02/05/2023",
    startTime: "21:00",
    type: "football/soccer",
    typeDetails: {
      leagueName: "England/Premier League",
      HomeTeam: "Arsenal",
      awayTeam: "Chelsea",
      oddsHomeTeam: "1.66",
      oddsDraw: "3.90",
      oddsAwayTeam: "5.00",
    },
  },
  {
    eventId: "2",
    startDate: "02/05/2023",
    startTime: "21:00",
    type: "football/soccer",
    typeDetails: {
      leagueName: "France/League 1",
      HomeTeam: "Toulouse",
      awayTeam: "Lens",
      oddsHomeTeam: "4.33",
      oddsDraw: "3.90",
      oddsAwayTeam: "1.77",
    },
  },
  {
    eventId: "3",
    startDate: "02/05/2023",
    startTime: "21:00",
    type: "football/soccer",
    typeDetails: {
      leagueName: "South Africa/Premier League",
      HomeTeam: "Supersport Utd",
      awayTeam: "Stellenbosch",
      oddsHomeTeam: "1.90",
      oddsDraw: "3.10",
      oddsAwayTeam: "3.70",
    },
  },
  {
    eventId: "4",
    startDate: "02/05/2023",
    startTime: "19:30",
    type: "football/soccer",
    typeDetails: {
      leagueName: "Spain/ LaLiga",
      HomeTeam: "Almeria",
      awayTeam: "Elche",
      oddsHomeTeam: "1.70",
      oddsDraw: "4.10",
      oddsAwayTeam: "4.50",
    },
  },
  {
    eventId: "5",
    startDate: "02/05/2023",
    startTime: "19:30",
    type: "football/soccer",
    typeDetails: {
      leagueName: "Spanish/LaLiga",
      HomeTeam: "Barcelona",
      awayTeam: "Osasuna",
      oddsHomeTeam: "1.22",
      oddsDraw: "6.50",
      oddsAwayTeam: "14.00",
    },
  },
];
const cricketData = [
  {
    eventId: "c1",
    startDate: "05/05/2023",
    startTime: "16:00",
    typeDetails: {
      leagueName: "India/India Premier League",
      HomeTeam: "Rajasthan Royals",
      awayTeam: "Gujarat Titans",
      oddsHomeTeam: "1.83",
      oddsDraw: "0",
      oddsAwayTeam: "1.95",
    },
  },
  {
    eventId: "c2",
    startDate: "06/05/2023",
    startTime: "16:00",
    typeDetails: {
      leagueName: "India/India Premier League",
      HomeTeam: "Dehli Capitals",
      awayTeam: "Royal Challengers",
      oddsHomeTeam: "2.05",
      oddsDraw: "0",
      oddsAwayTeam: "1.73",
    },
  },
];
const forumData = [];
function loadData() {
  setJsonCookie("Data", soccerData);
  setJsonCookie("Cricket", cricketData);
}
$(document).ready(function () {
  loadData();
});
