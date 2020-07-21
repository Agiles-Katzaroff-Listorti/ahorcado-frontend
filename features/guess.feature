Feature: Guess
 
Scenario: Guess a word correctly
  Given I set test-pepito as nick
  And start a game
  When I guess pepito
  Then I should win

Scenario: Guess a word incorrectly
  Given I set test-pepito as nick
  And start a game
  When I guess pepe
  Then I should lose