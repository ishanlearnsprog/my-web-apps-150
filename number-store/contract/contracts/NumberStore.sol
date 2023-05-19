// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract NumberStore {
    struct Store {
        uint number;
        uint countUpdates;
    }

    mapping(address => Store) UserStore;

    event Update(address user, uint number);

    function setNumber(uint num) public {
        UserStore[msg.sender].number = num;
        UserStore[msg.sender].countUpdates =
            UserStore[msg.sender].countUpdates +
            1;
        emit Update(msg.sender, num);
    }

    function getNumber() public view returns (uint) {
        return UserStore[msg.sender].number;
    }

    function getNumOfUpdates() public view returns (uint) {
        return UserStore[msg.sender].countUpdates;
    }
}
