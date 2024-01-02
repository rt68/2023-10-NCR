import { Link } from 'react-router-dom';
import '../App.css'

export default function Dashboard ({ stock }) {
    return (
        <div>
            <h1>Most Active Stocks</h1>
            <table className='dashboard-table'>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stock) => {
                        const { name, symbol, lastPrice, change } = stock;
                        const changeClass = change >= 0 ? 'positive' : 'negative';
                        return (
                            <tr key={symbol}>
                                <td><Link to={`/stocks/${symbol}`}>{name}</Link></td>
                                <td>{lastPrice.toFixed(2)}</td>
                                <td className={changeClass}>{change.toFixed(2)} ({((change / lastPrice) * 100).toFixed(2)}%)</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}