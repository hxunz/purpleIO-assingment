import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from 'next/link';

const categories = ['AWESOME FOOD STORE', 'ABOUT', 'STORE'];

const Category = () => {
  return (
    <>
      <AppBar>
        <CategoryBox>
          {categories.map((
            name
          ) => (
            <Link href={name.toLowerCase()}>
              <Categories key={name}>
                {name}
              </Categories>
            </Link>
          ))}
        </CategoryBox>
      </AppBar>
    </>
  );
}

const CategoryBox = styled(Box)`
  display: flex;
  display: flex;
  align-items: center;
`

const Categories = styled.div`
  color: 'white';
  text-decoration: none;
  font-weight: bold;
  margin: 1rem 0 1rem 2rem;
  width: 80px;
  overflow-wrap: break-word;
`

export default Category;