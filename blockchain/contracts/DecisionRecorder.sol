pragma solidity ^0.8.0;

contract DecisionRecorder {
    struct Decision {
        address user;
        string useCase;
        uint256 layer;
        bool decision;
        string[] biases;
        uint256 timestamp;
    }

    Decision[] public decisions;

    event DecisionRecorded(address indexed user, string useCase, uint256 layer, bool decision, string[] biases, uint256 timestamp);

    function recordDecision(string memory _useCase, uint256 _layer, bool _decision, string[] memory _biases) public {
        Decision memory newDecision = Decision(msg.sender, _useCase, _layer, _decision, _biases, block.timestamp);
        decisions.push(newDecision);
        emit DecisionRecorded(msg.sender, _useCase, _layer, _decision, _biases, block.timestamp);
    }

    function getDecisionCount() public view returns (uint256) {
        return decisions.length;
    }
}