//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@semaphore-protocol/contracts/base/SemaphoreCore.sol";
import "@semaphore-protocol/contracts/base/SemaphoreGroups.sol";


contract Greeters is SemaphoreGroups {
    uint256 groupId = 0;
    uint8 depth = 20;

    event MemberAdded(
        uint256 groupID,
        uint256 commitmentId
    );

    event MemberRemoved(
        uint groupId,
        uint256 commitmentId
    );

    constructor(){
        _createGroup(groupId,depth,0);
    }

    function addMember(uint256 commitmentId) onlyOwner {
        _addMember(groupId,commitmentId);
        emit MemberAdded(groupID, commitmentId);
    }
    function removeMember(
        uint256 commitmentId, 
        uint256[] calldata _proofSiblings,
        uint8[] calldata _proofPathIndices
    ) onlyOwner {
        _removeMember(groupId, commitmentId, _proofSiblings, _proofPathIndices);
        emit MemberRemoved(groupId, commitmentId);
    }
}
