import { categories } from '@/routes';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();

  return (
    <>
      <AppBar>
        <CategoryBox>
          {categories.map(({
            name,
            path
          }) => (
            <Categories
              key={name}
              href={path}
              isActive={router.pathname === `${path}`}
            >
              {name}
            </Categories>
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
  background-color: white;
`

const Categories = styled(Link) <{ isActive: boolean }>`
  color: ${props => props.isActive ? '#464EA3' : 'black'};
  text-decoration: none;
  font-weight: bold;
  width: 80px;
  margin: 1rem 0 1rem 2rem;
  overflow-wrap: break-word;
`

export default Category;