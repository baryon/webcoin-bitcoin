// blockchain definition

var u = require('bitcoin-util')

// definition of the genesis block's header
var genesisHeader = {
  height: 0,
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b'),
  timestamp: 1231006505,
  bits: 0x1d00ffff,
  nonce: 2083236893
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    version: 536870912,
    prevHash: Buffer.from('6b05bd2c4a06b3d8503a033c2593396a25a79e1dcadb14000000000000000000', 'hex'),
    merkleRoot: Buffer.from('1b08df3d42cd9a38d8b66adf9dc5eb464f503633bd861085ffff723634531596', 'hex'),
    timestamp: 1548657313,
    bits: 389048373,
    nonce: 716662719,
    height: 560448
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
