const transliterate = {
    toRu: function (text) {
        const map = {
            a: "а", b: "б", c: "к", d: "д", e: "е", f: "ф", g: "г",
            h: "х", i: "и", j: "ж", k: "к", l: "л", m: "м",
            n: "н", o: "о", p: "п", q: "к", r: "р", s: "с",
            t: "т", u: "у", v: "в", w: "в", x: "кс", y: "ы", z: "з"
        };

        return text
            .toLowerCase()
            .split("")
            .map(ch => map[ch] || ch)
            .join("")
            .replace(/(^\w)|\s\w/g, (m) => m.toUpperCase());
    },

    toHy: function (text) {
        const map = {
            a: "ա", b: "բ", c: "կ", d: "դ", e: "ե", f: "ֆ", g: "գ",
            h: "հ", i: "ի", j: "ջ", k: "կ", l: "լ", m: "մ",
            n: "ն", o: "օ", p: "պ", q: "ք", r: "ր", s: "ս",
            t: "տ", u: "ու", v: "վ", w: "վ", x: "քս", y: "յ", z: "զ"
        };

        return text
            .toLowerCase()
            .split("")
            .map(ch => map[ch] || ch)
            .join("")
            .replace(/(^\w)|\s\w/g, (m) => m.toUpperCase());
    }
};
