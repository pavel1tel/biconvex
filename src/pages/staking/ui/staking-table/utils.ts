import { InvestmentHistory } from "@/shared/api/types";

export const getSortingFunc = (label: string, direction: string) => {
    switch (label) {
        case "Coin":
            if (direction === "DESC") {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return a[1].name > b[1].name ? 1 : -1;
                });
            } else {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return a[1].name > b[1].name ? -1 : 1;
                });
            }
            break;
        case "Plane":
            console.log('here')
            if (direction === "DESC") {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return parseInt(b[1].plan.split(" ")[0]) - parseInt(a[1].plan.split(" ")[0]);
                });
            } else {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return parseInt(a[1].plan.split(" ")[0]) - parseInt(b[1].plan.split(" ")[0]);
                });
            }
            break;
        case "Expires":
            if (direction === "DESC") {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return new Date(a[1].expires) > new Date(b[1].expires) ? 1 : -1;
                });
            } else {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return new Date(a[1].expires) > new Date(b[1].expires) ? -1 : 1;
                });
            }
            break;
        case "Realtime profit":
            if (direction === "DESC") {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return parseFloat(b[1].profit.split(" ")[0]) - parseFloat(a[1].profit.split(" ")[0]);
                });
            } else {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return parseFloat(a[1].profit.split(" ")[0]) - parseFloat(b[1].profit.split(" ")[0]);
                });
            }
            break;
        case "Invested":
            if (direction === "DESC") {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return parseFloat(b[1].invested) - parseFloat(a[1].invested);
                });
            } else {
                return (() => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
                    return parseFloat(a[1].invested) - parseFloat(b[1].invested);
                });
            }
            break;
    }
} 