# Ektos AI

Ektos AI is an innovative platform aimed at reducing biases in AI decision-making processes using a multi-layered machine learning framework and blockchain technology. The platform focuses on three main use cases: financial, healthcare, and human resources.

## Features

- Multi-layered machine learning framework for bias identification and mitigation
- Integration with blockchain for transparent and auditable decision recording
- User-friendly web interface for interacting with the platform
- Supports financial, healthcare, and human resources use cases

## Getting Started

### Prerequisites

- Node.js
- Python
- Solidity
- Truffle
- Docker

### Installation

1. Clone the repository: git clone https://github.com/jojomani/ektos-ai.git
2. Install the dependencies for the client and server:
   - cd ektos-ai
   - cd client && npm install
   - cd ../server && npm install
3. Install the Python dependencies for the machine learning component:
   - cd ../ml
   - pip install -r requirements.txt
4. Compile and deploy the smart contract:
   - cd ../blockchain
   - truffle compile
   - truffle migrate

### Running the Application Locally

1. Start the backend server:
   - cd server
   - npm start
2. Start the frontend development server:
   - cd ../client
   - npm start
3. Open your browser and visit `http://localhost:3000` to access the application.

### Testing

1. Run backend tests:
   - cd server
   - npm test
2. Run frontend tests:
   - cd ../client
   - npm test
3. Run smart contract tests:
   - cd ../blockchain
   - truffle test

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).