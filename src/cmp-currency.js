let currency = ({exchangeType, exchangeFrom, exchangeTo, buy, sell, diff}) => {
    return(
        <tr>
            <th>{exchangeType}</th>
            <th>{exchangeFrom}</th>
            <th>{exchangeTo}</th>
            <th>{buy}</th>
            <th>{sell}</th>
            <th>{diff}</th>
        </tr>
    );
}
export default currency;