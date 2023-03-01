var express = require('express');
var router = express.Router();

let accounts = [
  {
      "id": 1,
      "username": "paulhal",
      "role": "admin"
  },
  {
      "id": 2,
      "username": "johndoe",
      "role": "guest"
  },
  {
      "id": 3,
      "username": "sarahjane",
      "role": "guest"
  }
];

router.get('/accounts', (req, res) => {
  res.json(accounts);
});

router.get('/accounts/:id', (req, res) => {
const accountId = Number(req.params.id);
const getAccount = accounts.find((account) => account.id === accountId);

if (!getAccount) {
  res.status(500).send('Account not found.')
} else {
  res.json(getAccount);
}
});

router.post('/accounts', (req, res) => {
  const newAccount = req.body;

  accounts.push(newAccount);

  res.json(accounts);
});

module.exports = router;
