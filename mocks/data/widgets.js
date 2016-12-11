const widgets = [{
  'id': 'item-1',
  'name': 'Nunc lobortis',
  'price': '10.00',
  'currency': 'usd',
  'image': 'item1-full.jpg',
  'cover': 'item1-small.jpg',
  'stock': [{
    'merchant': 'andy-p',
    'shippingTypes': [{
      'type': 'post',
      'price': '5.00',
      'description': 'Regular mail'
    }, {
      'type': 'pickup',
      'price': '0',
      'description': 'Pickups are by appointment only',
    }],
    'location': '40.712784,-74.005941',
    'size': 'small',
    'price': '10.00',
    'currency': 'usd',
    'available': 3
  }, {
    'merchant': 'jerry-b',
    'shippingTypes': [{
      'type': 'delivery',
      'price': '0',
      'description': 'on orders of $25 or more'
    }, {
      'type': 'pickup',
      'price': '0',
      'description': 'Pickups are by appointment only',
      'windows': [{
        'date': {
          from: 'Sat, 10 Dec 2016 23:05:57 GMT',
          to: '"Sat, 11 Dec 2016 23:05:57 GMT"'
        }
      }]
    }],
    'location': '40.734493, -74.003220',
    'size': 'small',
    'price': '8.00',
    'currency': 'usd',
    'available': 1
  }, ],
}];

export default widgets;