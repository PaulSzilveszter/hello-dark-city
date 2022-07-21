/*
    Represents the button from the landing page that can connect the user wallet and redirect the user to the home page 
*/
import "./ConnectWalletButton.css"

export default function ConnectWalletButton (){

  
    return(
    <form id="connect-wallet-form" action="./home"><button type = "submit" id="connect-wallet-button">CONNECT WALLET</button></form>
    )
  

}