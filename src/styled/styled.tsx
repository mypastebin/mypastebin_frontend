import { css } from 'styled-components';

export const FamilyFontBase = css`
    font-family: 'Roboto Mono', monospace;
`;

export const CustomScrollbar = css`
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #1E2A38;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2C3E50;
        border-radius: 5px;
        border: 2px solid #1E2A38;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #34495E;
        cursor: pointer;
    }
`;
