function ancientGeek(inputString) {
    if (typeof inputString !== "string") {
        return inputString; // echo back
    }

    const outputList = [...inputString].map(value => {
        switch (value.toUpperCase()) {
            // Capital letters
            case 'A':
                return 'Δ';
            case 'E':
                return 'Σ';
            case 'F':
                return 'Γ';
            case 'I':
                return 'Φ';
            case 'N':
                return 'Π';
            case 'O':
                return 'Θ';
            case 'R':
                return '℞';
            case 'Y':
                return 'Ψ';

            // Small letters
            case 'a':
                return 'α';
            case 'b':
                return 'β';
            case 'd':
                return 'δ';
            case 'e':
                return 'ϵ';
            case 'i':
                return 'ι';
            case 'k':
                return 'κ';
            case 'n':
                return 'η';
            case 'o':
                return 'σ';
            case 'p':
                return 'ρ';
            case 'w':
                return 'ω';
            case 'x':
                return 'χ';
            case 'y':
                return 'ψ';

            default:
                return value.toUpperCase();
        }
    });

    return outputList.join("");
}

module.exports = ancientGeek;
