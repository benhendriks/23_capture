import styled from "styled-components";

const HomeStyle = styled.div`
  margin: 3rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  .description {
    flex: 1;
    padding-right: 5rem;
    h2 {
      font-weight: lighter;
    }
  }
  .image {
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;   
    }
  }
  .hide {
    overflow: hidden;
  }
`;

export default HomeStyle;