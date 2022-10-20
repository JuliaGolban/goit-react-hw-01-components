import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.table_head}>
                <tr className={css.table_row}>
                    <th className={css.table_heading}>Type</th>
                    <th className={css.table_heading}>Amount</th>
                    <th className={css.table_heading}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.table_body}>
                {items.map(({ id, type, amount, currency }) => {
                   return (<tr key={id} className={css.table_row}>
                        <td className={css.table_data}>{type}</td>
                        <td className={css.table_data}>{amount}</td>
                        <td className={css.table_data}>{currency}</td>
                    </tr>)
                })}
            </tbody>
        </table >)
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }))
}