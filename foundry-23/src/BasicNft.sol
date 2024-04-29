// SPDX-License-Identifier : MIT
pragma solidity 0.8.19;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BasicNFT is ERC721{

    uint256 private t_counter;

    constructor() ERC721("BasicNFT","B_NFT"){
        t_counter = 0;
    }

    function mintNft() public {
        
    }
}