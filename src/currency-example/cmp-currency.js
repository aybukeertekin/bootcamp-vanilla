let Currency = (props) => {
    const {exchangeType, exchangeFrom, exchangeTo, buy, sell, diff} = props;
    return(
        <tr>
            <th>{exchangeType}</th>
            <th>{buy}</th>
            <th>{sell}</th>
            <th>{diff}</th>
        </tr>
    );
}
export default Currency;