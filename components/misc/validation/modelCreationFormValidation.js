// validation


const name_rules = [
    (value) => {
        if (!value) return 'Name ist erforderlich';
        return true
    }
];

const price_rules = [
    (value) => {
        if (!value) return 'Preis ist erforderlich';
        if (value < 0) return 'Preis muss positiv sein';
        return true
    }
];

const author_rules = [
    (value) => {
        if (!value) return 'Ersteller ist erforderlich';
        return true
    }
];

const modelFiles_rules = [
    (value) => {
        if (!value) return 'Mindestens eine Modell-Datei ist erforderlich';
        return true
    }
];

export default {
    name_rules,
    price_rules,
    author_rules,
    modelFiles_rules
}