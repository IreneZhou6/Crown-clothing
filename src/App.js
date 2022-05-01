import Directory from './component/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://robohash.org/1?set=set4&size=340x340',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://robohash.org/2?set=set4&size=340x340',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://robohash.org/3?set=set4&size=340x340',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://robohash.org/4?set=set4&size=340x340',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://robohash.org/5?set=set4&size=340x340',
    },
  ]
  return (
    <Directory categories={categories} />
  );
}

export default App;
