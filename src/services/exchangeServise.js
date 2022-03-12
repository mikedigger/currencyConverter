export default class ExchangeService {

    _baseURL = 'https://exchange-rates.abstractapi.com/v1/live/?api_key=6ee9b8a3ae8b4e5cb8dd7bb210025781'

    getResource = async (base, target) => {
        const url = `${this._baseURL}&base=${base}&target=${target}`;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }

    getExchangeRate = async (base, target) => {
        const res = await this.getResource(base, target);
        return res.exchange_rates[target];
    }

    getActualRateDate = async (base, target) => {
        const res = await this.getResource(base, target);
        return res.last_updated;
    }
}

