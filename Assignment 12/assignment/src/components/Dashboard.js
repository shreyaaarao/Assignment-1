import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
 
const products = [
  { id: 1, name: 'Groceries', price: '$10',  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345344457/FA/TS/LD/181564626/grocery-products-500x500.webp'
   },
  { id: 2, name: 'Electronics', price: '$20', image:'https://tse3.mm.bing.net/th/id/OIP._4fzjX0Ty9QAu8gLIorrsAHaEZ?rs=1&pid=ImgDetMain' },
  { id: 3, name: 'Fashion', price: '$30', image:'https://tse3.mm.bing.net/th/id/OIP.8zH-p8EbNfqIZxuvpuv7ZQHaEO?rs=1&pid=ImgDetMain' },
];
 
const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {products.map(product => (
        <Card key={product.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography color="textSecondary">
              Price: {product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
 
export default Dashboard;