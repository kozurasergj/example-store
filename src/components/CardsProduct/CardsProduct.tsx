import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Card as AntdCard, Col, Row, Image, Button } from 'antd';
import { Dispatch } from 'redux';
import { getCard } from '../../store/getICard';
import {  Card  } from '../../interface/interfaces';
import { rootState } from '../../interface/interfaces';

const CardsProduct = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const cards = useSelector((state: rootState) => state.reducerCard.cards);

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  return (
    < Row gutter={[24, 24]} style={{ borderRadius: '10px', padding: '20px', background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./bg.jpg)" }} >
      {cards?.map((card: Card) => (
        <Col span={6} key={card.id} style={{ overflow: "hidden" }}>
          <AntdCard bordered={false} style={{ overflow: "hidden", padding: '0px' }}>
            <Image src={card.imageUrl} alt={card.name} />
            <div className='description'>
              <span className='name'>{card.count}</span>
              <span className='name'>{card.name}</span>
              <span className='name'>{card.price}</span>
            </div >
            <Button className='button' >Buy</Button>
            <Button className='button'>Comments</Button>
          </AntdCard>
        </Col >
      ))
      }
    </ Row >
  )
}

export default CardsProduct;
