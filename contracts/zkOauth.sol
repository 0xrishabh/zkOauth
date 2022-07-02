//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@semaphore-protocol/contracts/base/SemaphoreCore.sol";
import "@semaphore-protocol/contracts/base/SemaphoreGroups.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkOauth is SemaphoreGroups,SemaphoreCore,Ownable {

    uint256 groupId = 0;
    uint8 depth = 20;

    IVerifier public verifier;

    uint256[] members;

    constructor(address _verifier){
        verifier = IVerifier(_verifier);
        _createGroup(groupId, depth, 0);
    }

    function addMember(uint256 commitmentId) public onlyOwner {
        _addMember(groupId, commitmentId);
        members.push(commitmentId);
    }

    function getMembers() external view returns (uint256[] memory) {
        return members;
    }

    function verifyMembership(
        bytes32 _signal,
        uint256 root,
        uint256 _nullifierHash,
        uint256 externalNullifier,
        uint256[8] calldata _proof
    ) public view returns (bool) {
        _verifyProof(
             _signal, 
             root, 
             _nullifierHash, 
             externalNullifier, 
             _proof,
             verifier
        );
        return true;
    }

    function transferOwnership(address newOwner) public override onlyOwner{
        _transferOwnership(newOwner);
    }
}
