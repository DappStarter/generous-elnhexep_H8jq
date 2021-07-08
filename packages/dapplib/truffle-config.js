require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain pulse hover drip fun slogan'; 
let testAccounts = [
"0x50c14862a35c91a8c79a204cdea064c2758e87ae058dfc9497a9d1b4ae6b6eaa",
"0x60e02b917a54c15f42b94e76883cca65b00dcc49d83414b37d8bea76703dc376",
"0xf3348a3bcdb7fde6d066e381bf78c93a34bb1bfbb306d7169370b711157d2bc9",
"0x363eb88bda03a4eb94b4f23e7f80619a2f930a17caef455037fd3c5957f04a35",
"0x398107481a0b65f1f69e0fb3af2e4f7778d6aaf315efa51df2548c17d017d1c2",
"0x0408944daa941b8150ba15169abcd2775865bd4760baf7efa99091aef39655ab",
"0x2bcc82260a95c4ce095e064b12096e909c56b772915b189686ce9595a29ecc36",
"0xda95eb2125154968c43d82042102a41564c315cb5e2bcbcaba9625503475569c",
"0x7f659f001d8bcb9e3de6f5fe658f7cf135a5804aabcef02b83e626e0ac9f22ea",
"0x85f7b716711a249fc5650526b5e5438ce8d4fe9c72385af0b8c376e49bca0a2f"
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

