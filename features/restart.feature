Feature: Restart
 
Scenario: Restart game after finishing another one
  Given I set test-pepito as nick
  And start a game
  When I guess pepito
  And restart the game
  Then I should get a new game