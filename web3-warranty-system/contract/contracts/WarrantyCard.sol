// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WarrantyCard is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    struct warrantyInfo {
        address seller;
        uint256 endTime;
    }

    mapping(uint256 => warrantyInfo) private tokens;

    constructor() ERC721("Warranty Card", "WAR") {}

    function createWarrantyCard(
        address to,
        uint256 duration
    ) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        tokens[tokenId].seller = msg.sender;
        tokens[tokenId].endTime = block.timestamp + duration;
        return tokenId;
    }

    function checkWarrantyPeriod(uint256 tokenId) public view returns (bool) {
        require(
            msg.sender == tokens[tokenId].seller ||
                msg.sender == ownerOf(tokenId),
            "Only the seller and the buyer can check warranty"
        );
        if (tokens[tokenId].endTime >= block.timestamp) {
            return true;
        } else {
            return false;
        }
    }

    function getEndOfWarrantyPeriod(
        uint256 tokenId
    ) public view returns (uint256) {
        require(
            msg.sender == tokens[tokenId].seller ||
                msg.sender == ownerOf(tokenId),
            "Only the seller and the buyer can check warranty"
        );
        return tokens[tokenId].endTime;
    }
}
