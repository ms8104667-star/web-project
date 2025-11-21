import { useEffect, useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  background: #f5f5f5;
  min-height: 100vh;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const Search = styled.div`
  flex: 1;
  position: relative;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  padding-left: 3rem;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  left: 1rem;
  translate: 0 -45%;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: #fff;
  // the rem is a unit that is relative to the root element font size and in our case 1 rem = 10px
  // Check the GlobalStyles.jsx file for more informaton about our global styles
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: grid;

  justify-content: space-between;
`;

const H3 = styled.h3`
  margin-bottom: 0.5rem;
  color: #43cea2;
  font-size: 16px;
`;

const Span = styled.span`
  margin-right: 0.5rem;
  color: #43cea2;
`;

const P = styled.p`
  font-size: 13px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const Column = styled.div`
  padding-right: 5px;
`;

const VerticalLine = styled.div`
  background-color: #cccccc8b;
  height: auto;
  width: 1px;
  margin: 0 10px;
`;

const Price = styled.p`
  font-size: 13px;
  margin-top: 10px;
  color: #267f63;
  font-weight: bold;
`;

function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('year-asc');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/books.json');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


	console.log(data)

  // Filter and sort logic
  const filteredData =
    data.books
      ?.filter(
        book =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()) ||
          book.genre.toLowerCase().includes(search.toLowerCase())
      )
      ?.sort((a, b) => {
        if (sortOption === 'year-asc') return a.year - b.year;
        if (sortOption === 'year-desc') return b.year - a.year;
        if (sortOption === 'rating-asc') return a.rating - b.rating;
        if (sortOption === 'rating-desc') return b.rating - a.rating;
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        return 0;
      }) || [];

  return (
    <Container>
      <h2>Book List</h2>
      <Controls>
        <Search>
          <Icon>
            <MdOutlineSearch />
          </Icon>
          <Input
            type="text"
            placeholder="Search for a book by title, author, or genre..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Search>
        <div>
          <Span>
            Sort By <BiSortAlt2 />
          </Span>
          <Select
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
          >
            <option value="year-asc">Year-asc</option>
            <option value="year-desc">Year-desc</option>
            <option value="rating-asc">Rating-asc</option>
            <option value="rating-desc">Rating-desc</option>
            <option value="price-asc">Price-asc</option>
            <option value="price-desc">Price-desc</option>
          </Select>
        </div>
      </Controls>

      <Grid>
        {filteredData.map(book => (
          <Card key={book.id}>
            <H3>{book.title}</H3>
            <Row>
              <Column>
                <P>
                  <strong>Author:</strong> {book.author}
                </P>
                <P>
                  <strong>Publisher:</strong> {book.publisher}
                </P>
                <P>
                  <strong>Genre:</strong> {book.genre}
                </P>
              </Column>
              <VerticalLine />
              <Column>
                <P>
                  <strong>Language:</strong> {book.language}
                </P>
                <P>
                  <strong>Year:</strong> {book.year}
                </P>
                <P>
                  <strong>Rating:</strong> {book.rating}
                </P>
              </Column>
            </Row>
            <Row style={{ alignSelf: 'end' }}>
              <Price>
                <strong>Price:</strong> ${book.price}
              </Price>
            </Row>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Main;
