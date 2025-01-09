let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreTotal = document.getElementById("home-score")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreTotal = document.getElementById("guest-score")
let guestScore = 0

function onePointHome() {
    homeScore += 1
    homeScoreTotal.textContent = homeScore
}

function twoPointsHome() {
    homeScore += 2
    homeScoreTotal.textContent = homeScore
}

function threePointsHome() {
    homeScore += 3
    homeScoreTotal.textContent = homeScore
}

function onePointGuest() {
    guestScore += 1
    guestScoreTotal.textContent = guestScore
}

function twoPointsGuest() {
    guestScore += 2
    guestScoreTotal.textContent = guestScore
}

function threePointsGuest() {
    guestScore += 3
    guestScoreTotal.textContent = guestScore
}

function newGame() {
    homeScore = 0
    homeScoreTotal.textContent = homeScore
    guestScore = 0
    guestScoreTotal.textContent = guestScore
}