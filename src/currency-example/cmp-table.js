import React from "react";
import Currency from "./cmp-currency";
export default class Currencies extends React.Component {
    data = {
        currencies: [
            {
                exchangeType: 'USD/TRY',
                exchangeFrom: 'DOLAR',
                exchangeTo: 'TL',
                buy: '8,4430',
                sell: '8,4491',
                diff: '%1,24'
            },
            {
                exchangeType: 'EUR/TRY',
                exchangeFrom: 'EURO',
                exchangeTo: 'TL',
                buy: '9,9897',
                sell: '9,9951',
                diff: '%1,06'
            },
            {
                exchangeType: 'GBP/TRY',
                exchangeFrom: 'STERLIN',
                exchangeTo: 'TL',
                buy: '11,6447',
                sell: '11,6588',
                diff: '%1,11'
            }
        ]
    };

    render(){
        const result = this.data.currencies.map( temp =>
            <Currency
                exchangeType={temp.exchangeType}
                buy={temp.buy}
                sell={temp.sell}
                diff={temp.diff}
            />);
        console.log(result);

    return(
        <table>
            <tr>
            <th>Döviz Cinsi</th>
            <th>Alış(TL)</th>
            <th>Satış(TL)</th>
            <th>Fark(%)</th>
            </tr>
            {result}
        </table>
    );
    }
}