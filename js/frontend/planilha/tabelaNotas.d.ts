export interface Aluno {
    id: string;
    nome: string;
    nota1: number;
    nota2: number;
    nota3: number;
    nota4: number;
    media: number;
}
export declare function rowFacture(dados: Record<string, unknown>[] | unknown[][], semCabecalho: boolean): Record<string, unknown>[];
export declare function rowDefault(dados: Aluno[]): void;
export declare function rowNewAdd(): HTMLDivElement;
//# sourceMappingURL=tabelaNotas.d.ts.map