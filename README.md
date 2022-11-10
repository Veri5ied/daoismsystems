# Daoism Systems

Rinkeby has been depreciated so I decided to work with mainnet && Goerli which proves to be much more efficient too.
<br>
This project makes use of useDapp for:

- Connecting to Metamask.
- Displaying Wallet address.
- Displaying wallet balance.
- Sending token to an address.
- Minting tokens.

## How to Run

- Clone the repository.
- Run yarn install to install dependencies.
- Yarn start to run application on http://localhost:3000.
- To be authenticated, you need to connect you metamask wallet.

## Behavior noticed

The getDefaultProvider() from ethers kept making multiple calls which can crash an application, so it was moved to a custom chains using infura

### Happy Hacking
