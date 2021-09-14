import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid var(--colors-green);
  outline: none;
  padding: 10px;
  border-radius: 0;
`;

const InputSearch = styled.span`
  cursor: pointer;
`;

const UnitContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Unit = styled.span<{ active: boolean }>`
  font-weight: ${(props) => (props.active ? "700" : "500")};
  cursor: pointer;
  color: ${(props) => (props.active ? "var(--colors-green)" : "currentColor")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--colors-green);
  }
`;

const Input = ({
  value,
  onClick,
  unit,
  onUnitChange,
}: {
  value: string;
  unit: string;
  onUnitChange: (value: string) => void;
  onClick: (value: string) => void;
}) => {
  const [valueInput, setValueInput] = useState(value);

  const onChangeInput = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      onClick(valueInput);
    }

    setValueInput(e.target.value);
  };

  return (
    <Container>
      <InputContainer>
        <InputStyle
          value={valueInput}
          onKeyUp={onChangeInput}
          onChange={onChangeInput}
          placeholder="Search for places..."
        />
        <InputSearch onClick={() => onClick(valueInput)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1abc9c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </InputSearch>
      </InputContainer>

      <UnitContainer>
        <Unit onClick={() => onUnitChange("metric")} active={unit === "metric"}>
          &deg;C
        </Unit>{" "}
        |{" "}
        <Unit
          onClick={() => onUnitChange("imperial")}
          active={unit === "imperial"}
        >
          &deg;F
        </Unit>
      </UnitContainer>
    </Container>
  );
};

export default Input;
