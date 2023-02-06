import styled from '@emotion/styled';

import RestaurantList from '@/components/restaurants/RestaurantList';

const RestaurantsPage = () => {
  return (
    <Wrapper>
      <Title>EAT</Title>
      <RestaurantList />
    </Wrapper>
  )
};

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: .02em;
  padding-left: 16px;
`

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`

export default RestaurantsPage;
