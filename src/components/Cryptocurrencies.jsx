import React, {useState , useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
// import Link from 'antd/lib/typography/Link';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [ cryptos, setCryptos]  =useState([]);
  const [SearchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowercase().includes(SearchTerm.toLowerCase())); 
    setCryptos(filteredData);
  },[cryptosList, SearchTerm]);


  if(isFetching) return 'Loading...';


  return (
    <>
        {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        )}
        <Row gutter={[32,32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
              <col xs={24} sm={12} lg={6} className="cryptp-card" key={currency.id}> 
                <Link to={`/crypto/${currency.id}`}>
                    <Card
                      title={`${currency.rank}. ${currency.name}`}
                      extra={<img className="crypto-image" src="currency.iconUrl" />}
                      hoverable
                    >
                      <p>Price: {millify(currency.price)}</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily Changes: {millify(currency.change)}%</p>
                    </Card>
                </Link>
              </col>  
          ))}
        </Row>
    </>
  )
}

export default Cryptocurrencies