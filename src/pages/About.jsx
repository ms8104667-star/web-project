import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  background: white;
  font-family: 'Inter', sans-serif;
`;

const Content = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const Text = styled.p`
  font-size: 17px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
  box-shadow: 0px 0px 1px 1px #00000013;
  padding: 10px;
  border-radius: 5px;
`;

const Span = styled.span`
  color: #43cea2;
  font-weight: bold;
`;

const Ul = styled.ul`
  margin-top: 10px;
  padding-left: 40px;
`;

const Li = styled.li`
  margin-bottom: 5px;
  position: relative;
`;

const ListType = styled.span`
  position: absolute;
  left: -15px;
  background-color: #43cea2;
  width: 5px;
  height: 5px;
  top: 10px;
  border-radius: 50%;
`;

function About() {
  return (
    <Container>
      <Content>
        <Title>About This Project</Title>
        <Text>
          <Span>BookNest</Span> is a tool that facilitates the process of
          organizing, exploring, and simply finding books for readers. Whether
          you are a devoted reader, a developer seeking the best programming
          books, or seeking personal development/business information, BookNest
          is a place to locate it simply.
        </Text>
        <Text>
          <Span>What You'll Find on BookNest</Span>
          <Ul>
            <Li>
              <ListType />A curated collection of books
            </Li>
            <Li>
              {' '}
              <ListType />
              Detailed information for each book
            </Li>
            <Li>
              {' '}
              <ListType />
              Simple and clean user experience
            </Li>
          </Ul>
        </Text>
        <Text>
          <Span>Our Mission</Span> We believe that reading is one of the most
          powerful investments you can make in yourself. BookNest aims to
          support your reading journey by offering an organized, enjoyable space
          where you can find books that inspire growth, creativity, and
          learning.
        </Text>

        <Text>
          <Span>Contact Us</Span> Have suggestions, feedback, or want to
          recommend a new book to add? We,d love to hear from you. BookNest
          grows with its readers — and your input helps shape its future.{' '}
          <a href="mailto:malazzam852@gmail.com">malazzam852@gmail.com</a>
        </Text>
      </Content>
    </Container>
  );
}

export default About;
