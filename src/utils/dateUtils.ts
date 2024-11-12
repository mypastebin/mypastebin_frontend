
const convertExpirationToDate = (expiration: string): string => {
    const now = new Date();
    let expirationDate: Date;

    switch (expiration) {
        case '10minutes':
            expirationDate = new Date(now.getTime() + 10 * 60000);
            break;
        case '1hour':
            expirationDate = new Date(now.getTime() + 60 * 60000);
            break;
        case '1day':
            expirationDate = new Date(now.getTime() + 24 * 60 * 60000);
            break;
        case '1week':
            expirationDate = new Date(now.getTime() + 7 * 24 * 60 * 60000);
            break;
        case 'never':
        default:
            expirationDate = new Date(Date.UTC(9999, 11, 31, 23, 59, 59));
            break;
    }

    return expirationDate.toISOString().slice(0, 19) + 'Z';
};

export default convertExpirationToDate;