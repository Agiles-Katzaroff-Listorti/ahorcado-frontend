Feature: Count
 
Scenario: Count 3 games
  Given I set test-pepito as nick
  And start a game
  And I guess pepito
  And restart the game
  And I guess pepito
  And restart the game
  And I guess pepito
  Then I should get a 3