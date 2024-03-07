<?php

  // This program plays rock papers scissors with the user
  // By Venika Sem
  // @version 1.0
  // @since Feb-2024

  //Now, let's play
  $returnText = 'You have not played yet. Select your weapon and hit the Play button';
  if (userHasValidSelection()) {
    $userChoice = $_GET['userSelect'];
    //Let the computer make a choice
    $computerChoice = letComputerChoose();
    //Now, let's play, and return the result  text!
    $returnText = "The server chose $computerChoice. ";
    $result = compare($userChoice, $computerChoice);
    if($result == 0) {
      $returnText .= 'The result is a Tie!';
    } else if($result == 1) {
      $returnText .= 'You won!';
    } else {
      $returnText .= 'The server won!';
    } 
  }

?>

<!DOCTYPE html>
<html>
  <head><title>Experiment</title></head>
  <body>
    <h1>Rock, Paper, Scissors in PHP</h1>
    <form method="GET">
      <select name="userSelect">
        <option value="rock" <?php echo isSelected('rock'); ?> >Rock</option>
        <option value="paper" <?php echo isSelected('paper'); ?> >Paper</option>
        <option value="scissors" <?php echo isSelected('scissors'); ?> >Scissors</option>
      </select>
      <input type="submit" value="Play"></input>
    </form>
    <p><?php echo $returnText; ?></p>
  </body>
</html>

<?php
/**
 * Returns TRUE when the user has sent a valid selection
 */
function userHasValidSelection() {
    return isset($_GET['userSelect']) && in_array($_GET['userSelect'], ["rock", "paper", "scissors"]);
}

/**
 * returns the text selected if the user has sent a query var and $choice equals the value of the queryvar
 */
function isSelected($choice) {
  if (isset($_GET['userSelect']) && $_GET['userSelect'] === $choice) {
    return 'selected';
  }
}

/**
 * Let the computer make a choice
 * Returns at random: "rock", "paper" or "scissors"
 */
function letComputerChoose() {
    $numberChoice = rand(0, 2);
    if ($numberChoice == 0) {
        return "rock";
    } 
    if ($numberChoice == 1) {
        return "paper";
    }
    return "scissors";

}

/**
 * Compares two choices and returns a number representing the result:
 * 0 = the result is a Tie
 * 1 = $choice1 wins
 * 2 = $choice2 wins
 */
function compare($choice1, $choice2) {
  if ($choice1 === $choice2) {
    return 0;
  }
  if ($choice1 === 'rock') {
    if ($choice2 === 'scissors') {
      return 1;
    } else {
      return 2;
    }
  }
  if ($choice1 === 'paper') {
    if ($choice2 === 'rock') {
      return 1;
    } else {
      return 2;
    }
  }
  if ($choice1 === 'scissors') {
    if ($choice2 === 'paper') {
      return 1;
    } else {
      return 2;
    }
  }
}
?>
