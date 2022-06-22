//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@semaphore-protocol/contracts/base/SemaphoreCore.sol";
import "@semaphore-protocol/contracts/base/SemaphoreGroups.sol";


contract Greeters is SemaphoreCore,SemaphoreGroups {
    uint256 groupId = 0;
    uint8 depth = 32;

    constructor(){
        _createGroup(groupId,depth,0);
    }

    function addMember(uint256 commitmentId){
        _addMember(groupId,commitmentId);
    }
}
