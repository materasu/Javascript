"use strict"
import "bootstrap/dist/css/bootstrap.css"
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

// const inp = require('input') 

let i,j,i1,j1,i2,j2
let n = 4
let grid = Array(n)
let prevGrid
let checkArray

let emptyTiles 
let emptyTilesLength
let pickTile
let probThreshold2 = 0.8
let probThreshold4 = 0.18
let checkChange

let moveCounter
let scoreCounter

function printScore() {
    console.log("Score: "+scoreCounter)
}

function printGrid() {
    for(i=0;i<n;i++) {
        let printLine = ""
        for(j=0;j<n;j++) {
            printLine+= grid[i][j]+" "
        }
        console.log(printLine)
    }
    console.log("\n")
    // console.log("printGrid")

}

function printMove(randomMove) {
    if(randomMove === 1) {
        console.log("SWIPING UP")
    }
    if(randomMove === 2) {
        console.log("SWIPING RIGHT")
    }
    if(randomMove === 3) {
        console.log("SWIPING DOWN")
    }
    if(randomMove === 4) {
        console.log("SWIPING LEFT")
    }
    console.log("\n")
}

function gridCopy() {
    prevGrid = Array(n)
    for(i=0;i<n;i++) {
        prevGrid[i] = Array(n)
    }
    for(i=0;i<n;i++) {
        for(j=0;j<n;j++) {
            prevGrid[i][j] = grid[i][j]
        }
    }
}

function getEmptyTilesLength() {
    return emptyTiles.length
}

function checkIfEqual(i1,j1,i2,j2) {
    if(grid[i1][j1] === grid[i2][j2]) {
        return 1
    }
    else {
        return 0
    }
}

function checkGridEqual() {
    if(prevGrid === grid) {
        return 1
    }
    else {
        return 0
    }
}

function initializeGrid() {
    for(i=0;i<n;i++) {
        grid[i] = Array(n)
    }
    for(i=0;i<n;i++) {
        for(j=0;j<n;j++) {
            grid[i][j] = 0
        }
    }
    getEmptyTiles()
}

// initializeGrid()
// console.log(emptyTiles)

function getEmptyTiles() {
    emptyTiles = []
    for(i=0;i<n;i++) {
        for(j=0;j<n;j++) {
            if(grid[i][j] === 0)
                emptyTiles.push([i,j])
        }
    }
}

function getNewTile() {
    let randomVal = Math.random()
    if(randomVal>=(probThreshold2+probThreshold4)) {
        return 8
    }
    else if((randomVal>=probThreshold2) && (randomVal<(probThreshold2+probThreshold2))) {
        return 4
    }
    else {
        return 2
    }
}

function fillEmptyTile() {
    emptyTilesLength = getEmptyTilesLength()

    if(emptyTilesLength === 0){
        return
    }

    pickTile = Math.floor(Math.random()*emptyTilesLength)
    let tileCoordinates = emptyTiles[pickTile]
    grid[tileCoordinates[0]][tileCoordinates[1]] = getNewTile()
    emptyTiles.splice(pickTile,1)
}

function makeMove() {
    let randomVal = Math.floor((Math.random()*4)+1)
    return randomVal
}
function initializeGame() {
    
    initializeGrid()
    fillEmptyTile()
    fillEmptyTile()
    moveCounter = 0
    scoreCounter = 0
    console.log("INITIAL")
    printGrid()
}

// initializeGrid()
// initializeGame()
// console.log(emptyTiles)
// console.log(grid)

function checkValidMoves() {
    
    emptyTilesLength = getEmptyTilesLength()
    let flag = 0
    
    if(emptyTilesLength !== 0) {
        flag = 1
        return flag
    }

    for(i=0;i<n;i++) {
        for(j=0;j<n;j++) {
            
            if( (i === (n-1)) && (j === (n-1))) {
                continue
            }

            if(i === (n-1)) {
                flag = checkIfEqual(i,j,i,j+1)
            }

            else if(j === (n-1)) {
                flag = checkIfEqual(i,j,i+1,j)
            }

            else {
                flag = checkIfEqual(i,j,i+1,j)
                flag = checkIfEqual(i,j,i,j+1)
            }
            if(flag === 1) {
                return flag
            }
        }
    }
    return flag
}

