import React from 'react';
import './admin.scss';
import AdminItem from './AdminItem';
const arr = [
  {
    name: 'Заголовок',
    price: '50',
    description: 'Описание',
    img: '/collection.png',
  },
  {
    name: 'Заголовок2',
    price: '100',
    description: 'Описание',
    img: '/collection.png',
  },
  {
    name: 'Заголовок3',
    price: '150',
    description: 'Описание3',
    img: '/collection.png',
  },
];
export default function Admin() {
  return (
    <section className="admin">
      <div className="admin__header">
        <img src="/logo.png" alt="logo" />
        <img src="/add.png" alt="add" />
      </div>
      <div className="admin__wrapper">
        {arr.map((item, idx) => (
          <AdminItem arr={item} />
        ))}
      </div>
    </section>
  );
}
