//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@semaphore-protocol/contracts/base/SemaphoreCore.sol";
import "@semaphore-protocol/contracts/base/SemaphoreGroups.sol";

contract ZkOauth is SemaphoreGroups,SemaphoreCore {
    uint256 groupId = 0;
    uint8 depth = 20;
    IVerifier public verifier;
    event Login(bool success);
    constructor(address _verifier){
        verifier = IVerifier(_verifier);
        _createGroup(groupId,depth,0);
    }

    function addMember(uint256 commitmentId) public {
        _addMember(groupId,commitmentId);
    }
    
    function verifyMembership(
        bytes32 _signal,
        uint256 root,
        uint256 _nullifierHash,
        uint256 externalNullifier,
        uint256[8] calldata _proof
    ) public returns (bool) {
         _verifyProof(
             _signal, 
             root, 
             _nullifierHash, 
             externalNullifier, 
             _proof,
             verifier
        );
        //_saveNullifierHash(_nullifierHash);
        emit Login(true);
        return true;
    }
    /*function addPlatform(string name, ) public {

    }*/
}
