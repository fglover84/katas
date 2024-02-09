import { encryptThis } from '../../../src/2023/09-sep/solution';
import { decryptThis } from '../../../src/2023/09-sep/solution';

describe("Test the encryption function", function() {
    it("should encrypt sentence 1 correctly", function() {
        expect(encryptThis("A")).toStrictEqual("65");
    });

    it("should encrypt sentence 2 correctly", function() {
        expect(encryptThis("A wise old owl lived in an oak")).toStrictEqual("65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
    });

    it("should encrypt sentence 3 correctly", function() {
        expect(encryptThis("The more he saw the less he spoke")).toStrictEqual("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
    });

    it("should encrypt sentence 4 correctly", function() {
        expect(encryptThis("The less he spoke the more he heard")).toStrictEqual("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
    });

    it("should encrypt sentence 5 correctly", function() {
        expect(encryptThis("Why can we not all be like that wise old bird")).toStrictEqual("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
    });
});


describe("Test the decryption function", function() {
    it("should decrypt sentence 1 correctly", function() {
        expect(decryptThis("65")).toStrictEqual("A");
    });

    it("should decrypt sentence 2 correctly", function() {
        expect(decryptThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")).toStrictEqual("A wise old owl lived in an oak");
    });

    it("should decrypt sentence 3 correctly", function() {
        expect(decryptThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")).toStrictEqual("The more he saw the less he spoke");
    });

    it("should decrypt sentence 4 correctly", function() {
        expect(decryptThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")).toStrictEqual("The less he spoke the more he heard");
    });

    it("should decrypt sentence 5 correctly", function() {
        expect(decryptThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")).toStrictEqual("Why can we not all be like that wise old bird");
    });
});