function removeInBetweenZeros() {
    let k
    // let oldArray = []
    let newArray = []
    let count = 0
    let flag1 = 0
    let flag2 = 0

    for(k=0;k<n;k++){
        // oldArray.push(checkArray)
        if(checkArray[k] !== 0){
            newArray.push(checkArray[k])
            if(flag1 === 1) {
                flag2 = 1
            }
        }
        else {
            flag1 = 1
            count+=1
        }
    }
    checkArray = []
    if(flag2 === 1){
        checkChange = 1
    }
    for(k=0;k<newArray.length;k++){
        checkArray.push(newArray[k])
    }
    for(k=0;k<count;k++){
        checkArray.push(0)
    }
    
}

function swipeUp() {
    let emptyTile
    checkChange = 0
    for(i=0;i<n;i++) {
        emptyTile = -1
        checkArray = []
        for(j=0;j<n;j++) {
            checkArray.push(grid[j][i])
        }
        removeInBetweenZeros()
        for(j=0;j<n;j++) {
            grid[j][i] = checkArray[j]
        }

        for(j=0;j<n;j++) {
            if(j === (n-1)) {
                if(emptyTile !== -1 && grid[j][i] !== 0){
                    grid[emptyTile][i] = grid[j][i]
                    grid[j][i] = 0
                    checkChange = 1
                } 
                continue
            }
            if(grid[j][i] === 0) {
                if(emptyTile === -1)
                    emptyTile = j
                continue
            }
            if(checkIfEqual(j,i,j+1,i)){
                scoreCounter += grid[j][i] + grid[j+1][i]
                if(emptyTile !== -1){
                    grid[emptyTile][i] = grid[j][i] + grid[j+1][i]
                    grid[j][i] = 0
                    grid[j+1][i] = 0
                    emptyTile = j
                    checkChange = 1
                }
                else {
                    grid[j][i] = grid[j][i] + grid[j+1][i]
                    grid[j+1][i] = 0
                    emptyTile = j+1
                    checkChange = 1
                }
            }
            else {
                if(emptyTile !== -1) {
                    grid[emptyTile][i] = grid[j][i]
                    emptyTile = j
                    checkChange = 1
                }
            }   
        }
    }

}
function swipeDown() {
    let emptyTile
    checkChange = 0
    for(i=0;i<n;i++) {
        emptyTile = -1
        checkArray = []

        for(j=(n-1);j>=0;j--) {
            checkArray.push(grid[j][i])
        }
        removeInBetweenZeros()
        for(j=(n-1);j>=0;j--) {
            grid[j][i] = checkArray[n-1-j]
        }

        for(j=(n-1);j>=0;j--) {
            if(j === 0) {
                if(emptyTile !== -1 && grid[j][i] !== 0){
                    grid[emptyTile][i] = grid[j][i]
                    grid[j][i] = 0
                    checkChange = 1
                } 
                continue
            }
            if(grid[j][i] === 0) {
                if(emptyTile === -1)
                    emptyTile = j
                continue
            }
            if(checkIfEqual(j,i,j-1,i)){
                scoreCounter += grid[j][i] + grid[j-1][i]
                if(emptyTile !== -1){
                    grid[emptyTile][i] = grid[j][i] + grid[j-1][i]
                    grid[j][i] = 0
                    grid[j-1][i] = 0
                    emptyTile = j
                    checkChange = 1
                }
                else {
                    grid[j][i] = grid[j][i] + grid[j-1][i]
                    grid[j-1][i] = 0
                    emptyTile = j-1
                    checkChange = 1
                }
            }
            else {
                if(emptyTile !== -1) {
                    grid[emptyTile][i] = grid[j][i]
                    emptyTile = j
                    checkChange = 1
                }
            }  
        }
    }
    
}
function swipeLeft() {
    let emptyTile
    checkChange = 0
    for(i=0;i<n;i++) {
        emptyTile = -1
        checkArray = []
        for(j=0;j<n;j++) {
            checkArray.push(grid[i][j])
        }
        removeInBetweenZeros()
        for(j=0;j<n;j++) {
            grid[i][j] = checkArray[j]
        }

        for(j=0;j<n;j++) {
            if(j === (n-1)) {
                if(emptyTile !== -1 && grid[i][j] !== 0){
                    grid[i][emptyTile] = grid[i][j]
                    grid[i][j] = 0
                    checkChange = 1
                } 
                continue
            }
            if(grid[i][j] === 0) {
                if(emptyTile === -1)
                    emptyTile = -1
                continue
            }
            if(checkIfEqual(i,j,i,j+1)){
                scoreCounter += grid[i][j] + grid[i][j+1]
                if(emptyTile !== -1){
                    grid[i][emptyTile] = grid[i][j] + grid[i][j+1]
                    grid[i][j] = 0
                    grid[i][j+1] = 0
                    emptyTile = j
                    checkChange = 1
                }
                else {
                    grid[i][j] = grid[i][j] + grid[i][j+1]
                    grid[i][j+1] = 0
                    emptyTile = j+1
                    checkChange = 1
                }
            }
            else {
                if(emptyTile !== -1) {
                    grid[i][emptyTile] = grid[i][j]
                    emptyTile = j
                    checkChange = 1
                }
            }   
        }
    }
    
}
function swipeRight() {
    let emptyTile
    checkChange = 0
    for(i=0;i<n;i++) {
        emptyTile = -1
        checkArray = []

        for(j=(n-1);j>=0;j--) {
            checkArray.push(grid[i][j])
        }
        removeInBetweenZeros()
        for(j=(n-1);j>=0;j--) {
            grid[i][j] = checkArray[n-1-j]
        }

        for(j=(n-1);j>=0;j--) {
            if(j === 0) {
                if(emptyTile !== -1 && grid[i][j] !== 0){
                    grid[i][emptyTile] = grid[i][j]
                    grid[i][j] = 0
                    checkChange = 1
                } 
                continue
            }
            if(grid[i][j] === 0) {
                if(emptyTile === -1)
                    emptyTile = j
                continue
            }
            if(checkIfEqual(i,j,i,j-1)){
                scoreCounter += grid[i][j] + grid[i][j-1]
                if(emptyTile !== -1){
                    grid[i][emptyTile] = grid[i][j] + grid[i][j-1]
                    grid[i][j] = 0
                    grid[i][j-1] = 0
                    emptyTile = j
                    checkChange = 1
                }
                else {
                    grid[i][j] = grid[i][j] + grid[i][j-1]
                    grid[i][j-1] = 0
                    emptyTile = j-1
                    checkChange = 1
                }
            }
            else {
                if(emptyTile !== -1) {
                    grid[i][emptyTile] = grid[i][j]
                    grid[i][j] = 0
                    emptyTile = j
                    checkChange = 1
                }
            }    
        }
    }
    
}
function implementMove(randomMove) {

    // Implement "SWIPE UP"
    if(randomMove === 1) {
       swipeUp()
    } 
    // Implement "SWIPE RIGHT"
    else if(randomMove === 2) {
        swipeRight()
     } 
     // Implement "SWIPE DOWN"
    else if(randomMove === 3) {
        swipeDown()
     } 
     // Implement "SWIPE LEFT"
    else if(randomMove === 4) {
        swipeLeft()
     } 
    getEmptyTiles()
}

function runGame() {

    initializeGame()
    
    let flag = 1
    while(flag === 1) {
       
        // gridCopy()

        // let move = prompt("Enter your move:")
        let randomMove = makeMove()
        printMove(randomMove)
        implementMove(randomMove)
        
        // printMove(3)
        // implementMove(3)
        
        console.log("checkChange = "+checkChange)  

        if((checkChange === 1)) {
            moveCounter++
            fillEmptyTile()
        } 

        if(checkValidMoves() === 0) {
            flag = 0
            console.log("GAME OVER!!")
            
        } 
        if(flag === 0){
            break
        }
        printScore()
        printGrid()

        
    }

}

runGame()
console.log("No. of Moves: "+moveCounter)
printScore()
printGrid()
console.log("End")

// grid = [[4,4,0,4],[4,4,4,4],[4,4,4,4],[4,4,4,4]]

// swipeRight()
// console.log(grid)