/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Data } from './Data';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  witdth: 100%;
`;

const Container = styled.div`
  width: 98%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-family: 'Concert One', cursive;

  h2 {
    padding: 2rem;
    font-size: 1rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: rgba(184, 148, 50, 0.95);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(184, 148, 50, 0.95);
  border-top: 1px solid rgba(184, 148, 50, 0.95);
  overflow: hidden;
  font-family: 'Concert One', cursive;

  p {
    margin: 1rem;
    font-size: 1rem;
  }
`;

function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: 'rgba(184, 148, 50, 0.95)', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h2>{item.question}</h2>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
}

export default Accordion;
