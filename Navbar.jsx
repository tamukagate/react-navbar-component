import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 450px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  cursor: pointer;
  border: 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src=""></Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input
              style={{ outlineStyle: 'none' }}
              placeholder="Search"
              type="text"
            />
            <SearchIcon
              style={{
                color: 'gray',
                fontSize: 18,
                cursor: 'pointer',
              }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <Language>EN</Language>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
