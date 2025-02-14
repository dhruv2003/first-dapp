// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract MoodDiary{
    string mood;

    function setMood(string memory _mood) public {
        mood=_mood;
    }

    function getMood()public view returns (string memory){
        return mood;
    }
}