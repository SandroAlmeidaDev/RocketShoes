import styled from "styled-components";

import {Link} from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover{
        opacity: 0.7;
    }

    div{
        text-align: right;
        margin-right: 10px;

        strong{
            display: block;
            color: #FFF;
        }

        span{
            font-size: 12px;
            color: #999;
        }
    }
`;