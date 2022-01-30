require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift recipe noble slow grid argue slot genre'; 
let testAccounts = [
"0x5a88ddb348b0b2db657e9acb2ea0e15f356279c9f7acc2b4e45e098d46d36869",
"0xbfbef46e3e18920ef10bc0949c73bf98fd9454369abcb4ff33593a6a00cf2332",
"0x89c2c41ba3717f2b2a2461a276931f09cb6cac9682c8bbf98bdfdc8a3b4938be",
"0x0c1be42f65a35747f1222c77189ff0ff55e8b713c555654048335c4476c6def3",
"0x074fb7dc4e5f7f54c4d6b3df6adf60d044468f8aaaa35eb2764f79c22d63f1a2",
"0x4d2ad292b37e0d1365ad4d2835034da35bddf34376936e5311bf88c6154943e5",
"0x00321ceb85e71e0a284c1f1aa8e1ccef921a7ac778b09ed00d45323bfc27a4dc",
"0x92155200e7dfc3995dc45915c8bd72bc632b6ec5bc09f785373e23148bd02fd0",
"0x929934381607aa580ab1f3701079088cc5d69fb3364cf41c5bec78482c702abf",
"0x231861b532c6a9e653ce4e6e4bf2201e97ffb37b74fe8988923bc4b1afb5acdb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

