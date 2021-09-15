import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  display: block;
  width: ${props => (props.narrowContainer ? "calc(100% - 1rem)" : "100%")};
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Row = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${props => props.FlexItems};
  width: 100%;
  height: 100%;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`