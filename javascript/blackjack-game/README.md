
Link:<br>
https://np55-blackjack-game.netlify.app/

<h2>A simple Blackjack game written in HTML5, CSS, and Javascript.</h2>

<ul>
  <li>An actual set of decks put together rather than just picking completely random values each time.</li>
  <li>Variable bet amounts (using 4 different customizable buttons)</li>
  <li>A dealer, because Blackjack is way more fun when there's some competition.</li>
  <li>Card Images, because who wants to decipher what 5C, AS, JH means??</li>
  <li>I've heavily commented the JS code, and will continue to do so with the HTML and CSS as I learn more about all three.</li>
  <li>I've written logic to only show the dealer's first card and card value until the player's turn is over.</li>
  <li>I've written the logic to handle Aces having variable value based on the value of all the other cards in the hand.</li>
  <li>A double down button, only available on the player's first turn of a round. Doubles the bet amount (if the player has enough money) and ends the player's turn.</li>
  <li>Stats. So. Many. Stats. It's only 12 stats, but still, it felt like a lot as I was adding them into the code.</li>
</ul>

<p>The following game mechanics are adjustable by changing the variables at the top of the .js file:</p>
<ul>  
  <li>Bet amounts: $1, $5, $10, and $20 are base</li>
  <li>Player starting funds: $100 base</li>
  <li>Number of Decks: 4 base. The game doesn't really shuffle, so much as pull a random card from the stack until the stack is empty. I may redo this at some point for a "real" shuffle.</li>
  <li>Dealer Draw To: When it's the dealer's turn they will continue to draw cards to this variable's setting. Standard is 17.</li>
</ul>


<ul>
  <li>Split button - To be truly like a casino game, there needs to be a way to split the cards if the player draws two cards of the same value.</li>
  <li>Help - I want to be able to put a button up that displays a pop up with the game's current settings (dealer draw to, etc.) as well as basic help text</li>
  <li>Mobile friendly - I will probably keep tweaking the layout so it is more responsive and looks good on a phone.</li>
  <li>Multiplayer - As I progress through my journey of learning JS/Node I will likely make this multi-player, because it'll be way more fun.</li>
</ul>

Screenshot:<br>
<img width="823" alt="blackjack-game" src="https://github.com/NP558565/my-projects-portfolio/assets/76566329/cc3cd5c8-0ed8-41ab-85a9-ab693ccf3a57">


