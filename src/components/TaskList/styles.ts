import styled from 'styled-components'

export type ListHeaderTitleVariant = 'purple' | 'blue';

interface ListHeaderTitleProps {
    variant: ListHeaderTitleVariant;
}

const listHeaderTitleVariant = {
    purple: '#8284FA',
    blue: '#4EA8DE'
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 90px;
    width: 736px;
    height: 100%;
`
export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;

    width: 736px;
    height: 19px;

    margin-bottom: 24px;

    div{
        display: flex;
        justify-content: center;
        gap: 8px;
    }
`

export const ListHeaderTitle = styled.h1<ListHeaderTitleProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    margin-bottom: 24px;
    ${
        props => {
            return `color: ${listHeaderTitleVariant[props.variant]}`
        }
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const MainContentNull     = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    border-top: 1px  solid #333333;
    border-radius: 8px;

    height: 244px;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        width: 56px;
        height: 56px;
        margin-bottom: 16px;
    }

    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        color: #808080;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #808080;
    }
`