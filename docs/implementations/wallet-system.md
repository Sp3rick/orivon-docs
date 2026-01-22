---
sidebar_position: 10
---

# Wallet system

The wallet system is made up to allow devs and users to have great powers of customization for crypto management, it improves a lot of aspects of Web3 experience including:

- **DApps for every crypto**
- **Easy support for any kind of account**, just adding BSQ token to Orivon will automatically ad support for Mnemonic, Hardware walles, and way more
- **Increased security**, the less complex is the security model, the safer user is, if the user can use a single account (maybe Hardware wallet) for his entire Web3 experience he has less ways of having his security broken (ex. device compromission)
- **More control on address generation**, under the same key you can manage non-conventional addresses list by special apps logic, while still being safely tied to your account


There are 3 layers of integration of Apps into the Wallet system

**Layer 1: Accounts**

The Orivon Wallet is organized in accounts, which Apps can implement with their own logic

Every account may represent a Mnemonic, an Hard wallet account, or anything else by the integration App logic (ex. multisig, smart accounts etc...)  
At transaction time these Apps may want to open a GUI to complete the operation, so Orivon allows it.  
Every account type exposes various functions, the more standard functions are exposed, and more it will be integrable with as much crypto as possible (relative standards yet to be defined)

Depending on user settings an account may connect automatically to web3sites visited based on their [Web3 Score](web3-score)

**Layer 2: Crypto**

An App can integrate a new Crypto into the wallet

Crypto integrating apps has the job to implement standard functions to generate addresses, sign and verify transactions, interact with the network and possibly accomplish compatibility with all of the functions of that crypto  

Each Crypto set of available functions is identified trough a standardized TAG (ex: MONERO_V1), websites usually declares what TAG supports or it needs to work, so that Orivon can communicate to it the avaiability of that Crypto

Definition of new TAG's and standards set of functions are left to the community, as Orivon we will make available a category on our [**OrivonStack**](https://orivonstack.com) so that standards can me made and discussed

**Layer 3: Address book**

Address book is what allows Apps to actually generate the address list usable by users for of their means

**Crypto** Apps may want to acutally add sections to the Address book by themselves for standard addresses (for bitcoin with bcq1 or 1 or 3 etc.. 0x ethereum addresses etc...), but other Apps can use the same **Crypto** Apps to generate their own addresses list, it could be for ethereum vanity addresses, or Gnosis safe address access etc…

The **Crypto**'s integrations will expose all needed functions to make it possible.

Also address book Apps may need to open a GUI to complete the operation, that's allowed too by Orivon