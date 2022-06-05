// https://eth-goerli.alchemyapi.io/v2/ERWrbHvW68KnCKEjTxVjBC1TngJLElPL

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: 'goerli',
  networks: {
    hardhat:{},
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/ERWrbHvW68KnCKEjTxVjBC1TngJLElPL',
      accounts: ['9dad57207b2f4fd0975864688e1ef4509438fd7d825a1e24f63fcbb0f9df5aff']
    }
  }
}