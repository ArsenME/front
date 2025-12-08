const transliterate = {
toRu: function (text) {
    const map = {
        a: "а", b: "б", c: "к", d: "д", e: "е", f: "ф", g: "г",
        h: "х", i: "и", j: "ж", k: "к", l: "л", m: "м",
        n: "н", o: "о", p: "п", q: "к", r: "р", s: "с",
        t: "т", u: "у", v: "в", w: "в", x: "кс", y: "ы", z: "з"
    };

    let result = "";

    for (let ch of text) {
        const lower = ch.toLowerCase();
        const translated = map[lower] || ch;

        // Preserve uppercase letter
        result += (ch === ch.toUpperCase() && lower !== ch)
            ? translated.charAt(0).toUpperCase() + translated.slice(1)
            : translated;
    }

    return result;
},

toHy: function (text) {
    const map = {
        tch: 'ճ',

    // 2-letter combos
    zh: 'ժ',
    kh: 'խ',
    ts: 'ծ',
    dz: 'ձ',
    gh: 'ղ',
    sh: 'շ',
    ch: 'չ',
    rr: 'ռ',

    // 1-letter matches
    a: 'ա',
    b: 'բ',
    g: 'գ',
    d: 'դ',
    e: 'ե',   // also 'է'
    z: 'զ',
    y: 'յ',   // also 'ը'
    i: 'ի',
    l: 'լ',
    k: 'կ',   // also 'ք'
    h: 'հ',
    m: 'մ',
    n: 'ն',
    o: 'ո',   // also 'օ'
    p: 'պ',   // also 'փ'
    j: 'ջ',
    s: 'ս',
    v: 'վ',
    t: 'տ',   // also 'թ'
    r: 'ր',
    c: 'ց',
    u: 'ւ',
    f: 'ֆ',

    ' ': ' '
    };

    let result = "";

    for (let ch of text) {
        const lower = ch.toLowerCase();
        const translated = map[lower] || ch;

        result += (ch === ch.toUpperCase() && lower !== ch)
            ? translated.charAt(0).toUpperCase() + translated.slice(1)
            : translated;
    }

    return result;
}
};
