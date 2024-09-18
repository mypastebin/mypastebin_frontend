import React from 'react';
import styled from 'styled-components';
import { CustomScrollbar } from "../../styled/styled.tsx";

const PasteContainer = styled.div`
    width: 55%;
    height: 80%;
    background-color: #2C3E50;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(36, 52, 86, 0.5);
    display: flex;
    flex-direction: column;
    margin-right: 20px; /* Отступ справа */
`;

const PasteHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #ECF0F1;
    font-weight: bold;
    font-size: 18px;
`;

const TextArea = styled.textarea`
    width: calc(100% - 22px);
    height: calc(100% - 42px);
    background-color: #34495E;
    color: #ECF0F1;
    border: none;
    padding: 10px;
    border-radius: 5px;
    resize: none;
    font-size: 16px;
    line-height: 1.5;

    &:focus {
        outline: none;
        border: 1px solid #606365;
    }

    ${CustomScrollbar}
`;

interface PasteProps {
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Paste: React.FC<PasteProps> = ({ setContent }) => {
    return (
        <PasteContainer>
            <PasteHeader>
                <span>New Paste</span>
            </PasteHeader>
            <TextArea
                placeholder="Enter your text here..."
                onChange={(e) => setContent(e.target.value)}
            />
        </PasteContainer>
    );
}

export default Paste;
