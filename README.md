# DID
### Repo contains::
- Contract for TonHackaton 
- Required binaries and project structure to launch using toncli
- Unit tests for the contract

## Repo Structure:
- tests: 
    - Tests checking main contract functions: tests/main_tests.func
    - Additional tests checking helpful functions: tests/supplementary_tests.func
- contract:
    - Project contract: func/DID_contract.func
- messages:
    - Sample message to use with ton-core/other contract: func/internal_message.func
    - Messages to send with toncli(fift files): fift/message1.fif   fift/message2.fif
    