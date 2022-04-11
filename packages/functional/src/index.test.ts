import { greetNamed } from "../src/index";

describe("Test file index.ts", () => {

    it("should return 'Hi! Função Nomeada' for greetNamed('Função Nomeada').", () => {
        expect(greetNamed('Função Nomeada')).toBe('Hi! Função Nomeada');
    });

    // it("should not return 'Hi! Função Nomeada' for greetNamed('Nome Completo').", () => {
    //     expect(greetNamed('Nome Completo')).not.toBe('Hi!');
    // });
});
