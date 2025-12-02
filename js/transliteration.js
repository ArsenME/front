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
        a: "ա", b: "բ", c: "կ", d: "դ", e: "ե", f: "ֆ", g: "գ",
        h: "հ", i: "ի", j: "ջ", k: "կ", l: "լ", m: "մ",
        n: "ն", o: "օ", p: "պ", q: "ք", r: "ր", s: "ս",
        t: "տ", u: "ու", v: "վ", w: "վ", x: "քս", y: "յ", z: "զ"
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
