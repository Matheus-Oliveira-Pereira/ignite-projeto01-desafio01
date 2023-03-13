import styled from 'styled-components'

interface containerProps {
    isFull: boolean
}

export const Container = styled.div<containerProps>`
    display: flex;
    padding: 16px;
    gap: 12px;
    height: 72px;
    justify-content: space-between;
    align-items: center;

    background: #262626;
    border: 1px solid #333333;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 17.45px;
        height: 17.45px;
        border-radius: 100px;
        border: 2px solid #4EA8DE;
        background: transparent;
        cursor: pointer;

        ${
        props => {
            if(props.isFull){
                return `
                    background: #5E60CE;
                    border: 2px solid #5E60CE;
                
                `
            }
        }
    }
    }

    h1{
        width: 632px;   
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #F2F2F2;
    }

    img{
        cursor: pointer;
    }

`
