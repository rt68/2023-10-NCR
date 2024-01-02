import { useParams } from 'react-router-dom';

export default function Stock ({ stock }) {
    const { symbol } = useParams();
    const stockDetail = stock.find((s) => s.symbol === symbol);
    return (
        <div>
          <h2>{stockDetail.name} ({stockDetail.symbol})</h2>
          <p>Last Price: {stockDetail.lastPrice}</p>
          <p>Change: {stockDetail.change}</p>
          </div>
  );
}