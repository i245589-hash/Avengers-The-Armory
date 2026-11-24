// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AvengersCoin is ERC20 {
    mapping(address => bool) public claimed;
    mapping(address => mapping(uint256 => bool)) private inventory;
    uint256[5] private prices = [uint256(100), 200, 300, 150, 500];
    event EquipmentPurchased(address indexed agent, uint256 indexed item);
    constructor() ERC20("Avengers Coin", "AVC") {}
    function claimTokens() external {
        require(!claimed[msg.sender], "Already claimed");
        claimed[msg.sender] = true;
        _mint(msg.sender, 1000 * 10**decimals());
    }
    function buyEquipment(uint256 item) external {
        require(item < 5, "Invalid item");
        require(!inventory[msg.sender][item], "Already owned");
        _burn(msg.sender, prices[item] * 10**decimals());
        inventory[msg.sender][item] = true;
        emit EquipmentPurchased(msg.sender, item);
    }
    function getInventory(address agent) external view returns (bool[5] memory owned) {
        for (uint256 i; i < 5; i++) owned[i] = inventory[agent][i];
    }
}
