Feature: Count
 
Scenario: Count 3 total games
  Given I set test-pepito as nick
  And start a game
  And I guess pepito
  And restart the game
  And I guess pepito
  And restart the game
  And I guess toto
  Then I should get 3 total games