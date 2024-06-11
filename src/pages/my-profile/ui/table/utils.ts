import { Crypto } from "@/shared/api/types";

export const getSortingFunc = (label: string, direction: string) => {
    switch (label) {
        case "Coin Name":
            if (direction === "DESC") {
                return (() => (a: Crypto, b: Crypto) => {
                    return a.name > b.name ? 1 : -1;
                });
            } else {
                return (() => (a: Crypto, b: Crypto) => {
                    return a.name > b.name ? -1 : 1;
                });
            }
            break;
        case "Balance":
            if (direction === "DESC") {
                return (() => (a: Crypto, b: Crypto) => {
                    return b. balance - a.balance;
                });
            } else {
                return (() => (a: Crypto, b: Crypto) => {
                    return a. balance - b.balance;
                });
            }
            break;
        case "Equivalent":
            if (direction === "DESC") {
                return (() => (a: Crypto, b: Crypto) => {
                    return (b.price * b.balance)  - (a.price * a.balance);
                });
            } else {
                return (() => (a: Crypto, b: Crypto) => {
                    return (a.price * a.balance)  - (b.price * b.balance);
                });
            }
            break;
    }
} 