namespace greetNamed {
  export interface Address {
    codCEP: number;
    logradouro: string;
    numLogradouro: string;
    comLogradouro: string;
    uf: string;
    bairro: string;
    cidade: string;
  }

  export interface VMCompany {
    id: number;
    name: string;
    numCNPJ: number;
    endereco: Address;
  }

  export interface ICompany<T> {
    addCompany(company: T): string;
    updateCompany(company: T): T;
    getCompanyById(id: number): T;
    getAllCompany(): Array<T>;
  }

  export class Testando implements ICompany<VMCompany> {
    addCompany(company: VMCompany): string {
      throw new Error("Method not implemented.");
    }
    updateCompany(company: VMCompany): VMCompany {
      throw new Error("Method not implemented.");
    }
    getCompanyById(id: number): VMCompany {
      throw new Error("Method not implemented.");
    }
    getAllCompany(): VMCompany[] {
      throw new Error("Method not implemented.");
    }
  }
}