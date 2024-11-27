import React from 'react';
import { useParams } from 'react-router-dom';

const CardPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Card Page</h2>
      <p>Details for freelancer with ID: {id}</p>
    </div>
  );
};

export default CardPage;
