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
        result += (ch === ch.toUpperCase() && lower !== ch)
            ? translated.charAt(0).toUpperCase() + translated.slice(1)
            : translated;
    }

    return result;
},

toHy: function (text) {
    const map = {
        tch: 'ճ',

    zh: 'ժ',
    kh: 'խ',
    ts: 'ծ',
    dz: 'ձ',
    gh: 'ղ',
    sh: 'շ',
    ch: 'չ',
    rr: 'ռ',

    a: 'ա',
    b: 'բ',
    g: 'գ',
    d: 'դ',
    e: 'ե',
    z: 'զ',
    y: 'յ',
    i: 'ի',
    l: 'լ',
    k: 'կ',
    h: 'հ',
    m: 'մ',
    n: 'ն',
    o: 'ո',
    p: 'պ',
    j: 'ջ',
    s: 'ս',
    v: 'վ',
    t: 'տ',
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
