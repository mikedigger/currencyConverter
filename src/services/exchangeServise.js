export default class ExchangeService {

    _baseURL = 'https://api.exchangerate.host/convert?';

    getResource = async (base, target) => {
        const url = `${this._baseURL}from=${base}&to=${target}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }

        return await res.json();
    }

    getExchangeRate = async (base, target) => {
        const res = await this.getResource(base, target);
        return res.info.rate;
    }

    getActualRateDate = async (base, target) => {
        const res = await this.getResource(base, target);
        return res.date;
    }
}

