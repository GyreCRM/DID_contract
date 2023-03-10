import { Contract, ContractProvider, Sender, Address, Cell, Slice, contractAddress, beginCell } from "ton-core";

export default class Counter implements Contract {

  async sendCertificate(provider: ContractProvider, via: Sender, hash: Slice, student_id: number) {
      const messageBody = beginCell()
          .store_uint(1, 32) // op
          .store_uint(12345, 64)  // query_id
          .store_uint(student_id, 32)       // key (student_id)
          .store_slice(hash)
          .end_cell();
        await provider.internal(via, {
          value: "0.002", // send 0.002 TON for gas
          body: messageBody
        });
      }

  async getCertificate(provider: ContractProvider, student_id: number) {
    const [stud_id , hash] = await provider.get("certificate", [student_id]);
    return [stud_id, hash] as const;
  }
  constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {}
}
