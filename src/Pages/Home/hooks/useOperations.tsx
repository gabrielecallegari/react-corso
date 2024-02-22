const useOperations = (n1:number, n2:number) => {

    // per richiamare l'hooks custom creato, si fa così:
    // crei una struttura che accolga gli elementi ritornati,
    // li devi scrivere tutti e con il nome usato nell'hooks

    function somma() {
        return n1+n2
    }

    function differenza() {
        return n1-n2
    }

    function prodotto() {
        return n1*n2
    }

    function quoziente() {
        return n1/n2
    }

    return {
        somma, differenza, prodotto, quoziente
    }
}

export default useOperations