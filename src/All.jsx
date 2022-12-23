import SwapVertIcon from '@mui/icons-material/SwapVert';

const All = (props) => {
    const currencyOptions = props.CurrencyOptions
    const currentCurrency = props.currentCurrency
    const toCurrency = props.toCurrency
    const onChangeCurrency = props.onChangeCurrency
    const changefromcurrency = props.changefromCurrency
    return (
        <>
            <div className="container">

                <select value={currentCurrency} onChange={changefromcurrency}>
                    {currencyOptions.map((options) => (
                        <option value={options}>{options}</option>
                    ))}
                </select>
                <input type="number" id="box" />
                <SwapVertIcon id='swap' />
                <select value={toCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map((options) => (
                        <option value={options}>{options}</option>
                    ))}
                </select>
                <input type="number" id="box" />
            </div>
        </>
    );
}

export default All;