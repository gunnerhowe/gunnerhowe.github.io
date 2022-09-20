import { Dalle } from dalle-node

export async function getdalle2(caption) {
    const dalle = new Dalle("sess-gkBvdsysh38gXC5i52VtLcyrvrBz5whPQrOtHdBl"); // Bearer Token 
    const generations = await dalle.generate(caption);

    console.log(generations)
}