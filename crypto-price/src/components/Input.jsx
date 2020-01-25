import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardSubtitle, InputGroup, InputGroupAddon, Input, Button, CardBody  } from 'reactstrap';

const NewCoin = () => {

  const [coin, setCoin] = useState({
    coinText: "",
    price: null
  })

  const handleChanges = e => {
    //console.log("handleChanges: " + e.target.value)
    setCoin({...coin, coinText: e.target.value.toUpperCase()})
  }

  const clearForm = e => {
    setCoin({...coin, coinText: "", price: null})
  }

  const fetchPrice = e => {
    e.preventDefault()
    axios
      .get(`https://api.cryptonator.com/api/ticker/${coin.coinText}-usd`)
      .then(res => {
        console.log("fetchPrice result: " + JSON.stringify(res))
        setCoin({...coin, price: res.data.ticker.price})
      })
      .catch(err => console.log(err))
  }

  return(
    <div>
      <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button color="danger" onClick={clearForm}>Clear</Button>
          </InputGroupAddon>
        <Input
          type="text"
          value={coin.coinText}
          placeholder="Enter Ticker Symbol"
          onChange={handleChanges}
        />
          <InputGroupAddon addonType="append">
            <Button color="success" onChange={handleChanges} onClick={fetchPrice}>Get Price</Button>
          </InputGroupAddon>
        
      </InputGroup>
    <Card>
      <CardBody>
        <CardTitle>Ticker Symbol: {coin.coinText}</CardTitle>
        <CardSubtitle>Price: ${coin.price}</CardSubtitle>
      </CardBody>
  </Card>
  
  </div>
  )
}

export default NewCoin;